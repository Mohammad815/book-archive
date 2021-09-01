document.getElementById('search-button').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value ='';
    console.log(searchText)
})