import TailorProjectImage from '../../assets/images/Screenshot (220).png'
import TodoProjectImage from '../../assets/images/Todo.png'
const Projects = ()=>{
    return (
        <>
            <section id='projects' className="projects-section flex flex-col justify-center items-center bg-gray-100 my-5 rounded">
                <h1 className=' m-5 text-2xl font-bold text-gray-600'>Projects</h1>
                <Project imageSource={TailorProjectImage} title={"TailorFlow"}
                description={"TailorFlow is a web application that let's Tailors to manage the customers details,orders, transactions, etc., I am currently working on this project."}
                githubLink={"https://github.com/TharakaramuduN/TailorFlow1"}/>
                <Project imageSource={TodoProjectImage} title={"Todo"}
                 description={"Todo is a web application that let's users to manage the tasks that they want to do"}
                 githubLink={"/"}/>
            </section>
        </>
    )
}


function Project({imageSource,title,description,githubLink}){
    return (
        <div className="project flex-col flex sm:flex-row justify-center items-center max-w-4xl mb-5">
            <div className="project-img w-[80%] sm:w-1/2 p-8 flex justify-center items-center">
                <img className=' rounded' src={imageSource} alt="" />
            </div>
            <div className="project-txt  sm:w-1/2 text-center sm:text-left space-y-2 sm:space-y-2">
                <h1 className=' text-xl font-medium'>{title}</h1>
                <p className=' px-3 sm:px-0 text-gray-600'>{description}</p>
                <p className=' px-3 sm:px-0'>
                    <a href={githubLink}>Code <i class="fa-brands fa-github text-xl sm:text-2xl"></i></a>
                </p>
            </div>
        </div>
    )
}

export default Projects;