

const ProfileSetup = () => {
    return (
        <div className="main-container"> 
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl">Profile Setup</h1>
                <p className="text-lg">This is a placeholder for the profile setup content.</p>
                <div className="bg-[#3e403f] w-full space-y-4 rounded-md border p-4">
                    <div>
                        <input className="bg-[#3e403f] bg-transparent border rounded-md w-full" type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <input className="bg-[#3e403f] bg-transparent border rounded-md w-full" type="text" placeholder="Current Designation"/>
                    </div>
                    <div>
                        <input className="bg-[#3e403f] bg-transparent border rounded-md w-full" type="text" placeholder="Bio"/>
                    </div>
                    <div>
                        <input className="bg-[#3e403f] bg-transparent border rounded-md w-full" type="text" placeholder="Moto"/>
                    </div>
                    <div>
                        <input className="bg-[#3e403f] bg-transparent border rounded-md w-full" type="submit" placeholder="Moto" onClick={()=> console.log("Hello world")}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileSetup;