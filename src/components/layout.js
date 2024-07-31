import React, {useState} from 'react';
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navName,
  navLinkItem,
  navLinkText,
  navMenu,
  navMenuOpen,
  hamburger,
  hamburgerLine
 } from './layout.module.css'

 const Layout = ({ pageTitle, children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  return (
    <div className={container}>
      <nav>
        <div className={navName}>CarbonKittyKat Tech World</div>
        <div className={hamburger} onClick={toggleNav}>
          <div className={hamburgerLine}></div>
          <div className={hamburgerLine}></div>
          <div className={hamburgerLine}></div>
        </div>
        <ul className={`${navMenu} ${isNavOpen ? navMenuOpen : ''}`}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/tags">Tags</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

// const Layout = (props) => {
//     const pageTitle = props.pageTitle
//     const children = props.children
//     ...
//   }

export default Layout
