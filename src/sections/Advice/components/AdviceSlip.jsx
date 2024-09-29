function Adviceslip({advice,fetchAdvice, saveToFavorites}) {

    return (

        <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveToFavorites}>Save to Favourites</button>
      </section>

    );

}


export default Adviceslip