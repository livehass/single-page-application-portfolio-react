import Navbar from "../components/NavBar/NavBar";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Home from "../pages/home/Home";

export default function Root() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Footer /> */}
    </>
  );
}
