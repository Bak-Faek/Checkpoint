import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function CandleForm({
  candleName,
  setCandleName,
  candleDescription,
  setCandleDescription,
}) {
  // Title

  const handleChangeName = (e) => {
    setCandleName(e.target.value);
  };

  // Description

  const handleChangeDescription = (e) => {
    setCandleDescription(e.target.value);
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
    </>
  );
}

CandleForm.propTypes = {
  candleName: PropTypes.string.isRequired,
  candleDescription: PropTypes.string.isRequired,
  setCandleName: PropTypes.func.isRequired,
  setCandleDescription: PropTypes.func.isRequired,
};
