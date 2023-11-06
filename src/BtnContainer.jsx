import React from "react";

export default function BtnContainer({ jobs }) {
  return (
    <div>
      {jobs.map((item) => {
        return (
          <button className="job-btn" key={item.id}>
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
