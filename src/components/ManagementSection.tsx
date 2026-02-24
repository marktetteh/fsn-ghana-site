"use client";
import React from "react";

export default function ManagementSection() {
  const members = [
    {
      name: "Prof. Fred Yao Gbagbo",
      role: "Board Member",
      img: "/images/profile1.jpeg",
      bio: `Public health consultant specializing in population health, bioethics, reproductive health and policy analysis with over 25 years of experience. 
      Associate Professor at University of Education, Winneba and Acting Dean of Faculty of Health, Allied Sciences and Home Economics Education.`
    },
    {
      name: "Dr. Emmanuel Kofi Mbiah",
      role: "Board Member",
      img: "/images/profile2.jpeg",
      bio: `Private legal practitioner and Maritime Law Consultant. Former CEO of Ghana Shippers Authority for 19 years. 
      Member of Chartered Institute of Arbitrators UK and Fellow of Chartered Institute of Logistics and Transport.`
    },
    {
      name: "Mr. Mark Tetteh Azietaku",
      role: "Board Member",
      img: "/images/profile3.jpeg",
      bio: `Certified Cambridge ICT/IT/CS teacher with strong background in analytics and machine learning. 
      Passionate about technology, education and data-driven development.`
    },
    {
      name: "Ms Angela Nambuer Asamoah",
      role: "Board Member",
      img: "/images/profile4.jpeg",
      bio: `Strategic communication specialist and academic focused on social advocacy and community-led development.
      Uses theatre arts and communication frameworks to enhance organizational visibility and impact.`
    },
    {
      name: "Ms Christabel Ewedji",
      role: "Executive Director",
      img: "/images/profile5.jpeg",
      bio: `Founder of Fisherfolk Sustainability Network and leader in small-scale fisheries development.
      Dedicated to empowering fishing communities through advocacy, safety training, sustainability and policy engagement across Ghana.`
    }
  ];

  return (
    <section id="management" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Management & Board of Directors
        </h2>

        <p className="text-center text-slate-600 mt-3">
          Leadership guiding our mission and community impact
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-sky-500"
              />

              <h3 className="text-lg font-bold">{m.name}</h3>
              <p className="text-sky-600 font-medium">{m.role}</p>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}