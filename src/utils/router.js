class Router{
    constructor({targ, list=[]}){
        if(!window.onpopstate){
            window.onpopstate = (e)=>{
                const {state} = e;
                const path = location.pathname;
                this.render({path, state}); 
            }
        }
        this.target = targ;
        this.components = list.map(d => (
            {path: d.path, ui: d.ui}
        ));
        this.render({
            path: '/',
            state: {}
        });
    }
    
    push = ({path='/', state={}})=>{
        const url = location.origin + path;
        history.pushState(state, null, url);
        this.render({path, state});
    }

    render = ({path, state={}})=>{
        // 현재 보여지는 ui 제거
        if(this.currentUi && this.currentUi.Root){
            this.target.removeChild(this.currentUi.Root);
        }
        // 새로운 ui 생성
        const ui = this.components.filter(c => c.path === path)[0].ui;
        this.currentUi = new ui({
            targ: this.target,
            route: this.push,
            state
        });
    }
}

export default Router;