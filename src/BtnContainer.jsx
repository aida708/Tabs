import React from "react";

export default function BtnContainer({ jobs, currentItem, setCurrentItem }) {
  return (
    <div>
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            key={item.id}
            onClick={() => setCurrentItem(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
