const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

const data = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query) {
        const filteredResults = data.filter(item => item.toLowerCase().includes(query));
        filteredResults.forEach(result => {
            const li = document.createElement("li");
            li.textContent = result;
            li.addEventListener("click", () => {
                searchInput.value = result;
                searchResults.innerHTML = "";
            });
            searchResults.appendChild(li);
        });
    }
});
