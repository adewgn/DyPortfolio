import React, { useState, useEffect, useRef } from 'react';
import { IoMdMenu, IoMdClose  } from "react-icons/io";
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';




const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click occurred outside of the menu, so close it
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);



  return (
    <nav className={`app__navbar ${visible ? 'active' : 'hidden'}`}>

      <div className="app__navbar-logo">
        <a href='https://github.com/adewgn/adewgn.github.io' target='_blank' rel="noreferrer">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'service', 'work', 'skills', 'certification', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      

      <div className="app__navbar-menu">
      {toggle ? (
        <IoMdClose
          onClick={() => setToggle(prevToggle => !prevToggle)}
          className="menu-icon"
        />
      ) : (
        <IoMdMenu
          onClick={() => setToggle(prevToggle => !prevToggle)}
          className="menu-icon"
        />
      )}

        {toggle && (
          <motion.div
            initial={{ x: 310 }}
            animate={{ x: 0 }}
            whileInView={{ x: [310, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            ref={menuRef}
          >
          
            <ul>
              {['home', 'about', 'service', 'work', 'skills', 'certification', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
