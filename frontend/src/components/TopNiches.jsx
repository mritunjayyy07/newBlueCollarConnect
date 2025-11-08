import React from "react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Electrician",
      description:
        "Expert electricians for wiring, lighting, and electrical repair work — ensuring safety, efficiency, and reliable power solutions.",
    },
    {
      id: 2,
      service: "Plumber",
      description:
        "Skilled plumbers offering leak repair, pipeline fitting, and bathroom installation with quick and quality service.",
    },
    {
      id: 3,
      service: "Carpenter",
      description:
        "Professional carpenters for furniture making, wood repair, and customized fittings for homes and offices.",
    },
    {
      id: 4,
      service: "Welder",
      description:
        "Certified welders experienced in fabrication, structural welding, and metal repair projects for industrial and home needs.",
    },
    {
      id: 5,
      service: "Painter",
      description:
        "Trusted painters providing interior and exterior painting services with smooth finishes and durable color quality.",
    },
    {
      id: 6,
      service: "Driver",
      description:
        "Experienced and verified drivers for personal, commercial, and delivery services — punctual, safe, and reliable.",
    },
  ];

  return (
    <section className="services">
      <h3>Top BlueCollar Niches</h3>
      <div className="grid">
        {services.map((element) => (
          <div className="card" key={element.id}>
            <h4>{element.service}</h4>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopNiches;

