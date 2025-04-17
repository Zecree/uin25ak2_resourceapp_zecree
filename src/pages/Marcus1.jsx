import React, { useEffect, useState } from "react";
import "../styles/profil.scss";
import catImg from "../assets/cat.jpg";
import LoggTable from "../components/LoggTable";
import { client } from "../sanityClient";

function Marcus1() {
  const [logg, setLogg] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "arbeidslogg" && name == "Marcus 1"] | order(date desc) {
        date,
        name,
        task,
        time
      }`)
      .then((data) => setLogg(data))
      .catch(console.error);
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-container">
        <img src={catImg} alt="Marcus 1" className="profile-img" />
        <div className="profile-info">
          <h2>Marcus Phan</h2>
          <p>
            Marcus er en lat kar som liker katter og å spille spill
          </p>
          <h3>Interesser</h3>
          <ul>
            <li>Spille spill</li>
            <li>Sove</li>
          </ul>
        </div>
      </div>

      <h2>Arbeidslogg</h2>
      <LoggTable logs={logg} />
    </div>
  );
}

export default Marcus1;