import { Link } from "react-router-dom";
import "./Header.css"
import LogoMarca from "../images/SERIESFLIX-logo.png"
export default function Header(){
    return (
      <>
<nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark static-top w-100">
  <div className="container">
    <div id="imagemLogo">
      <Link to={"/"}><img src={LogoMarca} alt="" /></Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-3">
        <li className="fs-5 nav-item">
          <Link className="nav-link" to={"/"}>Home</Link>
        </li>
        <li className="fs-5 nav-item">
          <Link className="nav-link" to={"precos"}>Watchlist</Link>
        </li>
        <li className="fs-5 nav-item">
          <Link className="nav-link" to={"novo-filme"}>Login/Cadastre-se</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
}