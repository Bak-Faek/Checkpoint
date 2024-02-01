import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdminAdd from "./Add/AdminAdd";
import DeleteCandle from "./Delete/DeleteCandle";

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
          <Link key={candle.id} to={`/candle/${candle.id}`}>
            <Card
              sx={{
                maxWidth: 100,
                minWidth: 200,
                maxHeight: 100,
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DeleteCandle id={candle.id} />
              <img width="100%" src={candle.imageUrl} alt="bougie" />
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
                <Typography
                  align="center"
                  variant="body"
                  color="text.secondary"
                >
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
