import {SearchBar, SearchList} from '../components/index.js';
import UT from './utils/util.js';

let staffList = [];

function SearchResultPage(){
    const box = document.createElement('div');
    box.classList.add('box');

    const getList = async ()=> await UT.request('mock.json');
    
    staffList = getList();
    
    const onSearch = (text)=>{
        getNewList(text);
    }
    
    const getNewList = (text)=>{
        if(text){
            staffList = getList();
        }else{
            staffList = staffList.filter(({first_name, last_name}) =>{
                return first_name.indexOf(text) > -1 || last_name.indexOf(text) > -1;
            });
        }
        render();
    }

    const render = ()=>{
        while(box.hasChildNodes()){
            box.removeChild(box.firstChild);
        }
        box.appendChild(SearchBar({
            onSearch
        }));
        box.appendChild(SearchList({
            items: staffList
        }));
    }
}

export default SearchResultPage;