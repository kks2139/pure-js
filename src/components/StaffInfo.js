import style from './Component.module.scss';

class StaffInfo{
    Root = null;
    data = null;

    constructor({targ, info}){
        this.data = info;
        this.Root = document.createElement('div');
        this.Root.className = style.StaffInfo;
        targ.appendChild(this.Root);
    }

    hide = ()=>{
        this.Root.innerHTML = '';
    }

    show = ()=>{
        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = `

        `;
    }
} 

export default StaffInfo;