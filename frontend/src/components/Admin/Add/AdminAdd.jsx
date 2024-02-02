import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { createSvgIcon } from "@mui/material/utils";
import styles from "../../CandleHome.module.css";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

export default function AdminAdd() {
  return (
    <section>
      <Link to="/AddCandle">
        <Card
          className={styles.cardContainer}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlusIcon color="secondary" />
          <Typography align="center" variant="body" color="text.secondary">
            Ajouter une bougie
          </Typography>
        </Card>
      </Link>
    </section>
  );
}
