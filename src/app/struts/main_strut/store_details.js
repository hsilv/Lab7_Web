export const newStore = (title, imgRef, menu, container) => {
    var store = document.createElement('div');
    var about = document.createElement('div');
    var store_menu = document.createElement('div');

    var title_store = document.createElement('h1');
    var image_store = document.createElement('img');

    var title_menu = document.createElement('h1');

    var listContainer = document.createElement('div');
    listContainer.classList.add('list-group');

    var element1_menu = document.createElement('a');
    element1_menu.classList.add('list-group-item');
    element1_menu.classList.add('list-group-item-action');

    var element2_menu = document.createElement('a');
    element2_menu.classList.add('list-group-item');
    element2_menu.classList.add('list-group-item-action');

    var element3_menu = document.createElement('a');
    element3_menu.classList.add('list-group-item');
    element3_menu.classList.add('list-group-item-action');


    about.classList.add('store-title');
    about.classList.add('store-image');
    store_menu.classList.add('menu-title');
    store_menu.classList.add('menu-list');

    title_menu.innerHTML = menu.name;

    title_store.innerHTML = title;

    image_store.src = imgRef;
    image_store.width = 300;

    element1_menu.innerHTML = menu.list1Name;
    element1_menu.href = menu.list1HRef;

    element2_menu.innerHTML = menu.list2Name;
    element2_menu.href = menu.list2HRef;

    var details = document.createElement('details');
    var summary = document.createElement('summary');
    var comment = document.createElement('p');


    summary.innerHTML = menu.summary;
    comment.innerHTML = menu.comment;

    details.appendChild(summary);
    details.appendChild(comment);
    element3_menu.appendChild(details);
    

    listContainer.appendChild(element1_menu);
    listContainer.appendChild(element2_menu);
    listContainer.appendChild(element3_menu);

    store_menu.appendChild(title_menu);
    store_menu.appendChild(listContainer);

    about.appendChild(title_store);
    about.appendChild(image_store);

    store.appendChild(about);
    store.appendChild(store_menu);

    container.appendChild(store);
};