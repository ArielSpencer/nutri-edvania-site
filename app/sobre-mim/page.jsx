import CompaniesSection from "@/components/about/CompaniesSection";
import MissionValuesSection from "@/components/about/MissionValuesSection";
import StorySection from "@/components/about/StorySection";
import Banner from "@/components/Banner";
import BlogSection from "@/components/home/BlogSection";

const About = () => {
  return <div>
    <Banner
      title="Sobre Edvânia Soares"
      description="CEO da Estima Nutrição, formada em 2004 e atuando como nutricionista clínica e esportiva funcional desde 2009."
    />
    <StorySection />
    <MissionValuesSection />
    {/* <CompaniesSection /> */}
    <BlogSection />
  </div>
}

export default About;