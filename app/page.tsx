import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Main from "./components/footer"

export default function Home() {
  return(
    <>
       <Navbar />
       <Main />
    </>
  );
}
