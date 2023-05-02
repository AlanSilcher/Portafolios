import React from 'react';
import styles from './Me.module.css'; 
import {Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiClock, mdiBriefcase, mdiMedal } from '@mdi/js';
import image from './Image/Photo.png'
import './Me.css'

export default function Me() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
  <span className={styles["title-word"]}>Sobre mí</span>
            </h1>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img className={styles.photo} src={image} alt="Foto de perfil" />
                    </Grid>
                    <Grid item xs={12} md={6}>

                    <div class="cards-list">
  
                    <div class="card 1">
                    <div class="card_image"> <img src="https://www.colorhexa.com/262624.png" alt="me photo"/> </div>
                    <div class="card_title title-white">
                    <Icon path={mdiMedal} size={2} />
                    <p>Experiencia</p>
                    <div className={styles.data}>+6 meses</div>
                    </div>
                    </div>

                    <div class="card 2">
                    <div class="card_image">
                    <img src="https://www.colorhexa.com/262624.png" />
                    </div>
                    <div class="card_title title-white">
                    <Icon path={mdiBriefcase} size={2} />
                    <p>Terminados</p>
                    <div className={styles.data}>+2 proyectos</div>

                    </div>
                    </div>

                    <div class="card 3">
                    <div class="card_image">
                    <img src="https://www.colorhexa.com/262624.png" alt="color fill"/>
                    </div>
                    <div class="card_title">
                    <Icon path={mdiClock} size={2} />
                    <p>Asistencia</p>
                    <div className={styles.data}>Online 24/7</div>

                    </div>
                    </div>

                    </div>
                        <div>
                            <p className={styles.largeText}>
                                Soy un apasionado programador especializado en JavaScript, con experiencia en el desarrollo web. Siempre estoy en busca de oportunidades laborales para aplicar mis habilidades y conocimientos en proyectos interesantes y desafiantes. Me encanta aprender constantemente y mantenerme actualizado con las últimas tecnologías y mejores prácticas en el mundo del desarrollo web.
                            </p>
                            <p className={styles.largeText}>
                            Me apasiona la resolución de problemas y el trabajo en equipo, lo que me permite colaborar eficazmente con otros profesionales del desarrollo web para lograr resultados óptimos. Si estás buscando a alguien que tenga una mentalidad orientada a soluciones y una actitud proactiva, ¡no dudes en contactarme!
                            </p>
                            
                            <Link to="/contact">
                            <button className={styles.button}>Contacto</button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}