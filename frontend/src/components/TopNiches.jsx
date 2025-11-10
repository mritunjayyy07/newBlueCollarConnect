import React from "react";

const TopNiches = () => {
  const services = [
    {
  id: 1,
  service: "Electrician",
  description:
    "Installation, repair, and maintenance of electrical wiring, systems, and fixtures to ensure safe and efficient power usage.",
},
{
  id: 2,
  service: "Plumber",
  description:
    "Professional plumbing services including installation and repair of pipes, faucets, water systems, and drainage solutions.",
},
{
  id: 3,
  service: "Carpenter",
  description:
    "Woodwork services such as constructing, installing, and repairing structures, furniture, and interior fittings.",
},
{
  id: 4,
  service: "Welder",
  description:
    "High-precision welding services for metal structures, machinery, and fabrication projects with safety and durability ensured.",
},
{
  id: 5,
  service: "Mason",
  description:
    "Construction and repair of brick, stone, and concrete structures including walls, pavements, and building foundations.",
},
{
  id: 6,
  service: "HVAC Technician",
  description:
    "Installation, maintenance, and repair of heating, ventilation, and air conditioning systems to ensure optimal indoor climate control.",
},

  ];

  return (
    <section className="services">
      <h3>Top roles</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
