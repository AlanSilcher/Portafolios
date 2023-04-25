import React from 'react';
import styles from './Technologies.module.css';
import htmlPng from './Images/html5.png';
import cssPng from './Images/css.png'
import reactPng from './Images/react.png'
import reduxPng from './Images/redux.png'
import jsPng from './Images/java.png'
import nodePng from './Images/node.png'
import expressPng from './Images/Express2.png'
import postgresPng from './Images/postgres.png'
import gitPng from './Images/git.png'
import sequelizePng from './Images/Sequelize.png'
import { Row, Col } from "react-grid-system";

export default function Technologies() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Mi Experiencia</div>

      <Row className={styles["image-row"]}>
      <Col sm={1}></Col> 
        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={htmlPng} alt="html" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>HTML</p>
            </div>
          </div>
        </Col>

        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={cssPng} alt="css" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>CSS</p>
            </div>
          </div>
        </Col>

        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={reactPng} alt="react" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>React</p>
            </div>
          </div>
        </Col>
      
        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={reduxPng} alt="redux" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>Redux</p>
            </div>
          </div>
        </Col>

        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={jsPng} alt="js" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>JavaScript</p>
            </div>
          </div>
        </Col>
        <Col sm={1}></Col> 
        </Row>

        <Row className={styles["image-row"]}>
        <Col sm={1}></Col> 
        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={nodePng} alt="node" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>Node JS</p>
            </div>
          </div>
        </Col>
      
        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={expressPng} alt="express" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>Express</p>
            </div>
          </div>
        </Col>

        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={postgresPng} alt="postgres" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>Postgres</p>
            </div>
          </div>
        </Col>

        <Col sm={2}>
          <div className={styles["image-container"]}>
            <img src={sequelizePng} alt="sequelize" className={styles.image} />
            <div className={styles["text-container"]}>
              <p className={styles.text}>Sequelize</p>
            </div>
          </div>
        </Col>

        <Col sm={2}>
        <div className={styles['image-container']}>
        <img src={gitPng} alt="git" className={styles.image} />
         <div className={styles['text-container']}>
            <p className={styles.text}>Git</p>
            </div>
            </div> 
            </Col>
            <Col sm={1}></Col> 
        </Row>

    </div>
  );
}