import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

export default function ColorSelect({ colors, setUserColorId, userColorId }) {
  const handleChangeColor = (e) => {
    setUserColorId(e.target.value);
  };
  return (
    <FormControl style={{ marginTop: "1rem", marginBottom: "2rem" }} fullWidth>
      <InputLabel id="numberPersons">Couleurs</InputLabel>
      <Select
        labelId="categories"
        id="categories"
        value={userColorId}
        label="Category"
        onChange={handleChangeColor}
      >
        {colors.map((color) => {
          return (
            <MenuItem key={color.id} value={color.id}>
              {color.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

ColorSelect.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setUserColorId: PropTypes.func.isRequired,
  userColorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
