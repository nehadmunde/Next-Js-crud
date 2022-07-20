//import Head from 'next/head'

import Input from "../Components/Input";
import Nav from "../Components/Nav";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container ">
      <Nav />
      <Input />
    </div>
  );
}
