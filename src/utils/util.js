const UT = {
    request : async (keyword='')=>{
        const url = 'https://my.api.mockaroo.com/users.json?key=9e0801a0';
        LoadingMask.show();
        const result = await fetch(url + keyword);
        LoadingMask.hide();
        try{
            if(result.status !== 200){
                throw new Error('문제가 발생하였습니다!');
            }
            return result.json();
        }catch(ex){
            alert(ex);
        }
    },
}

export default UT;