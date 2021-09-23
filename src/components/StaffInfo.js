import style from './Component.module.scss';

class StaffInfo{
    Root = null;
    data = null;

    constructor({targ, info}){
        this.data = info;
        this.Root = document.createElement('div');
        this.Root.className = style.StaffInfo;
        targ.appendChild(this.Root);

        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='content'>
                <img src='${this.data.image} alt='프로필'></img>
                <div>
                    <div class='txt'>아이디</div>
                    <div class='val'>${this.data.id}</div>
                </div>
                <div>
                    <div class='txt'>이름</div>
                    <div class='val'>${this.data.first_name} ${this.data.last_name}</div>
                </div>
                <div>
                    <div class='txt'>나이</div>
                    <div class='val'>${this.data.age}</div>
                </div>
                <div>
                    <div class='txt'>성별</div>
                    <div class='val'>${this.data.gender}</div>
                </div>
                <div>
                    <div class='txt'>이메일</div>
                    <div class='val'>${this.data.email}</div>
                </div>
            </div>
        `;
    }
} 

export default StaffInfo;