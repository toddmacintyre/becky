import * as React from "react";
import * as styles from '../styles/hamburger.module.css';

interface INavMenuProps {
  readonly [key: string]: any;
}

interface INavMenuState {
  [key: string]: any;
}

interface INavItem {
  name: string;
  action: () => any;
}

// tslint:disable-next-line: no-empty
const noop = () => {
// tslint:disable-next-line: no-console
  console.log('action');
};

const navItems: INavItem[] = [
  {
    action: noop,
    name: 'Home',
  },
  {
    action: noop,
    name: 'About',
  },
  {
    action: noop,
    name: 'Contact',
  },
];

class NavMenu extends React.PureComponent<INavMenuProps, INavMenuState> {
  public constructor(props: INavMenuProps) {
    super(props);
  }

  public render() {
    return (
      <ul className={styles.navItems}>
        {navItems.map((item, idx) => {
          // const focus = idx === 0 ? true : false;
          return (
            <li key={item.name}>
              <button onClick={item.action}>
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavMenu;