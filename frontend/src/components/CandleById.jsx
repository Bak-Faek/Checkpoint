import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function CandleById() {
  const [candle, setCandle] = useState([]);
  const { id: candleId } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/candle/${candleId}`)
      .then((response) => response.json())
      .then((data) => setCandle(data));
  }, []);
  return (
    <section>
      <Box
        sx={{
          width: "1",
          height: "1",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            maxHeight: "100",
          }}
        >
          <img width="100%" src={candle.imageUrl} alt="bougie" />
        </Paper>
        <Card sx={{ width: "1", height: "1" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {candle.candleName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candle.candleDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candle.candleDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {candle.candleDescription}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
