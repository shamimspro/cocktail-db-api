// loading data from api by alphabet
const loadData = alphabet => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${alphabet}`;
    fetch(url)
        .then(response => response.json())
        .then(data => display(data))
        .catch(error => console.log(error));
};
loadData('z');

// loading data from api by name
const loadDataByname = name => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => display(data))
        .catch(error => console.log(error));
};

// Display function
const display = data => {
    data = data.drinks;
    const parent = document.getElementById('parent');
    document.getElementById('parent').innerHTML = '';
    data.forEach(e => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="bg-dark">
            <img src="${e.strDrinkThumb}" alt="" class="w-100">
            <a onclick="clickFunction(this)" class="text-decoration-none d-block py-2 title" data-bs-toggle="modal" data-bs-target="#exampleModal">${e.strDrink}</a>
        </div>
    `;
        parent.appendChild(div);
    });
};

// Click function
const clickFunction = event => {
    loadData(event.innerText.toLowerCase());
};

// search input field event handler
document.getElementById('search-by-name').addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        const searchName = document.getElementById('search-by-name').value;
        loadDataByname(searchName);
        document.getElementById('search-by-name').blur();
    }
});

// search button event handler
document.getElementById('search-btn').addEventListener('click', () => {
    const searchName = document.getElementById('search-by-name').value;
    loadDataByname(searchName);
    document.getElementById('search-by-name').blur();
});