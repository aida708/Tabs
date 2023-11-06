import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [users, setUsers] = useState([]);

  //use the fetch Api to get a job info from an external API. use useEffect to make the Api call when the
  //comp mounts. While the data is being fetched , set up a loading state that display a message to the user.

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {users.map((user) => {
        const { id, title, dates, duties } = user;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{dates}</p>
            <ul>
              <li>{duties}</li>
            </ul>
          </div>
        );
      })}
    </section>
  );
};
export default App;
