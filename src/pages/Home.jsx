import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import LoggTable from "../components/LoggTable";
import "../styles/home.scss";
import catImg from "../assets/cat.jpg";
import { client } from "../sanityClient";

const members = [
  {
    name: "Marcus Phan",
    email: "marcuslp@hiof.no",
    image: catImg,
  },
  {
    name: "Marcus 2",
    email: "marcuslp@hiof.no",
    image: catImg,
  },
  {
    name: "Marcus 3",
    email: "marcuslp@hiof.no",
    image: catImg,
  },
  {
    name: "Marcus 4",
    email: "marcuslp@hiof.no",
    image: catImg,
  },
];

function Home() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "arbeidslogg"] | order(date desc) {
        date,
        name,
        task,
        time
      }`)
      .then((data) => setLogs(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="home">
        <h2>Gruppemedlemmer</h2>
        <div className="members">
          {members.map((m) => (
            <ProfileCard key={m.email} member={m} />
          ))}
        </div>

        <h2>Arbeidslogg</h2>
        <LoggTable logs={logs} />
      </div>
    </div>
  );
}

export default Home;