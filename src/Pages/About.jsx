import { Blog, BlogList, Counter, Profile,Skills } from '../Components'

const About = ()=>{
    return (
            <div className='main-container space-y-5'>
                <div className='main-container p-10'>
                    <Profile/>
                </div>
                <div className='main-container flex items-start justify-center '>
                    <div className=''>
                        <BlogList />
                    </div>
                    {/**
                     * Tags Section
                     */}
                    <div className='ml-5 flex flex-col items-center justify-center rounded-md border '>
                        <h2 className='text-2xl font-bold'>Tags</h2>
                        <div className='m-2'>
                            <ul className='flex flex-row gap-2 items-center justify-start flex-wrap'>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>React</li>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>JavaScript</li>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>CSS</li>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>HTML</li>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>React</li>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>JavaScript</li>
                                <li className='bg-[#242424] text-white p-1 rounded-md border border-[#00DF9A]'>CSS</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                
    )
}

export default About;