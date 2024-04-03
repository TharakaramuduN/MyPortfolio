
const MobileNavbar = (isOpen,toggleMenu)=>{
    const scrollToSection = (sectionId)=>{
        const section = document.getElementById(sectionId)
        const navHeight = document.querySelector('nav').offsetHeight
        toggleMenu()
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: 'smooth',
        })
    }
    return (
        <>
        <div className={` z-50 menu-container flex sm:hidden h-screen top-0 fixed bg-fixed w-[60vw] bg-gray-200 transition-transform transform ${isOpen ? "" : "translate-x-[-100%]"} duration-300`}>
            <div className="flex flex-col">
                <div className="logo m-5 text-2xl font-bold">
                        Portfolio
                </div>
                <ul className="flex gap-8 flex-col m-5">
                    <li onClick={()=> scrollToSection('home')}><i className="fa-solid fa-house"></i> Home</li>
                    <li onClick={()=> scrollToSection('about')}><i className="fa-regular fa-user"></i> About</li>
                    <li onClick={()=> scrollToSection('projects')}><i className="fa-solid fa-diagram-project"></i> Projects</li>
                    <li onClick={()=> scrollToSection('contact')}><i className="fa-solid fa-address-book"></i> Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MobileNavbar