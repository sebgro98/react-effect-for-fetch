import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList"

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
      <AdviceSlip advice={advice} fetchAdvice={fetchAdvice} saveToFavorites={saveToFavorites}/>
      <FavouriteSlipsList favorites={favorites}/>
      
    </section>
  );
}

export default AdviceSection;
