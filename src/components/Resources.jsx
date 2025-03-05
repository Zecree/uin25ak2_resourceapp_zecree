import React from "react";
import resources from "../data/ressurser";
import "../styles/resources.scss";

const Resources = ({ category }) => {
  const resource = resources.find((res) => res.category === category);

  return (
    <section>
      <h2>{resource?.category}</h2>
      <p>{resource?.text}</p>
      <ul>
        {resource?.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resources;
