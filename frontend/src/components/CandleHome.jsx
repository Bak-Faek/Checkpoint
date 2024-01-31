import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CandleHome() {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candle`)
      .then((response) => response.json())
      .then((data) => setCandles(data));
  }, []);
  return (
    <section>
      <h2>Mes Bougies</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {candles.map((candle) => (
          <Card sx={{ maxWidth: 345, minWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={candle.image_url}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {candle.candleName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {candle.candleDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </section>
  );
}
