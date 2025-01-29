const CompaniesSection = () => {
  const companies = [
    { name: "Grãos do Castelo", logo: "/assets/companies/graos-do-castelo-logo.png" },
    { name: "Grãos do Castelo", logo: "/assets/companies/graos-do-castelo-logo.png" },
    { name: "Grãos do Castelo", logo: "/assets/companies/graos-do-castelo-logo.png" },
    { name: "Grãos do Castelo", logo: "/assets/companies/graos-do-castelo-logo.png" },
    { name: "Grãos do Castelo", logo: "/assets/companies/graos-do-castelo-logo.png" },
    { name: "Grãos do Castelo", logo: "/assets/companies/graos-do-castelo-logo.png" },
  ];

  return (
    <section className="bg-background/50 py-16 text-center">
      <h2 className="text-xl text-secondary uppercase">Palestras & Eventos</h2>
      <h3 className="text-2xl font-bold my-4">Empresas que já confiaram em nosso trabalho</h3>
      <p className="text-writing text-lg mb-8 max-w-2xl mx-auto">
        Levando através de palestras e parcerias conhecimento e impactando a vida de muitos profissionais.
      </p>

      <div className="flex flex-wrap justify-center items-center justify-around px-40">
        {companies.map((company, index) => (
          <img key={index} src={company.logo} alt={company.name} className="h-32 opacity-50 hover:opacity-100 transition" />
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;