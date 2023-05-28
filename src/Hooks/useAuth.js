const useAuth = ()=>{
    const isLoggedIn = false;
    const data = {
        userInfo: {
            userId: '123456789',
            username: 'akash'
        }
    }
    let finalObject = {
        isLoggedIn,
        data
    };
    if(isLoggedIn === false){
        finalObject.data = {}
    }
    return finalObject;
}

export default useAuth;