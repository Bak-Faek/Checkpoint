import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

export default function PerfumeSelect({
  perfumes,
  setUserPerfumeId,
  userPerfumeId,
}) {
  const handleChangeColor = (e) => {
    setUserPerfumeId(e.target.value);
  };
  return (
    <FormControl style={{ marginTop: "1rem", marginBottom: "2rem" }} fullWidth>
      <InputLabel id="numberPersons">Parfums</InputLabel>
      <Select
        labelId="categories"
        id="categories"
        value={userPerfumeId}
        label="Category"
        onChange={handleChangeColor}
      >
        {perfumes.map((perfume) => {
          return (
            <MenuItem key={perfume.id} value={perfume.id}>
              {perfume.perfumeName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

PerfumeSelect.propTypes = {
  perfumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setUserPerfumeId: PropTypes.func.isRequired,
  userPerfumeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
