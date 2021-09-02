const errorDiv = document.getElementById('error');
const totalLength = document.getElementById('total-length');
document.getElementById('search-button').addEventListener('click',function(){
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value ='';

  if(searchText === ''){
    errorDiv.innerText ='Please Write Somthing'
  }
  else{
    //  Loaa Data 
     const url = `https://openlibrary.org/search.json?q=${searchText}`;
     fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
  }

    // Show the Result
})
const displaySearchResult = data =>{
  if(data.length === 0){
    errorDiv.innerText = 'No result found'
  }
  else{
    errorDiv.innerText='';
  }
  
  const row = document.getElementById('row');
  totalLength.innerText = `Total Book Found : ${data.length}`
  row.textContent = '';
  data.forEach(data =>{
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
      <div class="card h-100">
        <div class="card-body">
          <img src="https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg" class="card-img-top" alt="...">
          <h1 class="card-title">Book Name :  ${data.title}</h1>
          <h5>Author Name: ${data.author_name}</h5>
          <h5>First Published Date :  ${data.first_publish_year}</h5>
          <h5 class="card-title">Publisher :  ${data.publisher}</h5>
        </div>
      </div>
        `
    row.appendChild(div);
    });
}