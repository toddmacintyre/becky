import * as React from 'react';
import * as styles from '../styles/footer.module.css';

class Footer extends React.PureComponent {
  public render() {
    return (
      <footer className={styles.footer}>Sticky footer</footer>
    )
  }
}

export default Footer;
