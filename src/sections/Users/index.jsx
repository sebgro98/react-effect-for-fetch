import { useEffect, useState } from "react";
import axios from "axios";

function UsersSection() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://boolean-uk-api-server.fly.dev/sebgro98/contact"
      );
      const data = response.data;
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => (
            <li key={index} style={{ background: user.favouriteColour }}>
              <img
                src={`https://www.gravatar.com/avatar/${user.email}?s=120&d=identicon`}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <h3>
                {` ${
                  user.firstName
                } ${user.lastName}`}
              </h3>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
