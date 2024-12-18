import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardData = [
    {
      name: "Alice Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      description: "Specialized in React.js and Node.js with 5+ years of experience.",
    },
    {
      name: "John Doe",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
      description: "Passionate about creating intuitive user interfaces.",
    },
    {
      name: "Emma Smith",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      description: "Focused on machine learning and data analysis.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            role={card.role}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
