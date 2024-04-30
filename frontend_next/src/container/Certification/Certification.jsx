import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certification.scss';

const Certification = () => {
  const [certifications, setCertifications] = useState([]);
  const [filtercertification, setFilterCertification] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
      setCertifications(data);
      setFilterCertification(data);
    });
  }, []);

  const handlecertificationFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterCertification(certifications);
      } else {
        setFilterCertification(certifications.filter((certification) => certification.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My <span>Certification</span> Section</h2>

      <div className="app__certification-filter">
        {['Coursera', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handlecertificationFilter(item)}
            className={`app__certification-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certification-portfolio"
      >
        {filtercertification.map((certification, index) => (
          <div className="app__certification-item app__flex" key={index}>
            <div
              className="app__certification-img app__flex"
            >
              <img src={urlFor(certification.imgUrl)} alt={certification.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__certification-hover app__flex"
              >
                <a href={certification.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={certification.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__certification-content app__flex">
              <h4 className="bold-text">{certification.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{certification.description}</p>

              <div className="app__certification-tag app__flex">
                <p className="p-text">{certification.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certification, 'app__certifications'),
  'certification',
  'app__primarybg',
);
