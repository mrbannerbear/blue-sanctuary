import AboutSection from "@/components/about/AboutSection";
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
      <AboutSection/>
      <Footer/>
  </main>
  );
}
