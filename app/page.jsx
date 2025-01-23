import AboutSection from "@/components/home/AboutSection";
import BannerHome from "@/components/home/BannerHome";
import ServicesSection from "@/components/home/ServicesSection";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <ServicesSection />
      <AboutSection />
    </div>
  )
}

export default Home;