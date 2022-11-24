import { FormEvent, useState } from "react";
import Layout from "../components/overlay/Layout";
import { BackgroundGradient } from "../styles/Background.styled";
import {
  Container,
  HomeTitle,
  HomeSearchBox,
  SearchButton,
} from "../styles/Home.styled";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import { Flex } from "../styles/uits.styled";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/jobs?query=${search}`);
  };

  return (
    <BackgroundGradient home>
      <Layout>
        <Container>
          <HomeTitle>
            Find a job you love 🐸 <br /> with Jobberinio.
          </HomeTitle>
          <form onSubmit={onSearch}>
            <Flex>
              <HomeSearchBox
                type="text"
                required
                value={search}
                placeholder="Find your next job.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <SearchButton type="submit">
                <FaSearch size={20} />
              </SearchButton>
            </Flex>
          </form>
        </Container>
      </Layout>
    </BackgroundGradient>
  );
}
