import Accordion from "../../components/AccordionItem";
import { Container } from "../../styles/HomeComponents.styled";
import Layout from "../../components/Layout";
import { BackgroundGradient } from "../../styles/Background.styled";
import { JobsTitle, SearchContainer } from "../../styles/JobsComponents.styled";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectStateResults,
  Hits,
} from "react-instantsearch-dom";
import SearchBox from "../../components/SearchBox";
import { useRouter } from "next/router";
import { SearchState } from "react-instantsearch-core";

interface JobsProps {
  query: string;
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

const Results = connectStateResults(
  ({ searchState, searchResults, children }: any) => {
    if (!searchState || !searchState.query) return <div>no query</div>;

    if (!searchResults || searchResults.nbHits === 0)
      return <div>No results have been found for {searchState.query}.</div>;

    return <div style={{ overflow: "hidden" }}>{children}</div>;
  }
);

const index_name = process.env.NEXT_PUBLIC_ALGOLIA_INDEX;

export default function Jobs({ query = "software engineer" }: JobsProps) {
  const router = useRouter();

  if (!router.isReady) return <div>loading</div>;

  return (
    <BackgroundGradient>
      <Layout>
        {router.query && (
          <Container>
            <JobsTitle>Job openings for 💼</JobsTitle>
            <InstantSearch indexName={index_name} searchClient={searchClient}>
              <SearchContainer>
                <SearchBox defaultRefinement={router.query.query?.toString()} />
                <p>Not happy with these jobs? Try another!</p>
              </SearchContainer>

              <Results>
                <Hits hitComponent={Accordion} />
              </Results>
            </InstantSearch>
          </Container>
        )}
      </Layout>
    </BackgroundGradient>
  );
}
