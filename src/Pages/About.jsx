import { Blog, Counter, Profile,Skills } from '../Components'

const About = ()=>{
    return (
        <>
            <div className='main-container'>
                <Profile/>
                <div className='flex flex-col md:flex-row md:items-start  md:justify-center gap-5'>
                    <div className='md:w-[30%] flex flex-col'>
                        <Counter/>
                        <Skills/>
                    </div>
                    <div className="flex flex-col md:w-[70%] ">
                        {Array.from([1,2,3,4,5,6,7,8,9,0].map((val)=> (<Blog key={val}/>)))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;