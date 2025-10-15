import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import vivek from "../assets/team/vivek.jpg";
import navneet from "../assets/team/navneet.jpg";
import sadhana from "../assets/team/sadhana.jpg";
import avishkar from "../assets/team/avishkar.jpg";
import atish from "../assets/team/atish.jpg";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/posts").then(res => setPosts(res.data));
  }, []);

  const team = [
    { name: "Vivek", photo: vivek },
    { name: "Navneet", photo: navneet },
    { name: "Sadhana", photo: sadhana },
    { name: "Avishkar", photo: avishkar },
    { name: "Atish", photo: atish },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Services & Posts</h1>
      <div>
        {posts.map(p => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <Link to={`/post/${p.id}`}>
              <h2>{p.title}</h2>
            </Link>
            <p>{p.description}</p>
          </div>
        ))}
      </div>

      <h2>Our Team</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {team.map(t => (
          <Link key={t.name} to={`/profile/${t.name}`}>
            <div style={{ textAlign: "center" }}>
              <img src={t.photo} width="100" height="100" style={{ borderRadius: "50%" }} />
              <p>{t.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
