import React from "react";
import styles from "./HeroCard.module.css";

const HeroCard = ({ hero }) => {
  return (
    <article className={styles.card}>
      <img src={hero.image} alt={hero.name} className={styles.image} />
      <h1>{hero.name}</h1>
      <p>
        intelligence:{" "}
        <span
          style={{ width: `${hero.intelligence}%`, backgroundColor: "#F9B32F" }}
          className={styles.bar}
        ></span>
      </p>
      <p>
        strength:{" "}
        <span
          style={{ width: `${hero.strength}%`, backgroundColor: "#FF7C6C" }}
          className={styles.bar}
        ></span>
      </p>
    </article>
  );
};

export default HeroCard;
