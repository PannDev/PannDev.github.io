let menu = document.querySelector('.burger_menu');
console.log(menu);
menu.addEventListener('click', setMenu);


function setMenu(){
    let Setbody = document.querySelector('body');
    Setbody.classList.toggle('menu_active');
}

let nav = document.querySelectorAll('.nav_center a');
console.log(nav);

for (const key in nav) {
    if (Object.hasOwnProperty.call(nav, key)) {
        const addMenu = nav[key];
        console.log(addMenu);
        addMenu.addEventListener('click', Setnav);

    }
}

function Setnav() {
    // alert();
    let Setbody = document.querySelector('body');

    Setbody.classList.remove('menu_active');
}