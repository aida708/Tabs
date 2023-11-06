import { FaAngleDoubleRight } from "react-icons/fa";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}
