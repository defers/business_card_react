import s from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
      <NavLink to="/">
        <img className={s.logo_img} src="img/logo_200x200.png" alt="logo" />
      </NavLink>
      </div>

      <div className={s.menu}>
        
        <input id={s.menu_toggle} type="checkbox" />
        <label class={s.menu_button_container} for={s.menu_toggle}>
          <div class={s.menu_button}></div>
        </label>

        <ul className={s.list_menu}>
          <li className={s.menu_element}>Портфолио</li>
          <li className={s.menu_element}>Цена</li>
          
          <li className={s.menu_element}>
            <NavLink to="/about">Команда</NavLink>
          </li>
          <li className={s.menu_element}>Контакты</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
