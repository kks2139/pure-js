import {SearchResultPage, DetailPage} from './pages/index.js';
import {Loading} from './components/index.js';
import Router from './utils/router.js';
import './Common.scss';

class App{
    Root = null;

    constructor(targ){
        this.Root = targ;
        this.render();
    }

    render = ()=>{
        window.LoadingMask = new Loading({
            targ: this.Root
        });
        this.Router = new Router({
            targ: this.Root,
            list: [
                {path: '/', ui: SearchResultPage},
                {path: '/detail', ui: DetailPage}
            ]
        });
    }
}

export default App; 
