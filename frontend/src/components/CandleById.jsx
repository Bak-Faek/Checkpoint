import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import styles from "./CandleById.module.css";

export default function CandleById() {
  const [candle, setCandle] = useState([]);
  const { id: candleId } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candle/${candleId}`)
      .then((response) => response.json())
      .then((data) => setCandle(data));
  }, []);

  return (
    <section className={styles.globalContainer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Paper variant="outlined">
          <img
            className={styles.imageContainer}
            width="100%"
            src={candle.imageUrl}
            alt="bougie"
          />
        </Paper>
        <Card>
          <CardContent
            className={styles.cardContainer}
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: 5,
              gap: 3,
            }}
          >
            <Typography
              className={styles.titleContainer}
              gutterBottom
              variant="h5"
              component="div"
            >
              {candle.candleName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candle.candleDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Couleur : {candle.colorName}
            </Typography>{" "}
            <Typography variant="body2" color="text.secondary">
              {candle.colorDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Parfum :{candle.perfumeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candle.perfumeDescription}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
