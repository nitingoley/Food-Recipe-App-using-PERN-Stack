const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

dotenv.config();

const port = process.env.PORT || 4000;

const {
  searchRecipes,
  getRecipeSummary,
  getFavouriteRecipesByIDs,
} = require("./recipe-api");

const app = express();
const prismaClient = new PrismaClient();

app.use(express.json());
app.use(cors());

 
console.log("Server will start on port:", port);

// Route for searching recipes
app.get("/api/recipes/search", async (req, res) => {
  const { searchTerm, page } = req.query;

  if (!searchTerm) {
    return res.status(400).json({ error: "Search term is required" });
  }

  try {
    const results = await searchRecipes(searchTerm, parseInt(page) || 0);
    return res.json(results);
  } catch (error) {
    console.error("Error in searchRecipes:", error);
    return res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

// Route for getting a recipe summary
app.get("/api/recipes/:recipeId/summary", async (req, res) => {
  const { recipeId } = req.params;

  try {
    const results = await getRecipeSummary(recipeId);
    return res.json(results);
  } catch (error) {
    console.error("Error in getRecipeSummary:", error);
    return res.status(500).json({ error: "Failed to fetch recipe summary" });
  }
});

// Route to add a recipe to favourites
app.post("/api/recipes/favourite", async (req, res) => {
  const { recipeId } = req.body;

  try {
    const favouriteRecipe = await prismaClient.favouriteRecipes.create({
      data: { recipeId },
    });
    return res.status(201).json(favouriteRecipe);
  } catch (error) {
    console.error("Error in adding to favourites:", error);
    return res.status(500).json({ error: "Failed to add recipe to favourites" });
  }
});

// Route to get favourite recipes
app.get("/api/recipes/favourite", async (req, res) => {
  try {
    const recipes = await prismaClient.favouriteRecipes.findMany();
    const recipeIds = recipes.map((recipe) => recipe.recipeId.toString());

    const favourites = await getFavouriteRecipesByIDs(recipeIds);
    return res.json(favourites);
  } catch (error) {
    console.error("Error in fetching favourites:", error);
    return res.status(500).json({ error: "Failed to fetch favourite recipes" });
  }
});

// Route to remove a recipe from favourites
app.delete("/api/recipes/favourite", async (req, res) => {
  const { recipeId } = req.body;

  try {
    await prismaClient.favouriteRecipes.delete({
      where: { recipeId },
    });
    return res.status(204).send();
  } catch (error) {
    console.error("Error in deleting favourite recipe:", error);
    return res.status(500).json({ error: "Failed to delete favourite recipe" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`The server running on http://localhost:${port}`);
});
