import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function CandleForm({
  candleName,
  setCandleName,
  description,
  setDescription,
}) {
  // Title

  const handleChangeName = (e) => {
    setCandleName(e.target.value);
  };

  // Description

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
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
        value={description}
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
    </>
  );
}

CandleForm.propTypes = {
  candleName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setCandleName: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};
