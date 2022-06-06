import React from "react";

function repositoryItem({ name, fullName, linkToRepo }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>Full name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </div>
  );
}

export default repositoryItem;
