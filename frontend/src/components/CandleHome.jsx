import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
              sx={{
                maxWidth: 100,
                minWidth: 180,
                maxHeight: 100,
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={candle.imageUrl}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {candle.candleName}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  {candle.candleDescription}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </section>
  );
}
