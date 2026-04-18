import "./Head.css";
import { Link } from "react-router-dom";
function Head() {
  return (
    <header className="header">
      <div className="links">
        <Link to="/news">Новости</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/about">О проекте</Link>
      </div>
    </header>
  );
}

export default Head;
