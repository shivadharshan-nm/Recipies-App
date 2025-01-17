import express from 'express';
import {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
} from '../controllers/recipeController.js';

const router = express.Router();

router.post('/create', createRecipe);
router.get('/getall', getAllRecipes);
router.get('/get:id', getRecipeById);
router.put('/put:id', updateRecipe);
router.delete('/delete:id', deleteRecipe);

export default router;
