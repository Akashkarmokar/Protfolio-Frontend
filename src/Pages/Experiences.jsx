import { NavLink } from "react-router-dom";

const Experienc = () => {
    return (
        <div className="main-container my-5">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[30%]">
                    <NavLink to="https://www.yotech.ltd/"><h1 className="text-[#00DF9A]">Valt</h1></NavLink>
                    <p><NavLink to={"https://www.yotech.ltd/"}>Website</NavLink> | <NavLink to={"https://www.yotech.ltd/"}>Linkedin</NavLink></p>
                    <h4>{"2000 - Present"}</h4>
                    {/* <h4>{"Onsite"}</h4> */}
                </div>
                <div className="border-l-4 pl-4 flex flex-col items-start justify-center w-[70%] ">
                    <h2 className="my-1"> <span className="text-lg">Software Engineer</span> | {"Onsite"}</h2>
                    <h2 className="my-1 text-2xl">Tech Skills: NodeJs, ExpressJS ....... </h2>
                    {/* <p className="my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quo placeat ducimus! Non totam quam hic sint omnis vitae repudiandae accusamus? Odio accusantium ullam assumenda corporis, explicabo distinctio deleniti illum?</p> */}
                    <h1 className="text-2xl">Challenges: </h1>
                    <ul className="list-decimal pl-10">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, vero rem unde nobis suscipit, veritatis modi esse quisquam accusantium non iste aperiam, delectus minus neque quos doloremque sapiente voluptatem facilis.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, vero rem unde nobis suscipit, veritatis modi esse quisquam accusantium non iste aperiam, delectus minus neque quos doloremque sapiente voluptatem facilis.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, vero rem unde nobis suscipit, veritatis modi esse quisquam accusantium non iste aperiam, delectus minus neque quos doloremque sapiente voluptatem facilis.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, vero rem unde nobis suscipit, veritatis modi esse quisquam accusantium non iste aperiam, delectus minus neque quos doloremque sapiente voluptatem facilis.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Experiences = ()=> {
    return (
        <div className="main-container space-y-5">
                <div className="flex flex-col items-center justify-center">
                    {
                        Array.from({ length: 3 }).map((_, index) => (
                            <Experienc key={index} />
                        ))
                    }
                </div>
        </div>
    )
}

export default Experiences;