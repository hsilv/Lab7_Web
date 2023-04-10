export const newList = (title, listArr, back) => {

    var header = document.createElement('header');
    var h1 = document.createElement('h1');
    var ul = document.createElement('ul');
    var footer = document.createElement('footer');
    var footer_h1 = document.createElement('h1');
    var footer_ul = document.createElement('ul');
    var footer_li = document.createElement('li');
    var footer_a = document.createElement('a');

    h1.innerHTML = title;
    header.appendChild(h1);
    document.body.appendChild(header);

    for(let element of listArr){
        var li = document.createElement('li');
        var a = document.createElement('a');
        var b = document.createElement('b');
        var i = document.createElement('i');

        a.href = new URL(element[0], window.location.href).href;
        b.innerHTML = element[1] + ' - ';
        a.appendChild(b);
        i.innerHTML = element[2];
        a.appendChild(i);
        li.appendChild(a);
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);
    footer_h1.innerHTML = 'Menú';
    footer_a.innerHTML = 'Regresar';
    footer_a.href = new URL(back, window.location.href).href;
    footer_li.appendChild(footer_a);
    footer_ul.appendChild(footer_li);
    footer.appendChild(footer_h1);
    footer.appendChild(footer_ul);
    document.body.appendChild(footer);

}