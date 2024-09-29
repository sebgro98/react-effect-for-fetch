function FavouriteSlipsList({favorites}) {

  return (
    <section className="favourite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>{fav}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;
