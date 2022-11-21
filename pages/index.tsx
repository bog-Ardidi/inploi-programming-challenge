import Layout from "../components/Layout";
import { SearchIcon } from "../components/SearchIcon";
import { BackgroundGradient } from "../styles/Background.styled";
import {
  Container,
  HomeTitle,
  HomeSearchBox,
} from "../styles/HomeComponents.styled";
import { FaSearch, FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
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
          />
          {/* <SearchIcon
            icon_one={<FaSearch size="42px" />}
            icon_two={<FaLongArrowAltRight size="42px" />}
          /> */}
        </Container>
      </Layout>
    </BackgroundGradient>
  );
}
