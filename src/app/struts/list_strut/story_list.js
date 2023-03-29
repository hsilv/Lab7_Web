export const newStoryList = (listArr, back) => {

    var ul = document.createElement('ul');
    var hRefBack = document.createElement('a');

    for(let element of listArr){
        var li = document.createElement('li');
        var a = document.createElement('a');
        var b = document.createElement('b');

        a.href = element[0];
        b.innerHTML = element[1];
        a.appendChild(b);
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    if(back != undefined){
        hRefBack.href = back;
        hRefBack.innerHTML = 'Regresar';
        document.body.appendChild(hRefBack);
    }
}