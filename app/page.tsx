import AboutSection from "@/components/about/AboutSection";
import Banner from "@/components/home/Banner";
import Problem from "@/components/problem/Problem";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
  <main>
      <Navbar/>
      <Banner/>
      <Problem/>
      <AboutSection/>
  </main>
  );
}
