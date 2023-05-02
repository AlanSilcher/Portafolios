import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLightbulb, faCode, faDesktop, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import logo from './Image/Logo.png'


const NavButton = styled.button`
  font-size: 20px;
  padding: 12px 18px;
  margin-right: 10px;
  background-color: #0D0D0D;
  border: none;
  border-radius: 5px;
  color: #D9042B;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &::before {
    margin-right: 5px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #0D0D0D;
`;

const LogoImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 10px;
`;

export default function Dashboard() {
  const location = useLocation();

  return (
    <NavWrapper>
      <Link to="/">
        <LogoImg src={logo} alt="Logo de la página" />
      </Link>
      {location.pathname !== '/me' && (
        <Link to="/me"><NavButton><FontAwesomeIcon icon={faUser} /> Sobre mí</NavButton></Link>
      )}
      {location.pathname !== '/certifications' && (
        <Link to="/certifications"><NavButton><FontAwesomeIcon icon={faGraduationCap} /> Certificaciones</NavButton></Link>
      )}
      {location.pathname !== '/projects' && (
        <Link to="/projects"><NavButton><FontAwesomeIcon icon={faDesktop} /> Proyectos</NavButton></Link>
      )}
      {/* {location.pathname !== '/reviews' && (
        <Link to="/reviews"><NavButton><FontAwesomeIcon icon={faStarHalfAlt} /> Reviews</NavButton></Link>
      )} */}
      {location.pathname !== '/solutions' && (
        <Link to="/solutions"><NavButton><FontAwesomeIcon icon={faLightbulb} /> Soluciones</NavButton></Link>
      )}
      {location.pathname !== '/technologies' && (
        <Link to="/technologies"><NavButton><FontAwesomeIcon icon={faCode} /> Tecnologías</NavButton></Link>
      )}
      {location.pathname !== '/contact' && (
        <Link to="/contact"><NavButton><FontAwesomeIcon icon={faEnvelope} /> Contacto</NavButton></Link>
      )}
    </NavWrapper>
  );
}