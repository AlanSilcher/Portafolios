import React from 'react';
import { CardContent, CardMedia, Typography, Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import henryImage from './Image/Certificado-Henry.jpg'
import styles from './Certifications.module.css'

export default function Certifications()  { 
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mis estudios</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                <a href="https://alansilcher.github.io/Cv-Alan-Silcher/Certificado-Henry-Alan-Silcher.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Card sx={{ maxWidth: 600, bgcolor: '#262624', color: '#fff' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="500"
                                image={henryImage}
                                alt="Certificado Henry"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bootcamp Henry
                                </Typography>
                                <Typography variant="body2">
                                    Certificado entregado por Henry, que representa más de 700 horas de cursado teórico-práctico.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </div>
        </div>
    )
}