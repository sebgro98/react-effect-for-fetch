import PublicationHistoryList from "./PublicationHistoryList"

function ArtistListItem({artItem}) {
    const { imageURL, title, artist, publicationHistory} = artItem
    console.log(artItem, "this is artItem")
    return (

        <li>
              <div className="frame">
              <img
                src={`https://boolean-uk-api-server.fly.dev/${imageURL}`}
              />
              </div>
              <h3>{` ${title}`}</h3>
              <p>Artist: {artist}</p>
              <ul>
              {publicationHistory.map((publicationItem, index) => (
                <PublicationHistoryList publicationItem={publicationItem} key={index}/>
            ))}
                </ul>
        </li>



    )
}

export default ArtistListItem;