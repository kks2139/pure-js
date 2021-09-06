const UT = {
    request : async (api)=>{
        const result = await fetch(api);
        try{
            if(result.status !== 200){
                throw new Error('문제가 발생하였습니다!');
            }
            return result.json();
        }catch(ex){
            alert(ex);
        }
    }
}

export default UT;