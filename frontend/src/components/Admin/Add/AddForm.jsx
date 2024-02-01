import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ColorSelect from "./ColorsSelect";
import PerfumeSelect from "./PerfumeSelect";
import CandleForm from "./CanfleForm";

const defaultTheme = createTheme();

export default function AdminAddForm() {
  const [candleName, setCandleName] = useState("");
  const [candleDescription, setCandleDescription] = useState("");
  const [imageUrl, setImageUrs] = useState("");
  const [perfumes, setPerfumes] = useState([]);
  const [userPerfumeId, setUserPerfumeId] = useState("");
  const [colors, setColors] = useState([]);
  const [userColorId, setUserColorId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const response = await fetch(
          "http://localhost:3310/api/candle/perfume"
        );
        const data = await response.json();
        setPerfumes(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPerfume();
  }, []);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/candle/color");
        const data = await response.json();
        setColors(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchColors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/candle/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            candleName,
            candleDescription,
            imageUrl,
            userPerfumeId,
            userColorId,
          }),
        });

        if (response.status === 201) {
          setIsSuccess(true);
          setCandleName("");
          setCandleDescription("");
        } else {
          console.error("Failed to add candle");
        }
      } catch (err) {
        console.error(err);
      }
    };
    postData();
  };

  return (
    <>
      <section>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="70">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Nouvelle Bougie
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
                encType="multipart/form-data"
              >
                <CandleForm
                  candleName={candleName}
                  setCandleName={setCandleName}
                  candleDescription={candleDescription}
                  setCandleDescription={setCandleDescription}
                  imageUrl={imageUrl}
                  setImageUrs={setImageUrs}
                />
                <PerfumeSelect
                  perfumes={perfumes}
                  setUserPerfumeId={setUserPerfumeId}
                  userPerfumeId={userPerfumeId}
                />
                <ColorSelect
                  colors={colors}
                  setUserColorId={setUserColorId}
                  userColorId={userColorId}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5, mb: 2, background: "#FEFEE2", color: "black" }}
                >
                  Ajouter !
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </section>
      {isSuccess === true && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Vous avez ajouté une bougie
        </Alert>
      )}
    </>
  );
}
