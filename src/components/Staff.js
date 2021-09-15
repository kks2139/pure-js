import style from './Component.module.scss';

class Staff {
    Root = null;
    data = null;
    onClickRow = null;

    constructor({targ, staffInfo, onClickRow}){
        this.data = staffInfo;
        this.onClickRow = onClickRow;

        this.Root = document.createElement('div');
        this.Root.className = style.Staff;
        targ.appendChild(this.Root);

        this.render();
    };

    onClick = (e)=>{
        this.onClickRow(this.data);
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='row'>
                <div class='fn'>${this.data.first_name}</div>                        
                <div class='ln'>${this.data.last_name}</div>                        
                <div class='gd'>${this.data.gender}</div>                        
                <div class='ag'>${this.data.age}</div>                        
                <div class='em'>${this.data.email}</div>                        
            </div>
        `;
        this.Root.querySelector('.row').onclick = this.onClick;
    }
}

export default Staff;