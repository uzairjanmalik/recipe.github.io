import React from 'react';

// RecipeCard Component for individual recipe cards
const RecipeCard = ({ videoSrc, title, description }) => {
  return (
    <div className="recipe-card">
      <video src={videoSrc} controls />
      <div className="recipe-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Main Recipes Component
const Recipes = () => {
  const recipeData = [
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Chicken Alfredo',
      description: 'Creamy pasta with grilled chicken, Alfredo sauce, and Parmesan cheese.',
    },
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Beef Stroganoff',
      description: 'Tender beef in a savory mushroom sauce served over egg noodles.',
    },
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Tacos',
      description: 'Mexican tacos filled with seasoned beef, salsa, guacamole, and cheese.',
    },
    // Add more recipes here...
  ];

  return (
    <main className="content">
      <h1>Recipes</h1>
      <p>Here are some of our favorite recipes.</p>

      <div className="recipe-grid">
        {recipeData.map((recipe, index) => (
          <RecipeCard
            key={index}
            videoSrc={recipe.videoSrc}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Recipes;
