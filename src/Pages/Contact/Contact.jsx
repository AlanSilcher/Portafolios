import React from 'react';
import { FaLinkedin, FaGithub, FaMobileAlt, FaEnvelope, FaMapMarker, FaFileAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.contactTitle}>Contáctame</h1>
        <div className={styles.columnsContainer}>
        <div className={styles.column}>
        <p>
          Si buscas un colaborador creativo y dedicado para tu próximo proyecto, ¡estoy aquí para ayudarte! Estoy disponible para discutir tus ideas, responder tus preguntas y colaborar en la creación de soluciones innovadoras. No dudes en ponerse en contacto conmigo a través de los canales proporcionados.
        </p>
        </div>
    
      <div className={styles.column}>
      <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfo}>
            <FaMobileAlt className={styles.contactIcon} size={50} />
            <span className={styles.contactText}>Teléfono: +54 11 3506 1414</span>
          </div>
          <div className={styles.contactInfo}>
            <FaEnvelope className={styles.contactIcon} size={50} />
            <span className={styles.contactText}>Email: silcheralan@gmail.com</span>
          </div>
          <div className={styles.contactInfo}>
            <FaMapMarker className={styles.contactIcon} size={50} />
            <span className={styles.contactText}>Ubicación: Buenos Aires, Argentina</span>
          </div>
        </div>

        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/alan-silcher-456902271/" target="_blank" rel="noopener noreferrer">
            <div className={styles.icon}>
              <FaLinkedin />
            </div>
          </a>
          <a href="https://github.com/AlanSilcher" target="_blank" rel="noopener noreferrer">
            <div className={styles.icon}>
              <FaGithub />
            </div>
          </a>
          <a href="https://alansilcher.github.io/Cv-Alan-Silcher/CV-Alan-Silcher.pdf" download>
            <div className={styles.icon}>
              <FaFileAlt />
            </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

