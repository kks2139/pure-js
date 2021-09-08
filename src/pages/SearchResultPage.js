import {SearchBar, SearchList} from '../components/index.js';
import UT from '../utils/util.js';
import './SearchResultPage.module.css';


class SearchResultPage{
    Root = null;
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

        targ.appendChild(this.Root);
        this.render();
    }
    
    onSearch = async (text)=>{
        if(text){
            this.staffList = await this.getList();
        }else{
            this.staffList = this.staffList.filter(({first_name, last_name}) =>{
                return first_name.indexOf(text) > -1 || last_name.indexOf(text) > -1;
            });
        }
        this.SearchList.setState(this.staffList);
    }

    getList = ()=>{
        return UT.request('mock.json');
    }

    render = ()=>{

    }
}

export default SearchResultPage;