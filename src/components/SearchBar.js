import './SearchBar.module.css';

class SearchBar{
    constructor({targ, onSearch}){
        this.Root = document.createElement('div');
        this.Root.classList.add('box');

        targ.appendChild(this.Root);
    }

    onKeydown(e){
        if(e.keyCode === 13){
            this.onClickSearch(e.currentTarget.value);
        }
    }

    onClickSearch(e){
        onSearch(e.currentTarget.value);
    }

    render(){
        this.Root.innerHTML = `
            <input class='input' onkeydown='onKeydown' placeholder='First name Or Last name'></input>
            <div class='button' onclick='onClickSearch'></div>
        `;    
    }
}   

export default SearchBar;