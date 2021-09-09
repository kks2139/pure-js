import {SearchBar, SearchList} from '../components/index.js';
import UT from '../utils/util.js';

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
    
    onSearch = (text)=>{
        if(text){
            this.staffList = UT.getList(text);
        }else{
            this.staffList = UT.getList();
        }
        this.SearchList.setState(this.staffList);
    }

    render = ()=>{

    }
}

export default SearchResultPage;