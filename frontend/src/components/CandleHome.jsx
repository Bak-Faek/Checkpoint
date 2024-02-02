import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./CandleHome.module.css";

export default function CandleHome() {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candle`)
      .then((response) => response.json())
      .then((data) => setCandles(data));
  }, []);
  return (
    <section className={styles.globalContainer}>
      <h2>Mes Bougies</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          margin: 2,
          marginBottom: 10,
        }}
      >
        {candles.map((candle) => (
          <Link key={candle.id} to={`/candle/${candle.id}`}>
            <Card
              className={styles.cardContainer}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img width="100%" src={candle.imageUrl} alt="bougie" />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <Typography gutterBottom variant="h7" component="div">
                  {candle.candleName}
                </Typography>
                <Typography
                  className={styles.details}
                  variant="p"
                  color="text.secondary"
                >
                  Couleur : {candle.colorName}
                </Typography>
                <Typography
                  className={styles.details}
                  variant="p"
                  color="text.secondary"
                >
                  Parfum: {candle.perfumeName}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </section>
  );
}
