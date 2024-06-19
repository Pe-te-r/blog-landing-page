import logo from '../../assets/logo.svg' 
import NavBar from './navBar' 
import AuthService from './authComponent'
import MoreInfo from './MoreInfo'
import './header.scss'
const Heading=()=>{
    return(
        <>  
           <header>
            <div className='top'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <NavBar/>
                <AuthService/>
            </div>

            <MoreInfo/>
           </header>
            
             
        </>
    )
}

export default Heading