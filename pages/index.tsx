import { FormEventHandler, KeyboardEvent, useState } from "react";
import Layout from "../components/overlay/Layout";
import { BackgroundGradientHome } from "../styles/Background.styled";
import {
  Container,
  HomeTitle,
  HomeSearchBox,
  SearchButton,
} from "../styles/Home.styled";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearch = (e: any) => {
    e.preventDefault();
    router.push(`/jobs?query=${search}`);
  };

  return (
    <BackgroundGradientHome>
      <Layout>
        <Container>
          <HomeTitle>
            Find a job you love 🐸 <br /> with Jobberinio.
          </HomeTitle>
          <form onSubmit={onSearch}>
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
          </form>
        </Container>
      </Layout>
    </BackgroundGradientHome>
  );
}
