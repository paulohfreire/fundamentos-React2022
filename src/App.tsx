import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>{/* <Post author="Paulo" content="lorem ispu" /> */}</main>
      </div>
    </div>
  );
}

export default App;
