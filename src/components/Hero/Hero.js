import developerImage from '../../assets/images/profilePhoto.jpg'
import './Hero.css'
import Skills from './Skills';
const Hero = ()=> {
    return (
        <>
        <section id='home' className='hero-section bg-gray-100 h-screen  flex flex-col justify-center rounded'>
            <div className=' mx-auto flex flex-col justify-center'>
                    <div className="hero-content flex flex-wrap-reverse gap-5">
                        <div className="hero-txt sm:w-[600px] space-y-4">
                            <h1 className='poppins text-3xl sm:text-5xl'>Junior Web developer</h1>
                            <p className=' text-gray-600'>
                            Hi, I'm Tharakaramudu. A passionate Junior Web Developer based in Bengaluru, Karnataka. 📍
                            </p>
                            <span className=' gap-5 flex'>
                            <a href="https://www.linkedin.com/in/tharakaramudu-nagaladinne-7b36a523b/">
                                <i class="fa-brands fa-linkedin text-xl sm:text-2xl"></i>
                            </a>
                            <a href="https://github.com/TharakaramuduN">
                                <i class="fa-brands fa-github text-xl sm:text-2xl"></i>
                            </a>
                            </span>
                        </div>
                        <div className="hero-img mt-10">
                            <img className=' h-60 w-52 rounded-full' src={developerImage} alt="" />
                        </div>
                    </div>
                    <Skills/>
                </div>
        </section>
        </>
    );
};

export default Hero;