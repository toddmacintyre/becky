import * as React from 'react';
import * as styles from '../styles/header.module.css';

class Header extends React.PureComponent {
  public render() {
    return (
      <header className={styles.header}>This is the header</header>
    )
  }
}

export default Header;
