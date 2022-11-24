import Accordion from "../../components/accordion/AccordionItem";
import { Container } from "../../styles/Home.styled";
import Layout from "../../components/overlay/Layout";
import { BackgroundGradient } from "../../styles/Background.styled";
import { JobsTitle, SearchContainer } from "../../styles/JobPage.styled";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectStateResults,
  Hits,
} from "react-instantsearch-dom";
import SearchBox from "../../components/search/SearchBox";
import { useRouter } from "next/router";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

const index_name = process.env.NEXT_PUBLIC_ALGOLIA_INDEX;

const Results = connectStateResults(
  ({ searchState, searchResults, children }: any) => {
    if (!searchState || !searchState.query)
      return <div>Please input a search</div>;

    if (!searchResults || searchResults.nbHits === 0)
      return <div>No results have been found for {searchState.query}.</div>;

    return <div style={{ overflow: "hidden" }}>{children}</div>;
  }
);

export default function Jobs() {
  const router = useRouter();

  if (!router.isReady && !router.query) return <div>loading</div>;

  return (
    <BackgroundGradient>
      <Layout>
        <Container>
          <JobsTitle>Job openings for 💼</JobsTitle>
          <InstantSearch indexName={index_name} searchClient={searchClient}>
            <SearchContainer>
              <SearchBox
                defaultRefinement={router.query?.query?.toString() ?? ""}
              />
              <p>Not happy with these jobs? Try another!</p>
            </SearchContainer>
            <Results>
              <Hits hitComponent={Accordion} />
            </Results>
          </InstantSearch>
        </Container>
      </Layout>
    </BackgroundGradient>
  );
}
