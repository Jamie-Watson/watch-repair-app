import HomeJumbotron from "../components/HomeJumbotron";
import HomeCertifications from "../components/HomeCertifications";
import HomeServices from "../components/HomeServices";
import HomeWatches from "../components/HomeWatches";
import Contact from "../components/Contact";
import SecondaryHomeJumbotron from "../components/SecondaryHomeJumbotron";

function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeCertifications />
      <HomeServices />
      <SecondaryHomeJumbotron />
      <HomeWatches />
      <Contact />
    </>
  );
}

export default Home;