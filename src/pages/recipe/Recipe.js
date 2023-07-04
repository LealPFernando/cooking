import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { projectFireStore } from "../../firebase/config";

// styles
import "./Recipe.css";

export default function Recipe() {
  const [recipe, setRecipe] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFireStore
      .collection("recipes")
      .doc(id)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            setIsPending(false);
            setRecipe(doc.data());
          } else {
            setIsPending(false);
            setError("Recipe not found");
          }
        },
        (err) => setError(err.message)
      );
    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFireStore.collection("recipes").doc(id).update({
      title: "Something completely different",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  );
}
