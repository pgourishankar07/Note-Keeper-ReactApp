import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import img from "./juicy-boy-is-tired-of-doing-homework.gif";
import icon from "./icons8-notes-64.png";
function Header() {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height: "100px",
  };

  const h1Style = {
    margin: 0,
    display: "flex",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>
        <img src={icon} />
        {/* <NoteAltIcon sx={{ fontSize: 35 }} /> */}
      </h1>
      <h1>Note Keeper</h1>
      <img src={img} width={100} height={100} />
    </header>
  );
}

export default Header;
