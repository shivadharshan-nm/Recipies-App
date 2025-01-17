import Recipe from '../models/recipeModel.js';

// @desc Create a new recipe
// @route POST /api/recipes
// @access Public
const createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        const recipe = await Recipe.create({ title, ingredients, instructions });
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Get all recipes
// @route GET /api/recipes
// @access Public
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Get a recipe by ID
// @route GET /api/recipes/:id
// @access Public
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            res.status(404).json({ message: 'Recipe not found' });
        } else {
            res.status(200).json(recipe);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Update a recipe by ID
// @route PUT /api/recipes/:id
// @access Public
const updateRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { title, ingredients, instructions },
            { new: true }
        );
        if (!recipe) {
            res.status(404).json({ message: 'Recipe not found' });
        } else {
            res.status(200).json(recipe);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Delete a recipe by ID
// @route DELETE /api/recipes/:id
// @access Public
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            res.status(404).json({ message: 'Recipe not found' });
        } else {
            res.status(200).json({ message: 'Recipe deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe };
