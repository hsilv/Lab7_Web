export const newStore = (title, imgRef, menu, container) => {
    var store = document.createElement('div');
    var about = document.createElement('div');
    var store_menu = document.createElement('div');

    var title_store = document.createElement('h1');
    var image_store = document.createElement('img');

    var title_menu = document.createElement('h1');
    var list_menu = document.createElement('ol');
    var element1_menu = document.createElement('li');
    var element2_menu = document.createElement('li');
    var element3_menu = document.createElement('li');

    about.classList.add('store-title');
    about.classList.add('store-image');
    store_menu.classList.add('menu-title');
    store_menu.classList.add('menu-list');

    title_menu.innerHTML = menu.name;

    title_store.innerHTML = title;

    image_store.src = imgRef;
    image_store.width = 300;

    var list1Href = document.createElement('a');
    list1Href.innerHTML = menu.list1Name;
    list1Href.href = menu.list1HRef;

    var list2Href = document.createElement('a');
    list2Href.innerHTML = menu.list2Name;
    list2Href.href = menu.list2HRef;

    var details = document.createElement('details');
    var summary = document.createElement('summary');
    var comment = document.createElement('p');

    element1_menu.appendChild(list1Href);
    element2_menu.appendChild(list2Href);

    summary.innerHTML = menu.summary;
    comment.innerHTML = menu.comment;

    details.appendChild(summary);
    details.appendChild(comment);
    element3_menu.appendChild(details);
    

    list_menu.appendChild(element1_menu);
    list_menu.appendChild(element2_menu);
    list_menu.appendChild(element3_menu);

    store_menu.appendChild(title_menu);
    store_menu.appendChild(list_menu);

    about.appendChild(title_store);
    about.appendChild(image_store);

    store.appendChild(about);
    store.appendChild(store_menu);

    container.appendChild(store);
};