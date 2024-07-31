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
  hamburgerLine,
  footer,
  footerContent,
  mainContent
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
      <main className={mainContent}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <div className={footerContent}>
          Copyright &copy; {new Date().getFullYear()} KatBiel
          <br />
          Powered by <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer">Gatsby</a>.
        </div>
      </footer>
    </div>
  );
};

// const Layout = (props) => {
//     const pageTitle = props.pageTitle
//     const children = props.children
//     ...
//   }

export default Layout
