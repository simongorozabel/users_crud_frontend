import { useEffect, useState } from "react";
import { getUsers } from "../../services/getUsers";
import "./UserCard.css";
const UserCard = () => {
  const [users, setUsers] = useState(null);
  console.log(users);
  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await getUsers();

      setUsers(usersData);
    };
    loadUsers();
  }, []);
  return (
    <>
      <h2 className="h2">Look at the Best.</h2>
      <section>
        {users?.map((user) => (
          <div className="userInfo" key={user.id}>
            <header>
              <figure>👤</figure>
              <div>
                <h2>
                  {" "}
                  {user.first_name[0].toUpperCase() +
                    user.first_name.slice(1).toLowerCase() +
                    " " +
                    user.last_name[0].toUpperCase() +
                    user.last_name.slice(1).toLowerCase()}
                </h2>
                <p style={{ color: "pink" }}>{user.email}</p>
              </div>
            </header>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              molestiae dolorum illo nemo laborum dolores nam voluptatum
              doloremque recusandae? Quaerat voluptatem quidem consequuntur aut
              iure nemo, voluptatum alias ratione sequi?
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default UserCard;
