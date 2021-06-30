const form = document.getElementById("search")

form.addEventListener('submit', function(e){

    e.preventDefault()

    const search = document.getElementById("search").value 

    alert(search)
})