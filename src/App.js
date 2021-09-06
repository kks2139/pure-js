import {SearchResultPage} from './pages/index.js';
import UT from './utils/util.js';


class App{
    Root = null;

    constructor(targ){
        this.Root = targ;
        this.SearchResultPage = new SearchResultPage({
            targ : this.Root
        });
    }
}

export default App; 