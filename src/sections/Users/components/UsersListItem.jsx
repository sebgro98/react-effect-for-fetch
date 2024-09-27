function UserListItem({userItem}) {
    const {firstName, lastName, email, favouriteColour} = userItem

    return (
        <li style={{ background: favouriteColour }}>
        <img
          src={`https://www.gravatar.com/avatar/${email}?s=120&d=identicon`}
          alt={`${firstName} ${lastName}`}
        />
        <h3>
          {` ${
            firstName
          } ${lastName}`}
        </h3>
        <p>Email: {email}</p>
      </li>
    );


}

export default UserListItem