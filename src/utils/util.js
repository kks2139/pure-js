import mock from '../mock/mock.json'; 

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
    },
    getList : (keyword)=>{
        return keyword ? mock.filter(d => (
            d.first_name.indexOf(keyword) > -1 ||
            d.last_name.indexOf(keyword) > -1
        )) : mock.slice();
    }
}

export default UT;