import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/menu.module.css'

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <Link to="#">Opção 1</Link>
      <Link to="#">Opção 2</Link>
      <Link to="#">Opção 3</Link>
      <Link to="#">Opção 4</Link>
    </div>
  );
};

export default Menu;
