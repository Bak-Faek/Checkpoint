import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdminAdd from "./Add/AdminAdd";
import DeleteCandle from "./Delete/DeleteCandle";
import styles from "../CandleHome.module.css";

export default function Admin() {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candle`)
      .then((response) => response.json())
      .then((data) => setCandles(data));
  }, []);
  return (
    <section className={styles.globalContainer}>
      <h2> Gérer Mes Bougies</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
          gap: 3,
        }}
      >
        <Card>
          <AdminAdd />
        </Card>
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
              <DeleteCandle id={candle.id} />
              <img width="100%" src={candle.imageUrl} alt="bougie" />
              <CardContent
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography align="center" variant="h7" component="div">
                  {candle.candleName}
                </Typography>
                <Typography
                  className={styles.details}
                  align="center"
                  variant="body"
                  color="text.secondary"
                >
                  Couleur : {candle.colorName}
                </Typography>
                <Typography
                  className={styles.details}
                  align="center"
                  variant="body"
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
