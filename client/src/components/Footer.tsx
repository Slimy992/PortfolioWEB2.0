import { ChevronUpIcon } from "@radix-ui/react-icons";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () =>{
    return (
    <footer className="mt-16 w-full h-fit monGivrer p-4 flex flex-row justify-center align-middle">
        <span className="text-white TextSmall mt-2"> © Gabriel Lafrance 2023</span>
        <Link smooth to='#' >
            <ChevronUpIcon  className="text-action-10 min-w-[2rem]  min-h-[2rem] w-[2.5vw] h-[2.5vw] hover:scale-110 transition"/>
        </Link>
    </footer>    
    );
}

export default Footer;