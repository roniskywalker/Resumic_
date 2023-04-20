import React from "react";

import styles from './Header.module.css';

function Header(){
    return (
      <div className={styles.mainheader}>
          <h1>Resumic_</h1>
          <p>Online Resume Builder</p>
      </div>
    );
}

export default Header;