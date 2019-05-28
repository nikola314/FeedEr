var categories = ["fish", "meat", "salad", "pasta", "pizza", "other"];

var flaticons = ["flaticon-002-fish", "flaticon-003-steak", "flaticon-007-salad", "flaticon-014-spaghetti", "flaticon-015-pizza", "flaticon-034-sandwich"];

var restaurants = [{
        "name": "Pivnica Brdo piva",
        "address": "Stevana Brakusa 5, 11000 Belgrade",
        "food": [
            "pizza", "meat", "fish"
        ],
        "description": "Your favourite place for good beer and even better grill",
        "location": "cukarica",
        "imageUrl": "images/brdo_piva.jpg",
        "timeToDeliver": 25,
        "latitude": 44.772826,
        "longitude": 20.412014
    },
    {
        "name": "Restaurant Maximilian",
        "address": "Beogradskog bataljona 4, 11000 Belgrade",
        "food": [
            "pizza", "meat", "fish", "pasta", "salad", "other"
        ],
        "stars": 4,
        "reviewCount": 8,
        "description": "Italian and national food",
        "location": "cukarica",
        "imageUrl": "images/maximilian.jpg",
        "timeToDeliver": 30,
        "latitude": 44.773852,
        "longitude": 20.416537
    },
    {
        "name": "Tribeca",
        "address": "Kralja Petra 20, 11000 Belgrade",
        "food": [
            "pizza", "meat", "fish", "salad"
        ],
        "stars": 3,
        "reviewCount": 3,
        "description": "Balcan national and international food",
        "location": "starigrad",
        "imageUrl": "images/tribeca.jpg",
        "timeToDeliver": 35,
        "latitude": 44.819469,
        "longitude": 20.454837
    },
    {
        "name": "HOT DOGZ",
        "address": "Kraljice Natalije 60, 11000 Belgrade",
        "food": [
            "meat"
        ],
        "stars": 5,
        "reviewCount": 10,
        "description": "The best hot dog in town!",
        "location": "starigrad",
        "imageUrl": "images/hotdogz.jpg",
        "timeToDeliver": 15,
        "latitude": 44.810077,
        "longitude": 20.460111
    },
    {
        "name": "NewYork NewYork",
        "address": "Krunska 86, 11000 Belgrade",
        "food": [
            "pizza", "meat", "fish", "salad", "pasta"
        ],
        "stars": 4,
        "reviewCount": 2,
        "description": "The most beautyful restaurant in the most beautyful street in Belgrade",
        "location": "vracar",
        "imageUrl": "images/newyork_newyork.jpg",
        "timeToDeliver": 45,
        "latitude": 44.802170,
        "longitude": 20.474303
    },
    {
        "name": "Voulez Vous",
        "address": "Djordja Vajferta 52, 11000 Belgrade",
        "food": [
            "pizza", "meat", "fish", "salad", "pasta", "other"
        ],
        "stars": 5,
        "reviewCount": 12,
        "description": "The most beautyful restaurant in Belgrade",
        "location": "vracar",
        "imageUrl": "images/voulez_vous.jpg",
        "timeToDeliver": 60,
        "latitude": 44.793640,
        "longitude": 20.475049
    },
    {
        "name": "Restoran Palilula",
        "address": "21 STARINE NOVAKA",
        "food": [
            "meat", "fish"
        ],
        "stars": 2,
        "reviewCount": 7,
        "description": "Traditional restaurant",
        "location": "palilula",
        "imageUrl": "images/restoran_palilula.jpg",
        "timeToDeliver": 25,
        "latitude": 44.810129,
        "longitude": 20.476717
    },
    {
        "name": "Lorenzo & Kakalamba",
        "address": "110 Cvijiceva",
        "food": [
            "pizza"
        ],
        "stars": 4,
        "reviewCount": 1,
        "description": "Late night food",
        "location": "palilula",
        "imageUrl": "images/lorenzo_kakalamba.jpg",
        "timeToDeliver": 42,
        "latitude": 44.809647,
        "longitude": 20.480388
    }
];

var meals = [{
        "name": "bolognese",
        "imageUrl": "images/bolognese.jpg",
        "price": 500
    },
    {
        "name": "carbonara",
        "imageUrl": "images/carbonara.jpg",
        "price": 450
    },
    {
        "name": "milanese",
        "imageUrl": "images/milanese.jpg",
        "price": 400
    },
    {
        "name": "capricciosa",
        "imageUrl": "images/capricciosa.jpg",
        "price": 600
    },
    {
        "name": "vesuvio",
        "imageUrl": "images/vesuvio.jpg",
        "price": 550
    },
    {
        "name": "margarita",
        "imageUrl": "images/margarita.jpg",
        "price": 450
    },
    {
        "name": "caesar_salad",
        "imageUrl": "images/caesar_salad.jpg",
        "price": 350
    },
    {
        "name": "greak_salad",
        "imageUrl": "images/greak_salad.jpg",
        "price": 300
    },
    {
        "name": "serbian_salad",
        "imageUrl": "images/serbian_salad.jpg",
        "price": 300
    },
    {
        "name": "chicken_nuggets",
        "imageUrl": "images/chicken_nuggets.jpg",
        "price": 500
    },
    {
        "name": "hotdog",
        "imageUrl": "images/hotdog.jpg",
        "price": 200
    },
    {
        "name": "pork_chop",
        "imageUrl": "images/pork_chop.jpg",
        "price": 800
    },
    {
        "name": "hake",
        "imageUrl": "images/hake.jpg",
        "price": 750
    },
    {
        "name": "salmon",
        "imageUrl": "images/salmon.jpg",
        "price": 1300
    },
    {
        "name": "smoked_crap",
        "imageUrl": "images/smoked_crap.jpg",
        "price": 1100
    },
    {
        "name": "sandwich",
        "imageUrl": "images/sandwich.jpg",
        "price": 150
    }
];

var brdoPivaMeals = [3, 11, 12, 13];
var maximilianMeals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var tribecaMeals = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var hotdogzMeals = [10, 15];
var newYorkNewYorkMeals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var voulezVousMeals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var palilulaMeals = [9, 10, 11, 12, 13, 14];
var lorenzoKakalambaMeals = [0, 1, 2];

// 
// KRAJ NIZOVA
// 

function removeElements(className) {
    var elements = document.getElementsByClassName(className);
    var length = elements.length;
    for (var i = 0; i < length; i++) {
        elements[0].remove();
    }
}

function renderElements(parentNode, elements, page) {
    for (i in elements) {
        parentNode.innerHTML += createRestaurantElementFromObject(elements[i], page);
    }
}


function filterRestaurants() {
    var search = document.getElementById("filterSearch");
    var location = document.getElementById("filterLocation");
    var category = document.getElementById("filterCategory");
    var sort = document.getElementById('filterSort');
    var timeToDeliver = document.getElementById('timeToDeliver');
    // remove all elements
    var parent = document.getElementById("parentNode");
    removeElements("removable");

    var elements = new Array();

    for (i in restaurants) {
        if (location.value != "unchecked") {
            if (restaurants[i].location != location.value) continue;
        }
        if (category.value != "unchecked") {
            if (restaurants[i].food.findIndex(function(param) { return param == category.value; }) == -1) continue;
        }
        if (search.value != "") {
            if (restaurants[i].name.toLowerCase().indexOf(search.value.toLowerCase()) < 0 &&
                restaurants[i].description.toLowerCase().indexOf(search.value.toLowerCase()) < 0 &&
                restaurants[i].address.toLowerCase().indexOf(search.value.toLowerCase())) continue;
        }
        if (timeToDeliver.value < restaurants[i].timeToDeliver) continue;
        elements.push(restaurants[i]);
    }
    // sort
    if (sort.value != "unchecked") {
        switch (sort.value) {
            case "reputation":
                elements.sort(function(a, b) { return b.stars - a.stars; });
                break;
            case "name":
                elements.sort(function(a, b) { return a.name.localeCompare(b.name); });
                break;
            case "address":
                elements.sort(function(a, b) { return a.address.localeCompare(b.address); });
                break;
        }
    }
    renderElements(parent, elements, "restaurants");
}

function populateFlaticons(index, isIndexPage) {
    var flaticonParent = document.getElementById("flaticonParentNode");
    removeElements("categoryRemovable");
    var flaticons = getFlaticons(index, isIndexPage);
    renderFlaticons(flaticonParent, flaticons);
}

function loadHome() {
    initializeRatings();
    populateFlaticons(-1, true);
}

function filterByCategory(index) {
    populateFlaticons(index, false);
    removeElements("removable");
    var elements = getAllRestaurantsFromCategory(categories[index]);
    var restaurantParent = document.getElementById("parentNode");
    renderElements(restaurantParent, elements, "order");
}

function redirectToOrder(categoryName) {
    localStorage.category = categoryName;
    window.location.replace('order.html');
}

function loadOrder() {
    if (localStorage.getItem("category") != null && localStorage.getItem("category") != undefined) {
        var cat = localStorage.category;
        var index = categories.findIndex(function(el) { return el == cat; });
        filterByCategory(index);
    }
}

// TODO: dupla sa render elements samo treba zameniti poziv render elementsa i proslediti mu vec formatiran niz
function renderFlaticons(parentNode, elements) {
    for (i in elements) {
        parentNode.innerHTML += elements[i];
    }
}

function getFlaticons(selectedIndex, isIndexPage) {
    var retArray = new Array();
    for (var i = 0; i < categories.length; i++) {
        var isSelected = false;
        if (i == selectedIndex) isSelected = true;
        retArray.push(createFlaticonCategoryElement(i, isSelected, isIndexPage));
    }
    return retArray;
}

function getAllRestaurantsFromCategory(category) {
    var retArray = new Array();
    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].food.findIndex(function(param) { return param == category; }) >= 0) {
            retArray.push(restaurants[i]);
        }
    }
    return retArray;
}

function createFlaticonCategoryElement(index, selected, isIndexPage) {
    var str = "";
    str += "<div class=\"col-sm-6 col-md-4 mb-lg-0 col-lg-2 categoryRemovable\">";
    if (isIndexPage) {
        str += "<a  onclick=\"redirectToOrder('";
        str += categories[index];
        str += "')\" class=\"popular-category h-100\"";
    } else {
        str += "<a  onclick=\"filterByCategory(";
        str += index;
        str += ")\" class=\"popular-category h-100\"";
    }

    if (selected) {
        str += "style=\"background: #30e3ca;-webkit-box-shadow: 0 5px 30px -5px rgba(48, 227, 202, 0.5);box-shadow: 0 5px 30px -5px rgba(48, 227, 202, 0.5);top: -10px;\""
    }
    str += "><span class=\"icon\"";
    if (selected) {
        str += "style=\"color: #fff;\"";
    }
    str += "><span class=\""
    str += flaticons[index];
    str += "\"></span></span><span class=\"caption mb-2 d-block\"";
    if (selected) {
        str += "style=\"color: #fff;\"";
    }
    str += ">";
    str += categories[index];
    str += "</span>";
    str += "<span class=\"number\"";
    if (selected) {
        str += "style=\"background: #1bc5ad;color: #fff;\"";
    }
    str += ">";
    str += numOfRestaurantsWith(index);
    str += "</span></a></div>";
    return str;
}

function numOfRestaurantsWith(category) {
    var count = 0;
    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].food.findIndex(function(param) { return param == categories[category]; }) >= 0) count++;
    }
    return count;
}

function redirectToRestaurant(restaurantName) {
    localStorage.currentRestaurant = restaurantName;
    window.location.replace('restaurant.html')
}



function redirectToMenu(restaurantName) {
    localStorage.currentRestaurant = restaurantName;
    window.location.replace('restaurantMenu.html');
}

function getRestaurantElementDivRow(page) {
    if (page == "restaurants") {
        return "<div class=\"col-lg-6 removable\">";
    } else {
        return "<div class=\"col-lg-4 removable\">";
    }
}

function getRestaurantRedirectString(object, page) {
    if (page == "order") {
        return "redirectToMenu('" + object.name + "')";
    } else {
        return "redirectToRestaurant('" + object.name + "')";
    }
}

function createRestaurantElementFromObject(object, page) {
    var str = getRestaurantElementDivRow(page);
    str += "<div class=\"d-block d-md-flex listing vertical\">";
    str += "<div class=\"d-block d-md-flex listing vertical\">";
    str += "<a href=\"#\" onClick=\"";
    str += getRestaurantRedirectString(object, page);
    str += "\" class=\"img d-block\" style=\"background-image: url('" + object.imageUrl + "')\"></a>";
    str += "<div class=\"lh-content\">";
    for (i in object.food) {
        str += "<span class=\"category\">" + object.food[i] + "</span> ";
    }
    str += "<a href=\"#\" class=\"bookmark\"><span class=\"icon-heart\"></span></a>";
    str += "<h3><a href=\"#\" onclick=\"";
    str += getRestaurantRedirectString(object, page);
    str += ";return false;\">" + object.name + "</a></h3>";
    str += "<address>" + object.address + "</address>";
    str += "<p class=\"mb-0\">";
    for (var i = 1; i <= 5; i++) {
        if (hasAStar(object, i)) {
            str += "<span class=\"icon-star text-warning\"></span>";
        } else {
            str += "<span class=\"icon-star text-secondary\"></span>";
        }
    }
    str += "<span class=\"review\">(" + getReviewCnt(object) + " Reviews)</span></p></div></div></div>";
    return str;
}

function hasAStar(restaurant, star) {
    var string = localStorage.getItem(restaurant.name);
    var split = string.split(',');
    var currentRating = parseFloat(split[0]);
    if (Math.round(currentRating) >= star) return true;
    else return false;
}

function populate() {
    var parent = document.getElementById("parentNode");
    var searched = false;
    var location = "";
    var category = "";
    if (localStorage.getItem("searchedFromIndex") != null && localStorage.getItem("searchedFromIndex") != "null") {
        searched = true;
        location = localStorage.searchLocation;
        category = localStorage.searchCategory;
    }
    for (var i = 0; i < restaurants.length; i++) {
        var ok = true;
        if (searched) {
            if (restaurants[i].location != location && location != "") ok = false;
            if (restaurants[i].food.findIndex(function(a) { return a == category; }) == -1 && category != "") ok = false;
        }
        if (ok) {
            parent.innerHTML += createRestaurantElementFromObject(restaurants[i], "restaurants");
        }
    }
    localStorage.removeItem("searchedFromIndex");
}

function loadRestaurant() {

    var currentRestaurantName = localStorage.getItem("currentRestaurant");
    if (currentRestaurantName == null) {
        window.location.replace("index.html");
    } else {
        var currentRestaurant = null;
        for (i in restaurants) {
            if (restaurants[i].name == currentRestaurantName) {
                currentRestaurant = restaurants[i];
            }
        }
        if (currentRestaurant == null) {
            window.location.replace("index.html");
        } else {
            var image = document.getElementById('image');
            var nameElement = document.getElementById('nameElement');
            var addressElement = document.getElementById('addressElement');
            var foodElement = document.getElementById('foodElement');
            var descriptionElement = document.getElementById('descriptionElement');
            var ratingElement = document.getElementById('ratingElement');

            nameElement.innerHTML = currentRestaurant.name + "<hr>";
            addressElement.innerHTML = currentRestaurant.address + "<br>";
            for (i in currentRestaurant.food) {
                foodElement.innerHTML += currentRestaurant.food[i] + " ";
            }
            foodElement.innerHTML += "<br>";
            descriptionElement.innerHTML = currentRestaurant.description + "<br>";

            for (var i = 1; i <= 5; i++) {
                if (hasAStar(currentRestaurant, i)) {
                    ratingElement.innerHTML += "<h3 class=\"d-inline\"><span class=\"icon-star text-warning\"></span></h3>";
                } else {
                    ratingElement.innerHTML += "<h3 class=\"d-inline\"><span class=\"icon-star text-secondary\"></span></h3>";
                }
            }
            image.style = "background-image: url('" + currentRestaurant.imageUrl + "');";

            for (var i = 1; i <= 4; i++) {
                document.getElementById("img" + i).src = "images/gallery/" + currentRestaurant.name + "/" + i + ".jpg";
            }

            initMap(currentRestaurant.latitude, currentRestaurant.longitude);
        }
    }

}

function initMap(latitude, longitude) {
    if (latitude == null || longitude == null) {
        latitude = 44.787197;
        longitude = 20.457273;
    }
    var myLatLng = { lat: latitude, lng: longitude };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

function ratingClick(rating) {
    var currentRestaurantName = localStorage.getItem("currentRestaurant");
    if (currentRestaurantName == null) {
        window.location.replace("index.html");
    } else {
        var string = localStorage.getItem(currentRestaurantName);
        var split = string.split(',');
        var currentRating = parseFloat(split[0]);
        var ratingCount = parseInt(split[1]);
        var newRating = ((currentRating * ratingCount) + rating) / (ratingCount + 1);
        ratingCount++;
        localStorage.setItem(currentRestaurantName, newRating + "," + ratingCount);
    }

    location.reload();
    alert("Thanks for voting!");
}

function ratingHover(rating) {
    for (var i = 1; i <= rating; i++) {
        var starElement = document.getElementById('star' + i);
        starElement.className = "icon-star text-warning";
    }
    for (var i = rating + 1; i <= 5; i++) {
        var starElement = document.getElementById('star' + i);
        starElement.className = "icon-star text-secondary";
    }
}

function initializeRatings() {
    var defined = localStorage.getItem("ratingDefined");
    if (defined == null || defined == undefined) {
        localStorage.setItem("Pivnica Brdo piva", "5,6");
        localStorage.setItem("Restaurant Maximilian", "4,8");
        localStorage.setItem("Tribeca", "3,3");
        localStorage.setItem("HOT DOGZ", "5,10");
        localStorage.setItem("NewYork NewYork", "4,2");
        localStorage.setItem("Voulez Vous", "5,12");
        localStorage.setItem("Restoran Palilula", "2,7");
        localStorage.setItem("Lorenzo & Kakalamba", "4,1");

        localStorage.setItem("ratingDefined", true);
    }
}

function getReviewCnt(restaurant) {
    var string = localStorage.getItem(restaurant.name);
    var split = string.split(',');
    return parseInt(split[1]);
}

function loadMyOrders() {
    var parent = document.getElementById("myOrdersParentNode");
    removeElements("myOrder");
    parent.innerHTML += getMyOrdersElements();
}

function getMyOrdersElements() {
    var str = "";
    var orders = localStorage.getItem("orders");
    if (orders == null) return str;

    var splitted = orders.split(",");
    var cnt = 0;
    var total = 0;
    var i = 1;
    while (cnt < splitted.length) {
        var name = splitted[cnt++];
        var meal = splitted[cnt++];
        var price = splitted[cnt++];
        str += "<div class=\"border p-3 rounded mb-2 myOrder\"><a data-toggle=\"collapse\" href=\"#collapse-" + i + "\" role=\"button\" aria-expanded=\"false\" <!-- aria-controls=\"collapse-1\" class=\"accordion-item h5 d-block mb-0\">";
        str += meal;
        str += "</a><div class=\"collapse\" id=\"collapse-" + i + "\"><div class=\"pt-2\"><p class=\"mb-0\">";
        str += "<hr/>From: ";
        str += name;
        str += "<hr/>Price: ";
        str += price;
        str += "</p></div></div></div>";
        total += parseInt(price, 10);
        i++;
    }
    str += "<div class=\"border p-3 rounded mb-2 myOrder\"><a data-toggle=\"collapse\" href=\"#collapse-" + i + "\" role=\"button\" aria-expanded=\"false\" <!-- aria-controls=\"collapse-1\" class=\"accordion-item h5 d-block mb-0\">";
    str += "TOTAL:";
    str += "</a><div class=\"collapse\" id=\"collapse-" + i + "\"><div class=\"pt-2\"><p class=\"mb-0\">";
    str += total;
    str += "</p></div></div></div>";
    return str;
}

function searchRestaurants() {
    var location = document.getElementById("searchLocation").value;
    var category = document.getElementById("searchCategory").value;
    localStorage.setItem("searchLocation", location);
    localStorage.setItem("searchCategory", category);
    localStorage.searchedFromIndex = true;
    window.location.replace('restaurants.html');
}

function redirectToRestaurantsFiltered(location) {
    localStorage.setItem("searchLocation", location);
    localStorage.setItem("searchCategory", "");
    localStorage.searchedFromIndex = true;
    window.location.replace('restaurants.html');
}

// menjao 3
function loadRestaurantMenu() {

    var currentRestaurantName = localStorage.getItem("currentRestaurant");
    if (currentRestaurantName == null) {
        window.location.replace("index.html");
    } else {
        var currentRestaurant = null;
        for (i in restaurants) {
            if (restaurants[i].name == currentRestaurantName) {
                currentRestaurant = restaurants[i];
            }
        }
        if (currentRestaurant == null) {
            window.location.replace("index.html");
        } else {
            var image = document.getElementById('image');
            var nameElement = document.getElementById('nameElement');
            var addressElement = document.getElementById('addressElement');
            var foodElement = document.getElementById('foodElement');
            var descriptionElement = document.getElementById('descriptionElement');
            var ratingElement = document.getElementById('ratingElement');

            nameElement.innerHTML = currentRestaurant.name + "<hr>";
            addressElement.innerHTML = currentRestaurant.address + "<br>";
            for (i in currentRestaurant.food) {
                foodElement.innerHTML += currentRestaurant.food[i] + " ";
            }
            foodElement.innerHTML += "<br>";
            descriptionElement.innerHTML = currentRestaurant.description + "<br>";

            for (var i = 1; i <= 5; i++) {
                if (hasAStar(currentRestaurant, i)) {
                    ratingElement.innerHTML += "<h3 class=\"d-inline\"><span class=\"icon-star text-warning\"></span></h3>";
                } else {
                    ratingElement.innerHTML += "<h3 class=\"d-inline\"><span class=\"icon-star text-secondary\"></span></h3>";
                }
            }
            image.style = "background-image: url('" + currentRestaurant.imageUrl + "');";
        }
    }

    var myMeals = new Array();
    var intArray = getMealArray(currentRestaurantName);
    for (i in intArray) {
        myMeals.push(meals[intArray[i]]);
    }

    var menuContainer = document.getElementById('menuContainer');
    for (i in myMeals) {
        menuContainer.innerHTML += createMenuItem(myMeals[i]);
    }

}

function createMenuItem(meal) {
    var result = "";
    result += "<div style=\"max-height : 200px;\" class=\"col-lg-4 col-md-6 mb-4 mb-lg-4 col-sm-12\">";
    result += "<div class=\"listing-item \">"
    result += "<div class=\"listing-image\">";
    result += "<img style=\"max-height : 200px;\" src=\"" + meal.imageUrl + "\" alt=\"Image \" class=\"img-fluid \"></div>";
    result += "<div class=\"listing-item-content \">";
    result += "<a  onclick=\"addToOrder('" + meal.name + "'," + meal.price + ")\"  class=\"bookmark \" data-toggle=\"tooltip \" data-placement=\"left \" title=\"Order this item \"><span class=\"icon-star \"></span></a>";
    result += "<a class=\"px-3 mb-3 category \" >" + meal.price + " RSD</a>";
    result += "<h2 class=\"mb-1 \"><a href=\"# \">" + meal.name + "</a></h2></div></div></div>";

    return result;
}

function addToOrder(name, price) {
    var orders = localStorage.getItem("orders");
    var string = "";
    if (orders != null) string += ",";
    var currentRestaurantName = localStorage.getItem("currentRestaurant");
    string += currentRestaurantName + "," + name + "," + price;
    if (orders == null) orders = string;
    else orders += string;
    localStorage.setItem("orders", orders);

    alert("Order successful " + name + " " + price + "RSD");
}

function getMealArray(currentRestaurantName) {
    if (currentRestaurantName == "Pivnica Brdo piva") return brdoPivaMeals;
    if (currentRestaurantName == "Restaurant Maximilian") return maximilianMeals;
    if (currentRestaurantName == "Tribeca") return tribecaMeals;
    if (currentRestaurantName == "HOT DOGZ") return hotdogzMeals;
    if (currentRestaurantName == "NewYork NewYork") return newYorkNewYorkMeals;
    if (currentRestaurantName == "Voulez Vous") return voulezVousMeals;
    if (currentRestaurantName == "Restoran Palilula") return palilulaMeals;
    if (currentRestaurantName == "Lorenzo & Kakalamba") return lorenzoKakalambaMeals;

    return null;
}