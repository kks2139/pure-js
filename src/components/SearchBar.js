import style from './SearchBar.module.scss';

class SearchBar{
    Root = null;
    onSearch = null;

    constructor({targ, onSearch}){
        this.Root = document.createElement('div');
        this.Root.className = style.box;
        targ.appendChild(this.Root);

        this.onSearch = onSearch;

        this.render();
    }

    onKeyup = (e)=>{
        if(e.keyCode === 13){
            this.onClickSearch(e.currentTarget.value);
        }
    }

    onClickSearch = ()=>{
        const text = this.Root.querySelector('[name=text]');
        this.onSearch(text);
    }

    render = ()=>{
        this.Root.innerHTML = `
            <input class='field' name='text' placeholder='First name Or Last name'></input>
            <div class='button'>검색</div>
        `;    
        this.Root.querySelector('input').onkeyup = this.onKeyup;
        this.Root.querySelector('.button').onclick = this.onClickSearch;
    }
}   

export default SearchBar;