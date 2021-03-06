import style from './Component.module.scss';

class Loading {
    Root = null;

    constructor({targ}){
        this.Root = document.createElement('div');
        this.Root.className = style.Loading;
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
            <div class='modal'></div>
            <div class='content'>
                <div class='txt'>Loading...</div>
                <div class='turn'>⚙</div>
            </div>
        `;
    }
}

export default Loading;