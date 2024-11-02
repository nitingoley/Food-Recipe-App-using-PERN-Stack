Recipe Search App
A web application to search for recipes and manage favorite recipes. Users can search for recipes by keywords, view detailed recipe information, and save recipes as favorites for future reference. This app is built with a front-end client that fetches data from a recipe API.

Tech Stack
Frontend: React, JSX, CSS
Backend: Node.js, Express
API Integration: Custom API for recipe fetching and saving favorites
Icons: React Icons (for interactive icons like hearts for favorites)
State Management: React Hooks (useState, useEffect, useRef)
Features
Recipe Search: Search for recipes based on a keyword and view results with images and titles.
Favorite Recipes: Add and manage a list of favorite recipes, stored locally in the app.
Recipe Details: View detailed information on each recipe in a modal.
Pagination: Load more recipes using a "View More" button for continuous scrolling.
Installation and Setup
To run this project locally:

Clone the repository:

bash
Copy code
git clone https://github.com/nitingoley/recipe-search-app.git
cd recipe-search-app
Install dependencies:

bash
Copy code
npm install
API Configuration:

Set up a .env file in the root directory.
Add your API keys and endpoints for the recipe API.
Example:

env
Copy code
REACT_APP_API_URL=https://api.spoonacular.com
REACT_APP_API_KEY=your_api_key
Run the application:

bash
Copy code
npm start
Open the application:

Navigate to http://localhost:3000 in your browser to access the app.
Usage
Search for Recipes: Enter a search term and click the search button to fetch recipes from the API.
Add Favorites: Click the heart icon on a recipe card to add or remove it from your list of favorites.
View Recipe Details: Click on a recipe card to open a modal with detailed information about the recipe.
Load More Recipes: Scroll down and click the "View More" button to load more results.
Project Structure
App.jsx: Main application component containing the logic for searching, pagination, and tab navigation.
components/RecipeCard.jsx: Component to display a recipe card with favorite functionality.
components/RecipeModal.jsx: Modal component for displaying detailed recipe information.
api.js: Handles API requests for searching recipes, adding favorites, and retrieving favorite recipes.
types.js: Defines types and interfaces for recipe data.
API Usage
This app makes use of the following API calls:

Search Recipes:

Endpoint: GET /search?term={searchTerm}&page={page}
Description: Retrieves a list of recipes based on the search term.
Get Favorite Recipes:

Endpoint: GET /favorites
Description: Retrieves the user's saved favorite recipes.
Add Favorite Recipe:

Endpoint: POST /favorites
Description: Adds a recipe to the user's favorites.
Remove Favorite Recipe:

Endpoint: DELETE /favorites/{id}
Description: Removes a recipe from the user's favorites.
Dependencies
react: JavaScript library for building user interfaces.
react-dom: Serves as the entry point to the DOM and server renderers for React.
react-icons: Provides customizable icons for React.
express: Node.js framework for building RESTful APIs.
dotenv: Module for loading environment variables from a .env file.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
