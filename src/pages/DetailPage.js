import style from './Page.module.scss';
import {StaffInfo} from '../components/index.js';

class DetailPage{
    constructor({targ}){
        this.Root = document.createElement('div');
        this.Root.className = style.DetailPage;
        targ.appendChild(this.Root);
        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = `
            detail info !!
        `;
        this.StaffInfo = new StaffInfo({
            targ: this.Root
        });
    }
}

export default DetailPage;