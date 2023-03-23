import logo from '../assets/imgsmall.png'


function Profile(){
    
    
    return (
    <div className="mr-16 my-24 w-full  h-1/2 flex flex-col md:flex-row  flex-nowrap align-midfle justify-center content-center">
        <img src={logo} className="animate-spin-slow w-64  h-64 my-8 md:mx-8 self-center"/>
        <div className=" w-fit h-fit monGivrer  rounded-2xl text-white self-center">
            <div className="m-4 flex flex-col">
                <span className="mb-4 GrosseurTitre">Salut, je m'appelle Gabriel Lafrance 👋</span>
                <span className="mb-4 GrosseurSousTitre">Je suis un jeune développeur Web</span>
                <span className="mb-4 GrosseurTexteNormal"> 🌎 Situé à Rimouski, QC, Canada</span>
                <span className="mb-4 GrosseurTexteNormal"> 💻 Présentement à mon propre compte</span>
                <span className="mb-4 GrosseurTexteNormal"> 📧 lafgab01@hotmail.com</span>
            </div>
        </div>

    </div>
    );
}

export default Profile;