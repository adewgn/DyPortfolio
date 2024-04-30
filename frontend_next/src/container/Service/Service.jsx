import React, { useState, useEffect, useRef  } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Service.scss';
import { urlFor, client } from '../../client';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);



  //  this starts here
  

  // this ends here
 
  return (
    <>
      <h2 className="head-text">I Know that <span>Great Quality</span> <br />drives  <span>Great Ventures</span></h2>


      <div className="app__profiles">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={service.title + index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} />
            <h2 className="title-text" style={{ marginTop: 20 }}>{service.title}</h2>
            <p className="para-text" style={{ marginTop: 10 }}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Service, 'app__service'),
  'service',
  'app__whitebg',
);

