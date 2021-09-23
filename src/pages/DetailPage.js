import style from './Page.module.scss';
import {StaffInfo} from '../components/index.js';

class DetailPage{
    constructor({targ, route, state}){
        this.state = state;
        this.route = route;
        this.Root = document.createElement('div');
        this.Root.className = style.DetailPage;
        targ.appendChild(this.Root);
        this.render();
    }

    onClose = ()=>{
        this.route('/');
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='header'>
                <div class='tit'>직원 상세정보</div>
                <div class='button' data-name='close'>닫기</div>
            </div>
            <div class='content'></div>
        `;
        this.Root.querySelector('[data-name=close]').onclick = this.onClose;
        this.StaffInfo = new StaffInfo({
            targ: this.Root.querySelector('.content'),
            info: this.state 
        });
    }
}

export default DetailPage;