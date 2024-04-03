import developerImage from '../../assets/images/softwareDeveloper.jpg'

const About = ()=> {
    return (
        <section id="about" className="about flex  justify-center items-center h-[95vh] px-5">
            <div className="about-content flex flex-col sm:flex-row sm:flex gap-10 justify-center sm:h-[300px] sm:max-w-4xl">
                <div className="img-container flex sm:w-[50%]   justify-center ">
                    <img className=' h-full w-[70%] sm:w-[90%] rounded' src={developerImage} alt="" />
                </div>
                <div className="txt-container flex flex-col sm:w-[50%] space-y-3">
                    <h1 className=' text-2xl font-bold text-center sm:text-left text-gray-600'>About Me</h1>
                    <h4 className=' text-center sm:text-left font-medium'>Junior Web Developer based in Bengaluru, Karnataka</h4>
                    <hr className=' h-[2px] w-full bg-black' />
                    <p className='  text-justify sm:text-left text-gray-600'>
                        Hey, My name is Tharakaramudu, and I&#39;m a junior web developer.
                        My passion is to create and develop web applications for users.
                    </p>
                    <p className=' text-justify sm:text-left text-gray-600'>
                        My main stack currently is Django for backend and HTML,CSS,JavaScript for frontend.
                        And I&#39;m learning React now!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;