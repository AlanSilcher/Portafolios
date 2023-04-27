import React from 'react';
import styles from './Me.module.css'; 
import { Button, Container, Grid } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiClock, mdiBriefcase, mdiMedal } from '@mdi/js';
import { Link } from 'react-router-dom';
import profilePhoto from './Image/Cat.jpg'


export default function Me() {
    return (
        <div>
            <h1 className={styles.title}>Esto es home</h1> 
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={profilePhoto} alt="Foto de perfil" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <Icon path={mdiMedal} size={1} />
                                <h3>Experiencia</h3>
                                <h4>+6 meses</h4> 
                            </div>
                            <div className={styles.card}>
                                <Icon path={mdiBriefcase} size={1} />
                                <h3>Terminados</h3>
                                <h4>+2 proyectos</h4> 
                            </div>
                            <div className={styles.card}>
                                <Icon path={mdiClock} size={1} />
                                <h3>Asistencia</h3>
                                <h4>Online 24/7</h4> 
                            </div>
                        </div>
                        <div>
                            <p className={styles.largeText}>
                                Soy un apasionado programador especializado en JavaScript, con experiencia en el desarrollo web. Siempre estoy en busca de oportunidades laborales para aplicar mis habilidades y conocimientos en proyectos interesantes y desafiantes. Me encanta aprender constantemente y mantenerme actualizado con las últimas tecnologías y mejores prácticas en el mundo del desarrollo web.
                            </p>
                            <Link to="/contact">
                            <Button variant="contained" color="success">Contacto</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}