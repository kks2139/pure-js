import style from './Component.module.scss';

class SearchList{
    Root = null;
    data = [];

    constructor({targ, list}){
        this.data = list;
        this.Root = document.createElement('div');
        this.Root.className = style.SearchList;

        targ.appendChild(this.Root);
    }

    setState = (newData)=>{
        this.data = newData;
        this.render();
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='wrapper'>
                <div class='row header'>
                    <div class='fn'>First name</div>                        
                    <div class='ln'>Last Name</div>                        
                    <div class='gd'>Gender</div>                        
                    <div class='ag'>Age</div>                        
                    <div class='em'>Email</div>                        
                </div>
                ${this.data.map(d => (`
                    <div class='row'>
                        <div class='fn'>${d.first_name}</div>                        
                        <div class='ln'>${d.last_name}</div>                        
                        <div class='gd'>${d.gender}</div>                        
                        <div class='ag'>${d.age}</div>                        
                        <div class='em'>${d.email}</div>                        
                    </div>
                `)).join('')}
            </div>
        `;
    }
}

export default SearchList;