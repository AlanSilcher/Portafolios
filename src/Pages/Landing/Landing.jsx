import logo from './Image/Logo-resolucion.png'

export default function Landing() {

    const styles = {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '94vh'
    };

    return (
        <div style={styles}>
        </div>
    )
}