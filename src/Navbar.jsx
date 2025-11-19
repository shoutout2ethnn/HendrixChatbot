import { Link } from 'react-router';
import homebutton from "./img/homebutton.png"
export default function Backbutton() {
    return (
    
        <Link to="/"><img src={homebutton}/></Link> 
        
    );
}