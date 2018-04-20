window.onload = function() {
    var form = document.getElementById("Form");
    var petName = document.getElementById("petName");
    var petType = document.getElementById("petType");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var description = document.getElementById("description");
    var legs = document.getElementsByClassName("legs");
    var special = document.getElementsByClassName('special');
    var obj = {};
    form.addEventListener("submit", function(event){
        event.preventDefault();
        obj.name = petName.value;
        obj.petType = petType.value;
        obj.email = email.value;
        obj.password = password.value;
        obj.description = description.value;
        for(let i = 0 ; i < legs.length ; i++){
            if (legs[i].checked === true){
                obj.legs = legs[i].value;
            }
        }
        for(let i = 0 ; i < special.length ; i++){
            if (special[i].checked === true){
                obj.special = special[i].value;
            }
        }

        console.log(obj);
    });
};