import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import JobCard from "../../components/jobPage/JobCard";
import Layout from "../../components/overlay/Layout";
import { BackgroundGradient } from "../../styles/Background.styled";
import { Container } from "../../styles/Home.styled";
import { JobDataType } from "../../types/jobs";

export const getServerSideProps: GetServerSideProps<{
  data: JobDataType;
}> = async (context) => {
  const {
    NEXT_PUBLIC_ALGOLIA_API_KEY,
    NEXT_PUBLIC_ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_INDEX,
  } = process.env;

  const headers = {
    "X-Algolia-API-Key": NEXT_PUBLIC_ALGOLIA_API_KEY,
    "X-Algolia-Application-id": NEXT_PUBLIC_ALGOLIA_APP_ID,
  };

  const filterParams = new URLSearchParams({
    filters: `id=${context.params?.id}`,
  });

  const res = await fetch(
    `https://${NEXT_PUBLIC_ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${NEXT_PUBLIC_ALGOLIA_INDEX}?${filterParams.toString()}`,
    {
      headers,
    }
  );

  const response = await res.json();

  // If no results found for job id redirect to 404
  if (response.hits.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: response,
    },
  };
};

export default function Job({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BackgroundGradient>
      <Layout>
        <Container>
          <JobCard data={data} />
        </Container>
      </Layout>
    </BackgroundGradient>
  );
}
