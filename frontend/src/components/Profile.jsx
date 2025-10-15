import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { name } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h1>{name}'s Profile</h1>
      <p>Details about {name}</p>
    </div>
  );
}
