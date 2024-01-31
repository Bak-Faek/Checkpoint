import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdminAdd from "./AdminAdd";

export default function Admin() {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/candle")
      .then((response) => response.json())
      .then((data) => setCandles(data));
  }, []);
  return (
    <section>
      <h2> Gérer Mes Bougies</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Card>
          <AdminAdd />
        </Card>
        {candles.map((candle) => (
          <Card
            sx={{
              maxWidth: 100,
              minWidth: 150,
              maxHeight: 100,
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{ height: 100 }}
              image={candle.image_url}
              title="bougie"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography align="center" variant="h6" component="div">
                {candle.candleName}
              </Typography>
              <Typography align="center" variant="body" color="text.secondary">
                {candle.candleDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </section>
  );
}
