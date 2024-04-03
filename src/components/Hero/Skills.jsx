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
                <div className="skills">
                    <p className="tech-stack font-medium text-gray-600 h-fit">Tech Stack</p>
                    <div className=" py-5">
                        <ul className='logos gap-5 px-5'>
                            <li><img className='skill-logo hover:cursor-pointer' src={pythonIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={djangoIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={htmlIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={cssIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={tailwindIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={jsIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={reactIcon} alt="" /></li>
                            <li><img className='skill-logo hover:cursor-pointer' src={PostgresIcon} alt="" /></li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default Skills;