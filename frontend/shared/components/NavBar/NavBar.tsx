import React from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { ROUTES } from "@/utils/routes";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <p>Countries APP</p>
      <Link href={ROUTES.HOME}>Back Home</Link>
    </header>
  );
};

export default NavBar;
