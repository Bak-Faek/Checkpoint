import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import PropTypes from "prop-types";

export default function DeleteCandle({ id }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (event) => {
    event.preventDefault();

    function refreshPage() {
      window.location.reload();
    }

    setIsDeleting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/candle/${id}/delete`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );
      if (response.status === 204) {
        console.info("Candle deleted.");
        refreshPage();
        // Optionally, you can perform any necessary actions after deletion, like updating the UI.
      }
    } catch (err) {
      console.error("Failed deleting candle:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DeleteForeverOutlinedIcon
      onClick={handleDelete}
      style={{ cursor: isDeleting ? "not-allowed" : "pointer" }}
    />
  );
}

DeleteCandle.propTypes = {
  id: PropTypes.number.isRequired,
};
