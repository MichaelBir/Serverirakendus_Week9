const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const db = require('./db');
const ingredientRouter = require('./routes/ingredients.routes');
const app = express();

// app.get('/recipes', async (req, res)=> {
//     const recipe = await db.query('SELECT * FROM recipe;');
//     console.log(recipe.rows);
//     res.json(recipes.row);
// });

// app.get('/ingredients', async (req, res)=> {
//     const ingredients = await db.query('SELECT * FROM ingredient;');
//     console.log(ingredients.rows);
//     res.json(ingredients.row);
// });

app.use('/ingredients', ingredientRouter);

app.use('/recipes', recipeRouter);

app.listen(process.env.PORT || 3003, () => {
    console.log('Server is listening port 3000')
}); 