import './Footer.css'
const Footer = ()=> {
    return (
        <>
            <footer className=' bg-black text-white py-12'>
                <div className="px-10 flex justify-center">
                    <div className=" flex justify-between w-[900px] gap-7 flex-wrap">
                            <h3>Copyright © 2024. All rights are reserved</h3>
                            <div className=" gap-4 flex">
                                <a href="/"><i className="fa-brands fa-linkedin text-xl sm:text-2xl "></i></a>
                                <a href="/"><i className="fa-brands fa-github text-xl sm:text-2xl"></i></a>
                            </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;