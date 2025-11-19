import { Link } from 'react-router';
import homebutton from "./img/homebutton.png"
import './Backbutton.css';
export default function Backbutton() {
    return (
    
        <Link to="/" className="Backbutton"><img src={homebutton} alt="Home button"/></Link> 
        
    );
}