import React from "react";
import Duties from "./Duties";

export default function Jobinfo({ jobs }) {
  const { id, title, dates, duties, company } = jobs[0];

  return (
    <article className="job-info">
      {jobs.map((user) => {
        return (
          <div key={id}>
            <h3>{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-date">{dates}</p>
            <Duties duties={duties} />
            {/* <ul>
              <li>{duties}</li>
            </ul> */}
          </div>
        );
      })}
    </article>
  );
}
