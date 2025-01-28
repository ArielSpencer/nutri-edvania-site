import Footer from "@/components/Footer";
import AboutSection from "@/components/home/AboutSection";
import BannerHome from "@/components/home/BannerHome";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import EbookSection from "@/components/home/EbookSection";
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
      <EbookSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home;