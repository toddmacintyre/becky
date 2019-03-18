import * as React from "react";
import HamburgerMenu from './hamburgerMenu';

class Header extends React.PureComponent {
  public render() {
    return (
      <nav>
        <HamburgerMenu />
      </nav>
    );
  }
}

export default Header;
