import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa6'
import { PiDevToLogoLight } from 'react-icons/pi'
import ProfileSrc from '../assets/image/profile.jpg'


const downloadResumeFile = (event)=>{
    const aTag = document.createElement('a');
    aTag.href = '../assets/pdf/Resume_Akash_karmokar.pdf'
    aTag.setAttribute('download','Resume_Akash_karmokar.pdf')
    aTag.click();
    aTag.remove();
}

const Profile = ()=>{
    const [designation, setDesignatioin] = useState('Software Engineer')
    const [organizationName, setOrganizationName]  = useState('Gain Solutions')
    return (
        <div className='flex flex-col gap-y-5 md:flex-row items-center justify-center gap-x-20 my-10'>
                    <div className='h-60 w-60 mx-auto rounded-full overflow-hidden ring-4 ring-[#ffffff]'>
                        <img src={ProfileSrc} loading='lazy' alt="profile"  className='object-cover w-full  '/>
                    </div>
                    <div className='flex flex-col justify-item-stretch'>
                        <p className='text-center md:text-left'><span className='text-[#00DF9A]'> as </span><span className='font-bold text-3xl'>Akash Karmokar</span></p>
                        <p className='text-center md:text-left'>{designation} @ {organizationName}.</p>
                        <div className='text-center md:text-left'>
                            <p>Who likes to work on backend technologies.</p>
                        </div>
                        <div className='flex flex-row gap-3 justify-center mt-2 md:justify-start'>
                            <NavLink to={"https://www.linkedin.com/in/akashcsemu/"} target='_blank'><FaLinkedin className='text-xl'/></NavLink>
                            <NavLink to={"https://github.com/Akashkarmokar"} target='_blank'><FaGithub className='text-xl'/></NavLink>
                            <NavLink to={"https://dev.to/akashcsemu"} target='_blank'><PiDevToLogoLight className='text-xl'/></NavLink>
                            <NavLink to={"https://www.youtube.com/@OpenTerminal108"} target='_blank'><FaYoutube className='text-xl'/></NavLink>
                        </div>
                        <div className='my-2 flex flex-row gap-3 justify-center mt-2 md:justify-start'>
                            <button onClick={downloadResumeFile} className='p-1 border border-[#00DF9A]  rounded-md'>Resume</button>
                        </div>
                    </div>
                </div>
    )
}

export default Profile