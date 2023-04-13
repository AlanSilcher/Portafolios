import { Link } from "react-router-dom"

export default function Home() { 
    return (
        <div>
            <h1>Esto es home</h1>
            <h3>Aca va el resumen personal</h3>
            <Link to= '/reviews'> <button>Reviews</button></Link>
            <Link to= '/contact'> <button>Contact</button></Link>
            <Link to= '/projects'> <button>Projects</button></Link>
        </div>
    )
}


