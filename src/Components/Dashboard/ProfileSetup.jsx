import {gql, useLazyQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor/Tiptap'; 
import { makeToast } from '../../Helpers';



const Experiences = ({ experiences, setExperiences }) => {

    
    const handleAddMoreExperience = () => {
        setExperiences((preValue)=> {
            return [
                // ...preValue,
                {
                    company_name: "",
                    designation: "",
                    description: "",
                    website_link: "",
                    start_date: "",
                    end_date: "",
                    description: "",
                    tech_skills: "",
                    work_place: ""
                }
            ]
        })
    }

    const handleExperienceChange = (index, field, value) => {
        setExperiences((prevExperiences) => {
            const updatedExperiences = [...prevExperiences];
            updatedExperiences[index] = {
                ...updatedExperiences[index],
                [field]: value
            };
            return updatedExperiences;
        });
    }
    return (
        <>
            {
                experiences.map((experience, index) => (
                    <div key={index} className="space-y-2">
                        <input 
                            value={experience.company_name} 
                            className="bg-[#3e403f] w-full bg-transparent border rounded-md" 
                            type="text" 
                            placeholder="Company Name"
                            onChange={(e)=> { handleExperienceChange(index, 'company_name', e.target.value) }}
                        />
                        <input 
                            value={experience.designation} 
                            className="bg-[#3e403f] w-full bg-transparent border rounded-md" 
                            type="text" 
                            placeholder="Designation"
                            onChange={(e)=> { handleExperienceChange(index, 'designation', e.target.value) }}
                        />
                        <input 
                            value={experience.website_link} 
                            className="bg-[#3e403f] w-full bg-transparent border rounded-md" 
                            type="text" 
                            placeholder="Website Link"
                            onChange={(e)=> { handleExperienceChange(index, 'website_link', e.target.value) }}
                        />
                        <input 
                            value={experience.start_date} 
                            className="bg-[#3e403f] w-full bg-transparent border rounded-md" 
                            type="text" 
                            placeholder="Start Date"
                            onChange={(e)=> { handleExperienceChange(index, 'start_date', e.target.value) }}
                        />
                        <input 
                            value={experience.end_date} 
                            className="bg-[#3e403f] w-full bg-transparent border rounded-md" 
                            type="text" 
                            placeholder="End Date"
                            onChange={(e)=> { handleExperienceChange(index, 'end_date', e.target.value) }}
                        />
                        <RichTextEditor
                                initialContent={experience.description} 
                                setInitialContent={(value) => handleExperienceChange(index, 'description', value)}
                                doesShowMenuBar = { true }
                                height = "min-h-[280px]"
                        />
                        <br />
                        
                    </div>
                ))
            }
            
            <div className='flex flex-row items-center justify-center'>
                <button onClick={ handleAddMoreExperience } className="bg-[#3e403f]  p-2 bg-transparent border rounded-md " type="submit" placeholder="" > Add More  </button>
            </div>

            
        </>
    )
}

const ProfileSetup = () => {
    const [ profileData, setProfileData ] = useState(null);
    const [ experiences, setExperiences ] = useState([]);

    const GetProfile = gql`
        query GetProfile {
            GetProfile {
                _id
                id
                name
                email
                phone
                designation
                company
                experiences {
                    _id
                    id
                    company_name
                    website_link
                    designation
                    start_date
                    end_date
                    description
                    tech_skills
                    work_place
                }
                
            }
        }
    `;
    const UpdateProfile = gql`
        mutation UpdateProfile($inputData: UpdateProfileInput) {
            UpdateProfile(inputData: $inputData) {
                _id
                id
                name
                email
                phone
                designation
                company
                experiences {
                    _id
                    id
                    company_name
                    website_link
                    designation
                    start_date
                    end_date
                    description
                    tech_skills
                    work_place
                }
            }
        }
    `;
    const [ fetchProfile, { loading, error, data }] = useLazyQuery(GetProfile);

    const [ updateProfile, { loading: updateLoading, error: updateError, data: updateData }] = useMutation(UpdateProfile)

    useEffect(()=> {
        try {
            const fetchData = async ()=> {
                const response = await fetchProfile({
                    fetchPolicy: 'no-cache',
                });

                const { experiences, ...profileData } = response?.data?.GetProfile || {};
                setProfileData(()=> profileData || null);
                setExperiences((preValue) => [...preValue, ...experiences] || []);
            }
            fetchData()

        }catch(err) {
            console.error("Error fetching profile data:", err);
        }
        return ()=> {
            console.log("Cleanup function called");
            setProfileData(null);
        }
    }, [])


    const handleSaveProfile = (e) => {
        try {
            const ProfileUpdater = async ()=> {
                const UpdatedExperiences = experiences.map(exp => {
                    const { _id } = exp;
                    const data = {};
                    if(_id) { data.id = _id; }
                    if(exp.company_name){ data.company_name = exp.company_name }
                    if(exp.website_link){ data.website_link = exp.website_link }
                    if(exp.designation){ data.designation = exp.designation }
                    if(exp.start_date){ data.start_date = exp.start_date }
                    if(exp.end_date){ data.end_date = exp.end_date }
                    if(exp.description){ data.description = exp.description }
                    if(exp.tech_skills){ data.tech_skills = exp.tech_skills }
                    if(exp.work_place){ data.work_place = exp.work_place }

                    return data
                })
                
                const response = await updateProfile({
                    variables: {
                        inputData: {
                            id: profileData?._id,
                            name: profileData?.name,
                            email: profileData?.email,
                            phone: profileData?.phone,
                            designation: profileData?.designation,
                            company: profileData?.company,
                            experiences: UpdatedExperiences
                        }
                    }
                });
                console.log("Response from UpdateProfile:", response);
                if(response?.data?.UpdateProfile) {
                    makeToast("Profile data saved successfully", "success");
                }else {
                    makeToast("Failed to save profile data", "error");
                }
            }
            ProfileUpdater()
        }catch(err) {
            makeToast("Error saving profile data", "error");
        }
    }


    return (
        <div className="main-container"> 
            <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-[#3e403f] space-y-4 rounded-md border p-4 mt-5 w-[800px]">
                    <div>
                        <input value={profileData?.name??""} className="bg-[#3e403f] w-full bg-transparent border rounded-md" type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <input value={profileData?.designation??""} className="bg-[#3e403f] w-full  bg-transparent border rounded-md " type="text" placeholder="Current Designation"/>
                    </div>
                    <div>
                        <input value={profileData?.email??""} className="bg-[#3e403f] w-full  bg-transparent border rounded-md" type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <input value={profileData?.phone??""} className="bg-[#3e403f] w-full  bg-transparent border rounded-md" type="text" placeholder="Phone"/>
                    </div>
                    <div>
                        <input value={profileData?.company??""} className="bg-[#3e403f] w-full  bg-transparent border rounded-md" type="text" placeholder="Phone"/>
                    </div>
                    <div>
                        <input className="bg-[#3e403f] w-full  bg-transparent border rounded-md " type="submit" placeholder="Moto" onClick={()=> console.log("Hello world")}/>
                    </div>
                </div>
                <br />


                {/* Experiences */}
                <div className='flex flex-col items-start justify-start w-full'>
                    <h2 className='text'>Experiences:</h2>
                    <div className='bg-[#3e403f] space-y-4 rounded-md border p-4 mt-5 w-[800px]'>
                         <Experiences experiences = {experiences} setExperiences = {setExperiences}/>
                         <div>
                            <button onClick={ handleSaveProfile } className="bg-[#3e403f] w-full p-2 bg-transparent border rounded-md " type="submit" placeholder="" > Save  </button>
                        </div>
                    </div>
                   
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProfileSetup;