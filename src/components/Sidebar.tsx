import styles from "./Sidebar.module.css";
import profileImg from "../assets/img/nathan-dumlao-6dmx8YnkPGo-unsplash.jpg";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={profileImg} />

      <div className={styles.profile}>
        <strong>Nome</strong>
        <span>Profissão</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
