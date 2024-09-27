import UserListItem from "./UsersListItem"

function UserList(props) {

    const {userList} = props

    return (
        <ul className="users-list">
          {userList.map((userItem, index) => (
            <UserListItem userItem={userItem} key={index}/>
    
    ))}
    
    </ul>
    );

}

export default UserList;