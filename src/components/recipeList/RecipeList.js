import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useTheme } from "../../hooks/useTheme";
import { projectFireStore } from "../../firebase/config";

import deleteIcon from "../../assets/delete-icon.svg";

// Import Styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = async (id) => {
    try {
      projectFireStore.collection("recipes").doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            src={deleteIcon}
            alt="Delete Recipe"
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
