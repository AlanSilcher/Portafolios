import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLightbulb, faCode, faDesktop/* , faStarHalfAlt */, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const NavButton = styled.button`
  font-size: 20px;
  padding: 12px 18px;
  margin-right: 10px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #333;
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
  background-color: transparent;
`;

export default function Dashboard() {
  const location = useLocation();

  return (
    <NavWrapper>
      {location.pathname !== '/me' && (
        <Link to="/me"><NavButton><FontAwesomeIcon icon={faUser} /> Me</NavButton></Link>
      )}
      {location.pathname !== '/certifications' && (
        <Link to="/certifications"><NavButton><FontAwesomeIcon icon={faGraduationCap} /> Certifications</NavButton></Link>
      )}
      {location.pathname !== '/projects' && (
        <Link to="/projects"><NavButton><FontAwesomeIcon icon={faDesktop} /> Projects</NavButton></Link>
      )}
      {/* {location.pathname !== '/reviews' && (
        <Link to="/reviews"><NavButton><FontAwesomeIcon icon={faStarHalfAlt} /> Reviews</NavButton></Link>
      )} */}
      {location.pathname !== '/solutions' && (
        <Link to="/solutions"><NavButton><FontAwesomeIcon icon={faLightbulb} /> Solutions</NavButton></Link>
      )}
      {location.pathname !== '/technologies' && (
        <Link to="/technologies"><NavButton><FontAwesomeIcon icon={faCode} /> Technologies</NavButton></Link>
      )}
      {location.pathname !== '/contact' && (
        <Link to="/contact"><NavButton><FontAwesomeIcon icon={faEnvelope} /> Contact</NavButton></Link>
      )}
    </NavWrapper>
  );
}