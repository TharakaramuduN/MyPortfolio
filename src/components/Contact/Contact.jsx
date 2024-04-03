const Contact = ()=>{
    return (
        <>
            <section id="contact" className=" sm:py-28 py-10">
                <div className=" max-w-4xl mx-auto flex flex-col  gap-10 sm:justify-normal justify-center px-5">
                    <p className=" sm:text-left text-center font-medium text-2xl text-blue-700">Contact</p>
                    <div className="section-container flex gap-10 flex-col sm:flex-row">
                        <div className="location flex gap-5 flex-col sm:flex-row">
                            <span className=" flex justify-center items-center">
                                <i className="fa-solid fa-map-location-dot text-2xl text-gray-600"></i>
                            </span>
                            <div className="flex flex-col sm:items-start items-center">
                                <h4 className=" text-lg font-medium">Location</h4>
                                <p>Bangalore,Karnataka</p>
                            </div>
                        </div>
                        <div className="email flex gap-5 flex-col sm:flex-row">
                            <span className=" flex justify-center items-center">
                                <i className="fa-solid fa-envelope text-2xl text-gray-600"></i>
                            </span>
                            <div className="flex flex-col sm:items-start items-center">
                                <h4 className=" text-lg font-medium">Email</h4>
                                <p>tharakaramudu.nagaladinne@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;