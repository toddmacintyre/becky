import * as React from "react";
import * as styles from '../styles/hamburger.module.css';
import NavMenu from './navMenu';

interface IHamburgerProps {
  readonly [key: string]: any;
}

interface IHamburgerState {
  isOpen: boolean;
}

class HamburgerMenu extends React.PureComponent<IHamburgerProps, IHamburgerState> {
  public constructor(props: IHamburgerProps) {
    super(props);

    this.state = {
      isOpen: false,
    }

    
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
    window.addEventListener('click', this.handleClickOutside);
  }

  public componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  public render() {
    return (
      <React.Fragment>
        <button
          className={`hamburger hamburger--elastic ${this.state.isOpen ? 'is-active' : ''} ${styles.button}`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={this.state.isOpen}
          onClick={this.handleClick}
        >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
        </button>
        {this.state.isOpen ?
          <NavMenu />
          : null
        }
      </React.Fragment>
    );
  }

  private handleClickOutside(e: MouseEvent) {
    const target = e.target as HTMLTextAreaElement
    if (!target.closest('.hamburger')) {
      this.setState({
        isOpen: false,
      });
    }
  }

  private handleClick(e: React.MouseEvent) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}

export default HamburgerMenu;