import { toast } from "react-toastify";

const generateToast = async (toastMessage,updatedOptions = {} )=>{
    let options = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };
    if(Object.keys(updatedOptions).length !== 0){
        options = updatedOptions;
    }
    const messageToShow = toastMessage.trim();
    toast(messageToShow,options);
}

export default generateToast;