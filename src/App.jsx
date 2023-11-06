import { useState, useEffect } from "react";
import Jobinfo from "./Jobinfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  //use the fetch Api to get a job info from an external API. use useEffect to make the Api call when the
  //comp mounts. While the data is being fetched , set up a loading state that display a message to the user.

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(jobs);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* button container */}
      {/* job info */}
      <Jobinfo jobs={jobs} />
    </section>

    // <section>
    //   {jobs.map((user) => {
    //     const { id, title, dates, duties } = user;
    //     return (
    //       <div key={id}>
    //         <h2>{title}</h2>
    //         <p>{dates}</p>
    //         <ul>
    //           <li>{duties}</li>
    //         </ul>
    //       </div>
    //     );
    //   })}
    // </section>
  );
};
export default App;
