// search box and button
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const clearReaults = document.getElementById('search-quantity');
    clearReaults.textContent = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookInfo(data.docs));

}
// show book Informations
const displayBookInfo = infos => {
    const divContainer = document.getElementById('book-info');
    divContainer.textContent = '';
    // not found Eorror
    if (infos.length === 0) {
        const bookNotFound = document.getElementById('book-not-found');
        const div = document.createElement('div');

        div.classList.add('text-danger');
        div.innerHTML = `
        <h4>Sorry! Search result not found. </h4>
        `;
        bookNotFound.appendChild(div);
    }
    else {
        const errorClear = document.getElementById('book-not-found');
        errorClear.textContent = '';
        const searchQuantity = document.getElementById('search-quantity');
        const div1 = document.createElement('div');
        div1.innerHTML = `
        <h4> ${infos.length} </span> results found </h4>
        `;
        searchQuantity.appendChild(div1);
        infos?.forEach(info => {


            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                       <div class="card h-100">
                           <img src="https://covers.openlibrary.org/b/id/${info.cover_i}-M.jpg" class="card-img-top img-thumbnail h-50" alt="...">
                           <div class="card-body">
                               <h5 class="card-title">Book Name : ${info.title}</h5>
                               <h6 class="card-title"> Author : ${info.author_name ? info.author_name : ''}</h6>
                               <p class="card-text">First Publish Year : ${info.first_publish_year ? info.first_publish_year : ''}</p>
                               <p class="card-text">Publisher : ${info.publisher ? info.publisher.slice(0, 20) : ''}</p>
                           </div>
                       </div>
                   `;
            divContainer.appendChild(div);
        });
    }
}

