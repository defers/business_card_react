import s from "./Footer.module.css";
import logo_instagram from "../../static/img/instagram-icon.svg";
import logo_vk from "../../static/img/vk-icon.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.logo}>
        <img className={s.logo_img} src="img/logo_200x200.png" alt="logo" />
      </div>

      <div className={s.social_media}>
        <p>Мы в социальных сетях:</p>
        <a href = "https://www.instagram.com/christina_astahova_88/">
            <img className = {s.social_logo_img} src={logo_instagram} />
        </a>
        <img className = {s.social_logo_img} src={logo_vk} />
      </div>

      <div className={s.contacts}>
        <p>+7 (950) 031-75-52</p>
        <p>ch.astahova@gmail.com</p>
        <p><a href="https://wa.me/79500317552?text=Здравструйте! Спасибо за обращение в дизайн-студию Астахова Design" class="link-item">Пишите нам на WhatsApp</a></p>
      </div>
    </footer>
  );
};

export default Footer;
