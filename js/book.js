// console.log('book is on');

// show book Informations
const url = `http://openlibrary.org/search.json?q=javascript`;
fetch(url)
    .then(res => res.json())
    .then(data => displayBookInfo(data.docs));

const displayBookInfo = infos => {
    const divContainer = document.getElementById('book-info');
    infos.forEach(info => {
        console.log(info);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                   <div class="card h-100">
                       <img src="..." class="card-img-top" alt="...">
                       <div class="card-body">
                           <h5 class="card-title">Book Name:${info.title}</h5>
                           <h6 class="card-title"> Author:${info?.author_name[0]}</h6>
                           <p class="card-text">Publish Year:${info.publish_year[0]}</p>
                           <p class="card-text">First Publish:${info.publish_date[0]}</p>
                           <p class="card-text">Publisher:${info.publisher[0]}</p>
                       </div>
                   </div>
               `;
        divContainer.appendChild(div);
    });
}
displayBookInfo();
