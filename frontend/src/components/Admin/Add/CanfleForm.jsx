import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function CandleForm({
  candleName,
  setCandleName,
  candleDescription,
  setCandleDescription,
  imageUrl,
  setImageUrs,
}) {
  // Nom

  const handleChangeName = (e) => {
    setCandleName(e.target.value);
  };

  // Description

  const handleChangeDescription = (e) => {
    setCandleDescription(e.target.value);
  };

  // image URL
  const handleChangeImage = (e) => {
    setImageUrs(e.target.value);
  };

  return (
    <>
      <TextField
        value={candleName}
        onChange={handleChangeName}
        margin="normal"
        required
        fullWidth
        id="Nom de la bougie"
        label="Nom de la bougie"
        name="Nom de la bougie"
        autoComplete="Nom de la bougie"
        autoFocus
      />
      <TextField
        value={candleDescription}
        onChange={handleChangeDescription}
        margin="normal"
        required
        fullWidth
        id="Description"
        label="Description"
        name="Description"
        autoComplete="Description"
        multiline
        rows={5}
      />
      <TextField
        value={imageUrl}
        onChange={handleChangeImage}
        margin="normal"
        required
        fullWidth
        id="Lien de l'image"
        label="Lien de l'image"
        name="Lien de l'image"
        autoComplete="Lien de l'image"
      />
    </>
  );
}

CandleForm.propTypes = {
  candleName: PropTypes.string.isRequired,
  candleDescription: PropTypes.string.isRequired,
  setCandleName: PropTypes.func.isRequired,
  setCandleDescription: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  setImageUrs: PropTypes.string.isRequired,
};
