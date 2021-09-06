import {SearchBar, SearchList} from '../components/index.js';
import UT from './utils/util.js';
import './SearchResultPage.module.css';


class SearchResultPage{
    staffList = [];

    constructor({targ}){
        this.Root = document.createElement('div');
        this.Root.classList.add('box');

        this.SearchBar = new SearchBar({
            targ: this.Root,
            onSearch: this.onSearch
        });
        
        this.SearchList = new SearchList({
            targ: this.Root,
            list: this.staffList
        });

        targ.appenChild(Root);
        this.render();
    }
    
    onSearch(text){
        if(text){
            staffList = getList();
        }else{
            staffList = staffList.filter(({first_name, last_name}) =>{
                return first_name.indexOf(text) > -1 || last_name.indexOf(text) > -1;
            });
        }
        this.SearchList.setState(this.staffList);
    }

    async getList(){
        return await UT.request('mock.json');
    }
}

export default SearchResultPage;