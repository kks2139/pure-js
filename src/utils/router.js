class Router{
    constructor({targ, list=[]}){
        this.target = targ;
        this.components = list.map(d => (
            {path: d.path, ui: d.ui}
        ));
        this.render({
            path: '/',
            state: null
        });
    }
    
    push = ({path='/', state={}})=>{
        if(!window.onpopstate){
            window.onpopstate = (e)=>{
                this.render({path, state}); 
            }
        }
        const url = location.origin + path;
        history.pushState(state, null, url);
    }

    render = ({path, state})=>{
        this.components.forEach(c =>{
            if(c.ui.Root){
                this.target.removeChild(c.ui.Root);
            }
        });
        const ui = this.components.filter(c => c.path === path)[0].ui;
        new ui({
            targ: this.target,
            route: this.push
        });
    }
}

export default Router;