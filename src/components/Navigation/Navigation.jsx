import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export default function Navigation() {
  return (
    <div className={s.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
}
