import logo from '../assets/imgsmall.png'


function Profile(){
    
    
    return (
    <div className="mt-72 w-full  h-1/2 monFlexRow justify-center">
        <div className="w-72 h-72 mr-12">
            <img src={logo} className="animate-spin-slow"/>
        </div>

        <div className=" w-[40%] h-72 monGivrer text-center  text-white text-4xl">
            <div className='my-4'>
                <span>À Propos</span>
            </div>
        </div>

    </div>
    );
}

export default Profile;