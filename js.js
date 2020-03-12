const btnAdd = document.querySelector('.btnAdd');
const inpSearch = document.querySelector('.inputSearch');
const btnSearch = document.querySelector('.btnSearch');
const ul = document.querySelector('.list');
let listLi = document.querySelectorAll('.li');

function refresh() {
    listLi.forEach(element => {
        element.remove();
    })
    listLi.forEach(element => {
        contentLi = element.textContent.toLocaleLowerCase();
        contentInp = inpSearch.value.toLocaleLowerCase();
        if (contentLi.includes(contentInp)) {
            ul.appendChild(element);
        }
    })
}

btnAdd.addEventListener('click', () => {
    const search = document.getElementById('inputToAdd');
    if (search.value != '') {
        const li = document.createElement('li');
        li.textContent = search.value;
        li.className = 'li';
        let btnLi = document.createElement('button');
        btnLi.textContent = '-';
        btnLi.className = 'btnLi';
        li.appendChild(btnLi);
        ul.appendChild(li);
        search.value = '';
        if (listLi.length) {
            listLi.forEach(element => {
                element.remove();
            })
            listLi.forEach(element => {
                ul.appendChild(element);
            })
        }

        btnLi.addEventListener('click', function() {
            listLi.forEach(element => {
                ul.appendChild(element);
            })
            this.parentNode.remove();
            listLi = document.querySelectorAll('.li');
            refresh();
        })
        listLi = document.querySelectorAll('.li');
        if (listLi.length) {
            refresh();
        }
    } else {
        alert('enter an action')
    }
})
inpSearch.addEventListener('keyup', () => {
    refresh();
})