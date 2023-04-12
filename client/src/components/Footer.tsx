import { BsArrowBarUp } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () =>{
    return (
    <footer className="mt-16 w-full h-16 monGivrer flex flec-col justify-center align-middle">
        <span className="text-white GrosseurTextePetit mt-5 mr-4"> © Copyright Gabriel Lafrance 2023
        <Link smooth to='#' className="hover:scale-110 transition ml-4 ">
            <BsArrowBarUp color="#ffffff" style={{display: "inline", marginTop: "-8px" }}  size="35"/>
        </Link>
        </span>
    </footer>    
    );
}

export default Footer;