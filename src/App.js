import {SearchResultPage} from './pages/index.js';
import UT from './utils/util.js';

let Root = null;

function App(root){
    Root = root;

    Root.innerHTML = '<div>시작</div>';

    const render = (page)=>{
        while(root.hasChildNodes()){
            root.removeChild(root.firstChild);
        }
        if(!page || page === 'list'){
            root.appendChild(SearchResultPage());
        }else if(page === 'detail'){
            
        }else{

        }

    }
}

// function getStaffList(){
//     staffList = UT.request('mock.json');
// }

export default App; 