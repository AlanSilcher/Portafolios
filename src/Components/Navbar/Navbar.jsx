import { Link } from 'react-router-dom';


export default function Navbar() { 
    return (
        <div>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/achievements"><button>Achievements</button></Link>
            <Link to="/certifications"><button>Certifications</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/reviews"><button>Reviews</button></Link>
            <Link to="/solutions"><button>Solutions</button></Link>
            <Link to="/technologies"><button>Technologies</button></Link>
        </div>
    )
}