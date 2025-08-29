import AboutUs from "../ui/AboutUs";
import Community from "../ui/Community"
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Testimonials from "../ui/Testimonials";
import Tutors from "../ui/Tutors";

function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Tutors />
      <Testimonials />
      <Community />
      <Footer />
    </>
  );
}

export default Home;
