import { Button } from "@mui/material";
import HeaderStyles from "../styles/header.module.css";

export default function Header({ name, saveButton, addNew }) {
  return (
    <>
      <div className={HeaderStyles.box}>
        <h3>{name}</h3>
        {addNew}
      </div>
    </>
  );
}
