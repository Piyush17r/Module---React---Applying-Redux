import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "What is your return policy?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "How do I track my order?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Can I purchase items again?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ width: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {accordionData.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              padding: "10px",
              backgroundColor: "#f7f7f7",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </div>
          
          <div
            style={{
              padding: "10px",
              display: activeIndex === index ? "block" : "none",
              backgroundColor: "#fff",
              color: "#333",
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
