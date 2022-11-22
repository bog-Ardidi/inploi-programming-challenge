import Accordion from "../../components/Accordion";
import { Container } from "../../styles/HomeComponents.styled";
import Layout from "../../components/Layout";
import { Background } from "../../styles/Background.styled";
import { JobsTitle, SearchContainer } from "../../styles/JobsComponents.styled";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    connectStateResults,
    Hits
} from "react-instantsearch-dom";
import SearchBox from "../../components/SearchBox";
import { useRouter } from "next/router";
import {SearchState} from "react-instantsearch-core";

interface JobsProps {
  query: string;
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
);

const Results = connectStateResults(({ searchState, searchResults, children }: any) =>
    {
        if(!searchState || !searchState.query)
            return <div>no query</div>

        if(!searchResults || searchResults.nbHits === 0)
            return <div>No results have been found for {searchState.query}.</div>;

        return children;

    }
);

const index_name = process.env.NEXT_PUBLIC_ALGOLIA_INDEX;

export default function Jobs({ query = "software engineer" }: JobsProps) {
  const router = useRouter();

  if(!router.isReady) return <div>loading</div>

  return (
    <Background>
      <Layout>
        {router.query && (
          <Container>
            <JobsTitle>
              Job openings for 💼
              {/*<div>"{query}"</div>*/}
            </JobsTitle>

            <InstantSearch indexName={index_name} searchClient={searchClient}>
              <SearchContainer>
                <p>Not happy with these jobs? Try again!</p>
                <SearchBox defaultRefinement={router.query.query?.toString()} />
              </SearchContainer>

              <Results>
                <Hits hitComponent={Accordion} />
              </Results>

            </InstantSearch>
          </Container>
        )}
      </Layout>
    </Background>
  );
}
