const errorDiv = document.getElementById('error');

document.getElementById('search-button').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value ='';

  if(searchText === ''){
    errorDiv.innerText ='Please Write Somthing'
  }
  else{
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
  }

    //console.log(searchText)
})
const displaySearchResult = data =>{
  if(data.length == 0){
    errorDiv.innerText = 'Please Write your correct book name'
  }
  else{
    errorDiv.innerText='';
  }
    //console.log(data)
    const row = document.getElementById('row');
    //console.log(data);
    data.forEach(data =>{
        console.log(data);
        /* 
        <img src="..." class="card-img-top" alt="...">
        */
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
            <div class="card-body">
            <img src="https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg" class="card-img-top" alt="...">
            <h1 class="card-title">Subject Name :  ${data.title}</h1>
              <h5 class="card-title">Author Name: ${data.author_name}</h5>
              <h5 class="card-title">First Published Date :  ${data.first_publish_year}</h5>
              <p class="card-text">This is a longer.</p>
            </div>
          </div>
        `
        row.appendChild(div);

   
    });
}