import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Counter from "./Counter";
import Faq from "./Faq";
import PopularServices from "./PopularServices";
import Pricing from "./Pricing";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>One Service | Home</title>
      </Helmet>
      <nav>
        <Navbar></Navbar>
        <Banner></Banner>
        <PopularServices></PopularServices>
        <Faq></Faq>
        <Pricing></Pricing>
        <Counter></Counter>

        <Footer></Footer>
      </nav>
    </div>
  );
};

export default Home;
