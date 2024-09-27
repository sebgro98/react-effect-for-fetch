import { useEffect, useState } from "react";
import axios from "axios";
import ArtList from "./components/ArtList";


function ArtsSection() {
  const [art, setArt] = useState([]);

  const getArt = async () => {
    try {
      const response = await axios.get(
        "https://boolean-uk-api-server.fly.dev/art"
      );
      const data = response.data;
      console.log(data);
      setArt(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArt();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
         <ArtList artList={art}/>
      </div>
    </section>
  );
}

export default ArtsSection;
