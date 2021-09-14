import {Loading} from '../components/index.js';

const UT = {
    request : async (keyword='')=>{
        const url = 'https://my.api.mockaroo.com/users.json?key=9e0801a0';
        const Load = new Loading({
            targ: document.querySelector('#App'),
        });
        const result = await fetch(url + keyword);
        // Load.hide();
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