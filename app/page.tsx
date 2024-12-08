import AboutSection from "@/components/about/AboutSection";
import PopulationSlider from "@/components/endangered/Endangered";
import GetInvolved from "@/components/getInvolved/GetInvolved";
import Banner from "@/components/home/Banner";
import Problem from "@/components/problem/Problem";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
  <main className="bg-blue-950/20">
      <Navbar/>
      <Banner/>
      <Problem/>
      <PopulationSlider/>
      <AboutSection/>
      <GetInvolved/>
      <Footer/>
  </main>
  );
}
