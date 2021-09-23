import style from './Component.module.scss';
import {Staff} from './index.js';

class StaffList{
    constructor({targ, onClickData}){
        this.onClickData = onClickData;
        this.Root = document.createElement('div');
        this.Root.className = style.StaffList;
        targ.appendChild(this.Root);
    }

    onClickRow = (data)=>{
        this.onClickData(data);
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
                <div class='info'>
                    <div class='count'>Results : ${this.data.length}</div>
                </div>
                <div class='header'>
                    <div class='fn'>
                        Frist Name
                        <div class='arrow'>▲</div>
                    </div>                        
                    <div class='ln'>
                        Last Name
                        <div class='arrow'>▲</div>
                    </div>                        
                    <div class='gd'>
                        Gender
                        <div class='arrow'>▲</div>
                    </div>                        
                    <div class='ag'>
                        Age
                        <div class='arrow'>▲</div>
                    </div>                        
                    <div class='em'>
                        Email
                        <div class='arrow'>▲</div>
                    </div>       
                </div>
            </div>
        `;
        const wrapper = this.Root.querySelector('.wrapper');
        this.data.forEach(row =>{
            new Staff({
                targ: wrapper,
                staffInfo: row,
                onClickRow: this.onClickRow
            })
        });
        this.Root.querySelectorAll('div.header > div').forEach(el => el.onclick = this.onClickHeader);
    }
}

export default StaffList;