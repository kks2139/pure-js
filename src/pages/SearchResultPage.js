import {SearchBar, StaffList} from '../components/index.js';
import style from './Page.module.scss';
import UT from '../utils/util.js';

class SearchResultPage{
    staffList = [];

    constructor({targ, route}){
        this.route = route;
        this.Root = document.createElement('div');
        this.Root.className = style.SearchResultPage;
        targ.appendChild(this.Root);

        this.render();
    }

    onClickData = (data)=>{
        this.route({
            path: '/detail', 
            state: data
        });
    }
    
    onSearch = async (text='')=>{
        this.staffList = await UT.request();
        if(text){
            text = text.toLowerCase();
            this.staffList = this.staffList.filter(d => (
                d.first_name.toLowerCase().indexOf(text) > -1 ||
                d.last_name.toLowerCase().indexOf(text) > -1 
            ));
        }
        this.StaffList.setState(this.staffList);
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='content'></div>
        `;
        const content = this.Root.querySelector('.content');
        this.SearchBar = new SearchBar({
            targ: content,
            onSearch: this.onSearch
        });
        this.StaffList = new StaffList({
            targ: content,
            onClickData: this.onClickData,
        });
    }
}

export default SearchResultPage;