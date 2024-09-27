import { useEffect, useState } from "react";
import axios from "axios";
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
        <ul className="art-list">
          {art.map((art) => (
            <li key={art.id}>
              <div className="frame">
              <img
                src={`https://boolean-uk-api-server.fly.dev/${art.imageURL}`}
              />
              </div>
              <h3>{` ${art.title}`}</h3>
              <p>Artist: {art.artist}</p>
              <ul>
                {art.publicationHistory.map((publication, index) => (
                    <li key={index}>
                        {`${publication}`}
                    </li>

                ))}
                
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
