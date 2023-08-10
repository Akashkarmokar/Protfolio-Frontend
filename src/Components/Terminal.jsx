import { useState } from "react"

const Playground = ()=>{
    const [ userName] = useState("Guest User");
    const [ machineName] = useState('AK')
    const [ prevInputValues, setPrevInputValues ] = useState([]);
    const [ prevOutputsValues, setPrevOutputValues ] = useState([]);
    const [ newInputValue, setNewInputValue ] = useState("");
    const [ welcomeMessage , setWelcomeMessage ] = useState(" \\ [._.]/ - you're in akash's cli! type `help` to get started.")


    const inputHandler = (event)=>{
        if (event.key == 'Enter'){
            if (newInputValue.toLowerCase().trim() == 'clear'){
                setPrevInputValues([]);
                setPrevOutputValues([]);
                setWelcomeMessage('')
                return 
            }
            const updatedInputValues = [...prevInputValues, newInputValue];
            setPrevInputValues(updatedInputValues);
            
            const updatedOutputvalues = [...prevOutputsValues];
            updatedOutputvalues.push(`New Output value ${1}`)
            setPrevOutputValues(updatedOutputvalues);
            
            
            setNewInputValue("")
        }
    }
    return (
        <div className="flex flex-col items-start  justify-center  w-[100%] md:w-6/12 border-solid border-2 border-[#00DF9A] rounded-md">
            { welcomeMessage ? <p className="ml-5 text-center">{welcomeMessage}</p> : ''}
            {   
                prevInputValues.length == prevOutputsValues.length ?
                prevInputValues
                .map((value,index)=>{
                        return (
                            <div key={value} className="ml-5">
                                <p className="flex-1 w-auto text-left">{`${userName} @ ${machineName}: `} <span className="text-xl">{prevInputValues[index]}</span></p>    
                                <p className="flex-1 w-auto text-left">{prevOutputsValues[index]}</p>
                            </div>
                        )
                    }
                ) : "Null"
            }
            <div className="flex flex-row gap-x-2 ml-5">
                <p className="flex-1 w-auto text-left">{`${userName} @ ${machineName}: `} </p>
                <input type="text" value={newInputValue} onChange={e=> setNewInputValue(e.target.value)} onKeyDown={inputHandler} className="bg-transparent border-none"/>
            </div>
        </div>
    )
}
export default Playground