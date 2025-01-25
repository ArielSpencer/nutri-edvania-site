import AboutSection from "@/components/home/AboutSection";
import BannerHome from "@/components/home/BannerHome";
import MediaSection from "@/components/home/MediaSection";
import ServicesSection from "@/components/home/ServicesSection";
import YouTubeSection from "@/components/home/YouTubeSection";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <ServicesSection />
      <AboutSection />
      <MediaSection />
      <YouTubeSection />
    </div>
  )
}

export default Home;