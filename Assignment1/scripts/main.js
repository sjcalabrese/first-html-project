var counter = localStorage.getItem('counter');
counter++;

function registerUser() {

    var currentUser = {
        userName: document.getElementById('usrname').value,
        passWord: document.getElementById('pswrd').value,
        fName: document.getElementById('fname').value,
        lName: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zip').value,
        email: document.getElementById("email").value
    }
    //localStorage.clear();
    if (currentUser.userName != "") {
        var counter = localStorage.getItem('counter');
        counter++;


        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("user" + counter, JSON.stringify(currentUser));
            console.log("here...");
            localStorage.setItem("counter", counter)
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}

function userInfo() {
    console.log("In user profile page")
    if (localStorage.getItem("user4") !== null) {
        user4 = JSON.parse(localStorage.getItem("user4"));
    }
    document.getElementById("firstName").innerHTML = user4.fName;
    document.getElementById("lastName").innerHTML = user4.lName;
    document.getElementById("address").innerHTML = user4.address;
    document.getElementById("city").innerHTML = user4.city;
    document.getElementById("state").innerHTML = user4.state;
    document.getElementById("zip").innerHTML = user4.zipCode;
    document.getElementById("email").innerHTML = user4.email;
}

function addProduct(thisItem) {
    //var products[];
    if (thisItem.id == "dodgeCar") {
        if (localStorage.getItem("dodgeCar") == null) {
            localStorage.setItem("dodgeCar", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('dodgeCar')) + 1
            localStorage.setItem("dodgeCar", newVal.toString());
        }
    }//dodgeCar
    if (thisItem.id == "dodgeTruck") {
        if (localStorage.getItem("dodgeTruck") == null) {
            localStorage.setItem("dodgeTruck", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('dodgeTruck')) + 1
            localStorage.setItem("dodgeTruck", newVal.toString());
        }
    }//dodgeTruck
    if (thisItem.id == "dodgeSuv") {
        if (localStorage.getItem("dodgeSuv") == null) {
            localStorage.setItem("dodgeSuv", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('dodgeSuv')) + 1
            localStorage.setItem("dodgeSuv", newVal.toString());
        }
    }//dodgeSuv
    if (thisItem.id == "dodgeVan") {
        if (localStorage.getItem("dodgeVan") == null) {
            localStorage.setItem("dodgeVan", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('dodgeVan')) + 1
            localStorage.setItem("dodgeVan", newVal.toString());
        }
    }//dodgeVan
    if (thisItem.id == "chevyCar") {
        if (localStorage.getItem("chevyCar") == null) {
            localStorage.setItem("chevyCar", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('chevyCar')) + 1
            localStorage.setItem("chevyCar", newVal.toString());
        }
    }//chevyCar
    if (thisItem.id == "chevyTruck") {
        if (localStorage.getItem("chevyTruck") == null) {
            localStorage.setItem("chevyTruck", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('chevyTruck')) + 1
            localStorage.setItem("chevyTruck", newVal.toString());
        }
    }//chevyTruck
    if (thisItem.id == "chevySuv") {
        if (localStorage.getItem("chevySuv") == null) {
            localStorage.setItem("chevySuv", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('chevySuv')) + 1
            localStorage.setItem("chevySuv", newVal.toString());
        }
    }//chevySuv
    if (thisItem.id == "chevyVan") {
        if (localStorage.getItem("chevyVan") == null) {
            localStorage.setItem("chevyVan", "1")
        } else {
            var newVal = parseInt(localStorage.getItem('chevyVan')) + 1
            localStorage.setItem("chevyVan", newVal.toString());
        }
    }//chevyVan
}
function shoppingCart() {
    //document.getElementById('products').style.display = "none";
    if (localStorage.getItem("dodgeCar") != null) {
        updateQty();
    }
}

function removeProduct(thisProduct){
    if (thisProduct.id == "dodgeCar") {
        if (localStorage.getItem("dodgeCar") != null && localStorage.getItem("dodgeCar") > 0 ) {
            var newVal = parseInt(localStorage.getItem("dodgeCar")) - 1;
            localStorage.setItem("dodgeCar", newVal.toString());
            updateQty();
        }
    }//dodgeCar
    if (thisProduct.id == "dodgeTruck") {
        if (localStorage.getItem("dodgeTruck") != null && localStorage.getItem("dodgeTruck") > 0 ) {
            var newVal = parseInt(localStorage.getItem("dodgeTruck")) - 1;
            localStorage.setItem("dodgeTruck", newVal.toString());
            updateQty();
        }
    }//dodgeTruck
}
function updateQty(){
    document.getElementById("dodgeCarQty").innerHTML = Number(localStorage.getItem("dodgeCar"));
    document.getElementById("dodgeTruckQty").innerHTML = Number(localStorage.getItem("dodgeTruck"));
    
}