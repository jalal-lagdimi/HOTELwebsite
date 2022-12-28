var number = document.getElementById("nombre");
var fields = document.getElementById("donnee-amis");


number.addEventListener('input', function() {
    console.log("f fg fg");
    let i = 0;

    if (number.value !== "") {
        fields.innerHTML = "";
        while(i < number.value){
        fields.innerHTML +=
        `
        <div class="form-floating mb-3">
        <input class="form-control" type="text"/>
        <label for="phone">prénom</label>
        </div>
    
        <div class="form-floating mb-3">
            <input class="form-control" type="text"/>
            <label for="phone">nom</label>
        </div>
    
        <div class="form-floating mb-3">
            <input class="form-control" type="date"/>
            <label for="phone">date de naissance</label>
        </div>
        <hr>`
        
        i++
        } 
    } else {
        fields.innerHTML = "";
    }
});