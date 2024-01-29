import reactIcon from "../../assets/icons/favicon.ico"
import pythonIcon from "../../assets/icons/4518857_python_icon.png"
import djangoIcon from "../../assets/icons/django.ico"
import htmlIcon from "../../assets/icons/icons8-html5-48.png"
import cssIcon from "../../assets/icons/icons8-css-48.png"
import tailwindIcon from "../../assets/icons/icons8-tailwind-css-48.png"
import jsIcon from "../../assets/icons/icons8-javascript-48.png"
import PostgresIcon from "../../assets/icons/icons8-postgres-48.png"
import './Skills.css'

const Skills = ()=> {
    return (
        <>
                <div className="skills flex flex-row gap-7 items-center justify-center sm:justify-normal my-5">
                    <p className="tech-stack font-medium">Tech Stack</p>
                    <div className="logos">
                        <ul className='grid gap-5 sm:grid-cols-8 grid-cols-4'>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={pythonIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={djangoIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={htmlIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={cssIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={tailwindIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={jsIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={reactIcon} alt="" /></li>
                            <li><img className='sm:h-[60px] sm:w-[60px]  h-[44px] w-[44px] hover:cursor-pointer' src={PostgresIcon} alt="" /></li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default Skills;