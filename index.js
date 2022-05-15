let rootElement = document.getElementById('root');

let heading = document.createElement('h1');
heading.innerHTML = 'TO-DO LIST';
rootElement.appendChild(heading);

let input = document.createElement('input');
input.setAttribute('placeholder', "Add a new task");
rootElement.appendChild(input);

let button = document.createElement('button');
button.setAttribute('type', "button");
button.innerHTML = "Add";  
rootElement.appendChild(button);
button.addEventListener('click', additem);

let list = document.createElement('ul');
rootElement.appendChild(list);


let button_rem = document.createElement('button');
button_rem.setAttribute('type', "button");
button_rem.innerHTML = "Remove All";
// button_rem.style.cssText = "padding:10px 20px; margin-top:40px; background-color:rgb(15, 60, 108); border:none; border-radius:5px; font-weight:bold; cursor: pointer";
rootElement.appendChild(button_rem);
button_rem.addEventListener('click', removeall);



//function to add task to list

function additem(){
    let text = input.value;
    if(text == ""){
        alert('please write task to add');
    }
    else{
        var li = document.createElement('li');
        li.innerHTML = text;
        list.appendChild(li);
        input.value = '';

        //function to remove li
        
        let btn = document.createElement('button');
        btn.setAttribute('type', "button");
        btn.innerHTML = '-';
        btn.addEventListener('click', remove);
        btn.classList.add('btn');
        // btn.style.cssText = "float:right; clear:both; margin-top:-9px";
        li.appendChild(btn);
    }

    function remove(){
        list.removeChild(li);
    }
}

//function to remove all items

function removeall(){
    list.innerHTML = '';
}