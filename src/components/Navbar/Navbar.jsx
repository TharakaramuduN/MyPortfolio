import {useState, useEffect} from 'react'
import MobileNavbar from './MobileNavbar/MobileNavbar'



const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const [bodyOverflowHidden, setBodyOverflowHidden] = useState(false);
    const toggleMenu = ()=> {
        setOpenMenu(!openMenu)
        setBodyOverflowHidden(!bodyOverflowHidden);
        }

    useEffect(() => {
        if (bodyOverflowHidden) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [bodyOverflowHidden]);

    const scrollToSection = (sectionId)=>{
        const section = document.getElementById(sectionId)
        const navHeight = document.querySelector('nav').offsetHeight
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: 'smooth',
        })
    }
    return (
        <>
    <nav className='nav-wrapper sticky h-14 flex items-center w-screen top-0 z-40 px-10 shadow-lg bg-white'>
        <div className="nav-content items-center justify-between w-full flex">
            <div className="logo text-2xl font-bold text-gray-600">
                Portfolio
            </div>
            <ul className=" gap-8  hidden sm:flex justify-evenly text-gray-600">
                <li className=' hover:scale-110 hover:font-semibold hover:cursor-pointer p-2' onClick={()=> scrollToSection('home')}>Home</li>
                <li className=' hover:scale-110 hover:font-semibold hover:cursor-pointer p-2' onClick={()=> scrollToSection('about')}>About</li>
                <li className=' hover:scale-110 hover:font-semibold hover:cursor-pointer p-2' onClick={()=> scrollToSection('projects')}>Projects</li>
                <li className=' hover:scale-110 hover:font-semibold hover:cursor-pointer p-2' onClick={()=> scrollToSection('contact')}>Contact</li>
            </ul>
            <button onClick={toggleMenu}  className='sm:hidden'>
                { openMenu ? <i className="fa-solid fa-xmark text-xl"></i> : <i className="fa-solid fa-bars text-xl"></i> }
            </button>
        </div>
    </nav>
    <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
    </>)
}

export default Navbar