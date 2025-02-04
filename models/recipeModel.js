import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ingredients: { type: [String], required: true },
        instructions: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Recipe = mongoose.model('recipes', recipeSchema);
export default Recipe;
