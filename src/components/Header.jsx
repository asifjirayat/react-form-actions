import { memo } from "react";
import logoImg from "../assets/logo.jpg";

const Header = memo(() => {
  return (
    <header>
      <img src={logoImg} alt="Form" />
      <h1>React Forms</h1>
    </header>
  );
});

export default Header;
