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
            list: this.staffList,
            listInfo: [
                {header: 'First name', field: 'first_name', width: '160px', type: 'string'},
                {header: 'Last Name', field: 'last_name', width: '160px', type: 'string'},
                {header: 'Gender', field: 'gender', width: '90px', type: 'string'},
                {header: 'Age', field: 'age', width: '60px', type: 'number'},
                {header: 'Email', field: 'email', width: '', type: 'string'}
            ]
        });

        targ.appendChild(this.Root);
        this.render();
    }
    
    onSearch = (text)=>{
        this.staffList = UT.getList(text);
        this.SearchList.setState(this.staffList);
    }

    render = ()=>{

    }
}

export default SearchResultPage;