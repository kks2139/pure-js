import {SearchResultPage} from './pages/index.js';
import {Loading} from './components/index.js';
import './Common.scss';

class App{
    Root = null;

    constructor(targ){
        this.Root = targ;
        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = ``;
        this.SearchResultPage = new SearchResultPage({
            targ: this.Root
        });        
        window.LoadingMask = new Loading({
            targ: this.Root
        });
    }
}

export default App; 