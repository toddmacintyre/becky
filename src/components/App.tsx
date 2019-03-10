import * as React from 'react';
import * as styles from '../styles/App.module.css';
import Footer from './footer';
import Header from './header';
import Main from './main';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
