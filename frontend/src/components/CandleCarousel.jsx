import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

import styles from "./CandleCarousel.module.css";

export default function CandleCarousel() {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candle`)
      .then((response) => response.json())
      .then((data) => setCandles(data));
  }, []);
  return (
    <Carousel className={styles.carouselContainer}>
      {candles.map((candle) => (
        <Link key={candle.id} to={`/candle/${candle.id}`}>
          <img
            src={candle.imageUrl}
            className={styles.carouselImageContainer}
            alt="bougie"
          />
        </Link>
      ))}
    </Carousel>
  );
}
