import { useEffect, useState } from "react";
import HeroCard from "./components/HeroCard.js";
import styles from "Home.module.css";

const ACCESS_TOKEN = "4995282617154105";
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}/`;

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  // Função para buscar heróis
  const getHeroes = async (code) => {
    const res = await fetch(`${BASE_URL}${code}`);
    const data = await res.json();
    const hero = {
      name: data.name,
      intelligence: data.powerstats.intelligence,
      strength: data.powerstats.strength,
      image: data.image.url,
    };
    setHeroes((prevHeroes) => [...prevHeroes, hero]);
  };

  // useEffect para carregar heróis ao iniciar a página
  useEffect(() => {
    getHeroes(200);
    getHeroes(465);
  }, []);

  return (
    <div className={styles.heroes}>
      {heroes.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </div>
  );
}
