import React from "react";

let year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>gouri-shankar-learning © {year}</p>
    </footer>
  );
}

export default Footer;
