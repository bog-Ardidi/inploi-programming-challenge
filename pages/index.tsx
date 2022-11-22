import { KeyboardEvent } from "react";
import Layout from "../components/Layout";
import { BackgroundGradient } from "../styles/Background.styled";
import {
  Container,
  HomeTitle,
  HomeSearchBox,
} from "../styles/HomeComponents.styled";
import { useRouter } from "next/router";
import { FaSearch, FaLongArrowAltRight } from "react-icons/fa";
import { SearchIcon } from "../components/SearchIcon";

export default function Home() {
  const router = useRouter();

  const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/jobs?query=${e.currentTarget.value}`);
    }
  };

  return (
    <BackgroundGradient>
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
    </BackgroundGradient>
  );
}
