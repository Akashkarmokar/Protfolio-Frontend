import { NavLink } from "react-router-dom";

const Experienc = ({experienceData}) => {
    return (
        // <div className="main-container my-5">
        //     <div className="flex items-center justify-center">
        //         <div className="flex flex-col items-center justify-center w-[30%]">
        //             <NavLink to="https://www.yotech.ltd/"><h1 className="text-[#00DF9A]">Valt</h1></NavLink>
        //             <p><NavLink to={"https://www.yotech.ltd/"}>Website</NavLink> | <NavLink to={"https://www.yotech.ltd/"}>Linkedin</NavLink></p>
        //             <h4>{"2000 - Present"}</h4>
        //             {/* <h4>{"Onsite"}</h4> */}
        //         </div>
        //         <div className=" border-l-4 pl-4 flex flex-col items-start justify-center w-[70%] ">
        //             <h2 className="my-1 text-2xl"> Software Engineer | <span className="text-xs">{"Onsite"}</span></h2>
        //             <h2 className="my-1 text-sm">Tech Skills: ExpressJS | FastAPI | Postgresql | MongoDB | Socket | Redis | SQLAlchemy | Alembic </h2>
        //             {/* <p className="my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quo placeat ducimus! Non totam quam hic sint omnis vitae repudiandae accusamus? Odio accusantium ullam assumenda corporis, explicabo distinctio deleniti illum?</p> */}
        //             <h1 className="text-2xl">Experiences: </h1>
        //             <ul className="list-disc pl-10">
        //                 <li>Maintaining one of the largest food delivery system (yofoodie) and multi-vendor EPOS system.</li>
        //                 <li>Developed and deployed REAL TIME QE authentication system for vendor management app with SOCKET programming.</li>
        //                 <li>Integrating THIRD-PARTY services and building product on top of STRIPE.</li>
        //                 <li>Migrated less used services to aws lambda to reduce server cost implementing GraphQL to produce less JSON response from AWS lambda.</li>
        //                 <li>Refactor one of microservices of socket management and lead a team to make this service identical for both API call and Socket Event.</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <div className="main-container my-5">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[30%]">
                    <NavLink to={experienceData.website}><h1 className="text-[#00DF9A]">{experienceData.company}</h1></NavLink>
                    <p><NavLink to={experienceData.website}>Website</NavLink> | <NavLink to={experienceData.linkedin}>Linkedin</NavLink></p>
                    <h4>{"2000 - Present"}</h4>
                    {/* <h4>{"Onsite"}</h4> */}
                </div>
                <div className=" border-l-4 pl-4 flex flex-col items-start justify-center w-[70%] ">
                    <h2 className="my-1 text-2xl"> {experienceData.position} | <span className="text-xs">{"Onsite"}</span></h2>
                    <div className="flex items-start justify-start">
                        <div className="w-[12%] my-1">
                            <h2 className="w-full text-sm">Tech Skills:</h2>
                        </div>
                        <div className="w-[88%]">
                            <p>{experienceData.skills}</p>
                        </div>
                        

                    </div>
                    {/* <p className="my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quo placeat ducimus! Non totam quam hic sint omnis vitae repudiandae accusamus? Odio accusantium ullam assumenda corporis, explicabo distinctio deleniti illum?</p> */}
                    <h1 className="text-2xl">Experiences: </h1>
                    <ul className="list-disc pl-10">
                        {
                            experienceData.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Experiences = ()=> {
    const experiences = [
        {
            company: "Valt",
            position: "Software Engineer",
            duration: "2000 - Present",
            website: "https://www.yotech.ltd/",
            linkedin: "https://www.linkedin.com/company/valtltd/",
            skills: "ExpressJS | FastAPI | Postgresql | MongoDB | Socket | Redis | SQLAlchemy | Alembic",
            description: [
                "Maintaining one of the largest food delivery system (yofoodie) and multi-vendor EPOS system.",
                "Developed and deployed REAL TIME QE authentication system for vendor management app with SOCKET programming.",
                "Integrating THIRD-PARTY services and building product on top of STRIPE.",
                "Migrated less used services to aws lambda to reduce server cost implementing GraphQL to produce less JSON response from AWS lambda.",
                "Refactor one of microservices of socket management and lead a team to make this service identical for both API call and Socket Event."
            ]
        },
        {
            company: "Gain Solutions LTD",
            position: "Software Engineer",
            duration: "2000 - Present",
            website: "https://www.gainhq.com/",
            linkedin: "https://www.linkedin.com/company/valtltd/",
            skills: "GraphQL | AWS [ Lambda , SQS, SNS, S3, EC2, CloudFormation ] | Docker | MongoDB | PostgreSQL | ReactJS | TailwindCSS ",
            description: [
                "Worked on property management system as a full stack developer to connect landlords and tenants.",
                "Experienced with GraphQL and Cloud Development to build scalable microservice applications alongside with Agile and Scrum methodologies.",
                "Developeed and deployed TDD (Test Driven Development) based applications with CI/CD pipeline to ensure 2x developement productivity.",
            ]
        }
    ]
    return (
        <div className="main-container space-y-5">
                <div className="flex flex-col items-center justify-center">
                    {
                        // Array.from({ length: 3 }).map((_, index) => (
                        //     <Experienc key={index} />
                        // ))
                        experiences.map((experience, index) => 
                            ( Experienc({ experienceData: experience }))
                        )
                    }
                </div>
        </div>
    )
}

export default Experiences;