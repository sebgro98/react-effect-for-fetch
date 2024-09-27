import ArtistListItem from './ArtListItem'

function Artist(props) {

    const {artList} = props
    console.log(artList, "This is artList")
    return (
        <ul className="art-list">
          {artList.map((artItem, i) => (
            <ArtistListItem artItem={artItem} key={i}/>

        ))}

        </ul>
    );
}

export default Artist