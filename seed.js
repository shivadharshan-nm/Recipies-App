import mongoose from 'mongoose';
import Recipe from './models/recipeModel.js'; // Update the path as needed

const recipes = [
  {
    title: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan Cheese', 'Bacon', 'Black Pepper'],
    instructions: 'Cook spaghetti. In a bowl, whisk eggs and cheese. Fry bacon, mix everything, and season.'
  },
  {
    title: 'Chicken Curry',
    ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk', 'Onions', 'Garlic', 'Ginger'],
    instructions: 'Sauté onions, garlic, and ginger. Add chicken and curry powder, then coconut milk. Simmer until cooked.'
  },
  {
    title: 'Vegetable Stir Fry',
    ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Ginger', 'Garlic'],
    instructions: 'Sauté garlic and ginger. Add vegetables and stir-fry. Add soy sauce and serve.'
  },
  {
    title: 'Beef Tacos',
    ingredients: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Taco Seasoning'],
    instructions: 'Cook beef with taco seasoning. Fill taco shells with beef, lettuce, tomatoes, and cheese.'
  },
  {
    title: 'Margherita Pizza',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Fresh Basil'],
    instructions: 'Spread tomato sauce on dough. Add cheese and bake. Garnish with basil.'
  },
  {
    title: 'Caesar Salad',
    ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
    instructions: 'Toss lettuce, croutons, and cheese with Caesar dressing.'
  },
  {
    title: 'Pancakes',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Butter', 'Baking Powder'],
    instructions: 'Mix ingredients into a batter. Cook on a griddle until golden brown.'
  },
  {
    title: 'Grilled Cheese Sandwich',
    ingredients: ['Bread', 'Cheese', 'Butter'],
    instructions: 'Butter the bread, place cheese between slices, and grill until golden.'
  },
  {
    title: 'Tomato Soup',
    ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Vegetable Broth', 'Cream'],
    instructions: 'Cook tomatoes, onions, and garlic. Blend with broth, add cream, and simmer.'
  },
  {
    title: 'Chocolate Chip Cookies',
    ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Chocolate Chips', 'Baking Soda'],
    instructions: 'Mix ingredients, form dough, and bake until golden brown.'
  },
  {
    title: 'Chicken Alfredo',
    ingredients: ['Fettuccine', 'Chicken', 'Heavy Cream', 'Parmesan Cheese', 'Garlic'],
    instructions: 'Cook fettuccine. Sauté chicken. Prepare sauce with cream, garlic, and cheese, then combine.'
  },
  {
    title: 'Beef Stroganoff',
    ingredients: ['Beef', 'Mushrooms', 'Onions', 'Sour Cream', 'Egg Noodles'],
    instructions: 'Cook beef, mushrooms, and onions. Add sour cream and serve over noodles.'
  },
  {
    title: 'Greek Salad',
    ingredients: ['Cucumber', 'Tomatoes', 'Feta Cheese', 'Olives', 'Red Onion', 'Olive Oil'],
    instructions: 'Mix all ingredients and drizzle with olive oil.'
  },
  {
    title: 'Stuffed Bell Peppers',
    ingredients: ['Bell Peppers', 'Ground Beef', 'Rice', 'Tomato Sauce', 'Cheese'],
    instructions: 'Stuff peppers with beef, rice, and sauce. Top with cheese and bake.'
  },
  {
    title: 'Shrimp Scampi',
    ingredients: ['Shrimp', 'Garlic', 'Butter', 'Lemon', 'Spaghetti', 'Parsley'],
    instructions: 'Sauté shrimp with garlic and butter. Add lemon juice and parsley. Serve over spaghetti.'
  },
  {
    title: 'Minestrone Soup',
    ingredients: ['Vegetable Broth', 'Pasta', 'Beans', 'Tomatoes', 'Carrots', 'Zucchini'],
    instructions: 'Cook vegetables in broth. Add pasta and beans, simmer until cooked.'
  },
  {
    title: 'Baked Ziti',
    ingredients: ['Ziti', 'Ricotta Cheese', 'Marinara Sauce', 'Mozzarella Cheese'],
    instructions: 'Layer cooked ziti, ricotta, sauce, and mozzarella. Bake until bubbly.'
  },
  {
    title: 'Lemon Chicken',
    ingredients: ['Chicken Breast', 'Lemon', 'Garlic', 'Butter', 'Parsley'],
    instructions: 'Sauté chicken with garlic and butter. Add lemon juice and garnish with parsley.'
  },
  {
    title: 'Avocado Toast',
    ingredients: ['Bread', 'Avocado', 'Salt', 'Pepper', 'Lemon'],
    instructions: 'Toast bread. Mash avocado with salt, pepper, and lemon. Spread on toast.'
  },
  {
    title: 'French Onion Soup',
    ingredients: ['Onions', 'Beef Broth', 'Butter', 'Cheese', 'Bread'],
    instructions: 'Caramelize onions. Add broth and simmer. Top with bread and cheese, broil until melted.'
  },
  {
    title: 'Fish Tacos',
    ingredients: ['Fish Fillets', 'Taco Shells', 'Cabbage', 'Lime', 'Sour Cream'],
    instructions: 'Cook fish. Fill taco shells with fish, cabbage, and sour cream. Squeeze lime juice.'
  },
  {
    title: 'Banana Bread',
    ingredients: ['Bananas', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking Soda'],
    instructions: 'Mix ingredients, pour into a loaf pan, and bake until golden.'
  },
  {
    title: 'Teriyaki Chicken',
    ingredients: ['Chicken', 'Soy Sauce', 'Brown Sugar', 'Ginger', 'Garlic'],
    instructions: 'Marinate chicken in soy sauce, sugar, ginger, and garlic. Cook until done.'
  },
  {
    title: 'Vegetable Soup',
    ingredients: ['Carrots', 'Potatoes', 'Celery', 'Onions', 'Vegetable Broth', 'Tomatoes'],
    instructions: 'Cook vegetables in broth and simmer until tender.'
  },
  {
    title: 'Chili Con Carne',
    ingredients: ['Ground Beef', 'Beans', 'Tomatoes', 'Chili Powder', 'Onions', 'Garlic'],
    instructions: 'Cook beef, onions, and garlic. Add beans, tomatoes, and chili powder. Simmer.'
  }
];

// MongoDB Connection and Data Seeding
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'recipies_app',
    });

    await Recipe.deleteMany(); // Clear existing data
    await Recipe.insertMany(recipes); // Insert new recipes
    console.log('Database seeded with sample recipes!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
