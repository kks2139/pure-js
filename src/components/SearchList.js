import './SearchList.module.css';

class SearchList{
    Root = null;
    data = [];

    constructor({targ, list}){
        this.data = list;
        this.Root = document.createElement('div');
        this.Root.classList.add('box');

        targ.appendChild(this.Root);
    }

    setState = (newData)=>{
        this.data = newData;
        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = this.data.map(d => (`
            <div class='row'>
                <div>${d.id}</div>                        
                <div>${d.first_name}</div>                        
                <div>${d.last_name}</div>                        
            <div>
        `)).join('');
    }
}

export default SearchList;