import Banner from "@/components/Banner";
import ChooseUsSection from "@/components/contact/ChooseUsSection";
import CTA from "@/components/CTA";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import ServicesSection from "@/components/home/ServicesSection";

const Services = () => {
  return <div>
    <Banner
      title="Serviços"
      description="Descubra como a nutrição pode transformar sua vida! Oferecemos atendimentos especializados, palestras e soluções personalizadas para melhorar sua saúde de forma leve e sustentável."
    />
    <ServicesSection />
    <CTA
      title="Nutrição Estratégica para Empresas de Alto Desempenho"
      description="Invista no bem-estar dos seus colaboradores com palestras, workshops e consultorias nutricionais personalizadas."
      buttonText="Solicite uma Proposta"
    />
    <ContactSection />
    {/* <ChooseUsSection /> */}
    <BlogSection />
  </div>
}

export default Services;