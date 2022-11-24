import { KeyboardEvent } from "react";
import Layout from "../components/overlay/Layout";
import {
  BackgroundGradient,
  BackgroundGradientHome,
} from "../styles/Background.styled";
import { Container, HomeTitle, HomeSearchBox } from "../styles/Home.styled";
import { useRouter } from "next/router";
import { FaSearch, FaLongArrowAltRight } from "react-icons/fa";
import { SearchIcon } from "../components/search/SearchIcon";

export default function Home() {
  const router = useRouter();

  const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/jobs?query=${e.currentTarget.value}`);
    }
  };

  return (
    <BackgroundGradientHome>
      <Layout>
        <Container>
          <HomeTitle>
            Find a job you love 🐸 <br /> with Jobberinio.
          </HomeTitle>
          <HomeSearchBox
            type="text"
            required
            placeholder="Find your next job.."
            onKeyDown={onSearch}
          />
          {/*<SearchIcon*/}
          {/*  icon_one={<FaSearch size="42px" />}*/}
          {/*  icon_two={<FaLongArrowAltRight size="42px" />}*/}
          {/*/>*/}
        </Container>
      </Layout>
    </BackgroundGradientHome>
  );
}
