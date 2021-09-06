import './SearchBar.module.css';

function SearchBar({onSearch}){
    const box = document.createElement('div');
    box.classList.add('.box');

    const onKeydown = (e)=>{
        if(e.keyCode === 13){
            onClickSearch(e.currentTarget.value);
        }
    }

    const onClickSearch = (text)=>{
        onSearch(text);
    }

    const html = `
        <input class='input' onkeydown='onKeydown' placeholder='First name Or Last name'></input>
        <div class='button' onclick='onClickSearch'></div>
    `;

    box.innerHTML = html;
    return box;
}   

export default SearchBar;