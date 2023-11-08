import { useState, useEffect } from "react";
import Jobinfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

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
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* job info */}
      <Jobinfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
