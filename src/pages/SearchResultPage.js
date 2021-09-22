import {SearchBar, StaffList} from '../components/index.js';
import style from './Page.module.scss';
import UT from '../utils/util.js';

class SearchResultPage{
    Root = null;
    staffList = [];

    constructor({targ, route}){
        this.route = route;
        this.Root = document.createElement('div');
        this.Root.className = style.SearchResultPage;
        targ.appendChild(this.Root);

        this.render();
    }

    onClickData = (arg)=>{
        this.route({path: '/detail'});
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
            <div class='wrapper'></div>
        `;
        const wrapper = this.Root.querySelector('.wrapper');
        this.SearchBar = new SearchBar({
            targ: wrapper,
            onSearch: this.onSearch
        });
        this.StaffList = new StaffList({
            targ: wrapper,
            onClickData: this.onClickData
        });
    }
}

export default SearchResultPage;