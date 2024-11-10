import React from "react";
function About(){
    return(
        <div className="mb-10 max-[800px]:mt-[60px] " id="about">
     <p className="text-white m-10 mx-40 max-[800px]:m-10">
     As a passionate full-stack web developer with expertise in Node.js and a strong proficiency in Python, I thrive in creating dynamic and robust web applications. My journey in web development has equipped me with a deep understanding of both front-end and back-end technologies, allowing me to design and implement seamless user experiences.
     </p>
     <div className="flex flex-row text-white  mx-40 justify-between max-[800px]:flex-col max-[800px]:m-10 max-[800px]:gap-4">
        <div>
            <h3 className="font-bold text-4xl ">Python</h3>
             <div className="mt-2">
                <p>1 Year Exprerience</p>
                <hr></hr>
             </div>
        </div>
        <div>
            <h3 className="font-bold text-4xl ">Frontend</h3>
            <div className="mt-2">
                <p>1 Year Experience</p>
                <hr></hr>
             </div>
            </div>
        <div>
            <h3 className="font-bold text-4xl ">Backend</h3>
            <div className="mt-2">
                <p>1 Year Exprerience</p>
                <hr></hr>
             </div>
            </div>

     </div>
    </div>
    )
}
export default About;