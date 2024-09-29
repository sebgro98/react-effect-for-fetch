import { useState } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState("Always the burrito.");
  const [favorites, setFavorites] = useState([
    "Measure twice, cut once.",
    "Don't let the bastards grind you down.",
    "Always the burrito."
  ]);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  const saveToFavorites = () => {
    if (!favorites.includes(advice)) {
      setFavorites([...favorites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>

      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveToFavorites}>Save to Favourites</button>
      </section>

      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favorites.map((fav, index) => (
            <li key={index}>{fav}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
