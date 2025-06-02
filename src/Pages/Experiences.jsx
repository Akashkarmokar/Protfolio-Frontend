
const Experienc = () => {
    return (
        <div className="main-container my-5">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-[30%]">
                    <h4>Company Name</h4>
                    <h4>2000 - Present</h4>
                    <h4>Onsite</h4>
                </div>
                <div className="border-l-4 pl-4 flex flex-col items-start justify-center w-[70%] ">
                    <h2 className="my-1">Designation</h2>
                    <h2 className="my-1">Tech Skills: NodeJs, ExpressJS ....... </h2>
                    <p className="my-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quo placeat ducimus! Non totam quam hic sint omnis vitae repudiandae accusamus? Odio accusantium ullam assumenda corporis, explicabo distinctio deleniti illum?</p>
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