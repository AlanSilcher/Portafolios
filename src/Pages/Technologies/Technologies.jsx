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
import './Technologies.css'

export default function Technologies() {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>
      <span className={styles["title-word"]}>Mi Experiencia</span>
      </h1>

  <section class="container">
  <Row>
      <Col sm={1}></Col> 
        <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>HTML</figcaption>
     <img class="html" src={htmlPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>

  <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>CSS</figcaption>
    <img class="css" src={cssPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>
  
  <Col sm={2}>
  <figure class="chart" data-percent="75">
    <figcaption>Javascript</figcaption>
    <img class="javascript" src={jsPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>

  <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>React</figcaption>
    <img class="react" src={reactPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>

  <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>Redux</figcaption>
    <img class="redux" src={reduxPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>
  <Col sm={1}></Col> 
  </Row>
  
  <Row>
      <Col sm={1}></Col> 
        <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>Node</figcaption>
    <img class="node" src={nodePng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>

  <Col sm={2}>
  <figure class="chart" data-percent="25">
    <figcaption>Express</figcaption>
    <img class="express" src={expressPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>

  <Col sm={2}>
  <figure class="chart" data-percent="75">
    <figcaption>Postgres</figcaption>
    <img class="postgres" src={postgresPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>

  <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>Sequelize</figcaption>
    <img class="sequelize" src={sequelizePng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>


  <Col sm={2}>
  <figure class="chart" data-percent="50">
    <figcaption>Git</figcaption>
    <img class="git" src={gitPng}/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  </Col>
  <Col sm={1}></Col>
</Row>
</section>
    </div>
  );
}