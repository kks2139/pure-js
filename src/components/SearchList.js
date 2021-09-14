import style from './Component.module.scss';
import {Loading} from './index.js';

class SearchList{
    Root = null;
    data = [];
    origingData = [];
    listInfo = [];

    constructor({targ, list, listInfo}){
        this.data = list;
        this.origingData = list;
        this.listInfo = listInfo;
        
        this.Root = document.createElement('div');
        this.Root.className = style.SearchList;
        targ.appendChild(this.Root);
    }
    
    onClickHeader = (e)=>{
        const type = e.currentTarget.dataset.type;
        const arrow = e.currentTarget.querySelector('.arrow');
        const cls = arrow.classList;

        const arr = this.Root.querySelectorAll('div.header .arrow');
        arr.forEach(a => {
            if(arrow !== a){
                a.classList.remove('show');
                a.classList.remove('up');
                a.classList.remove('down');
            }
        });

        if(cls.contains('show')){
            if(cls.contains('up')){
                cls.remove('up');
                cls.add('down');
            }else if(cls.contains('down')){
                cls.remove('down');
                cls.remove('show');
            }
        }else{
            cls.add('show');
            cls.add('up');
        }
    }

    sortList = ()=>{

    }

    setState = (newData)=>{
        this.data = newData;
        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='wrapper'>
                <div class='row header'>
                    ${this.listInfo.map(d => (`
                        <div class='field' style='${d.width ? `width:${d.width}` : 'flex-grow: 1'};' data-type='${d.type}'>
                            ${d.header}
                            <div class='arrow'>▲</div>
                        </div>                        
                    `)).join('')}
                </div>
                ${this.data.map((row, i) => (`
                    <div class='row'>
                        ${this.listInfo.map(info => (`
                            <div style='${info.width ? `width:${info.width}` : 'flex-grow: 1'};'>${row[info.field]}</div>                        
                        `)).join('')}
                    </div>
                `)).join('')}
            </div>
        `;
        this.Root.querySelectorAll('div.header > .field').forEach(el => el.onclick = this.onClickHeader);
    }
}

export default SearchList;