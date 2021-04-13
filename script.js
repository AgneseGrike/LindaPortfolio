function revealEmail() {
    var button = document.getElementsByClassName("reveal")[0];
    button.style.display = "none";
    document.getElementById("email").innerHTML = "placeholder@email.com"
}

function openThumbnailDish(element_id) {
    var x = document.getElementsByClassName("thumbnail-open")[0];
    if(x.style.display=="none" || x.style.display=="") {
        x.style.display = "block";
    }
    else {          
       x.style.display = "none";
    }
}

var descriptionPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

var gallery = [
    ["Dish", "glass", 2020, descriptionPlaceholder, "images/thumbnails/dish_min.jpg"],
    ["Twin towers", "glass", 2020, descriptionPlaceholder, "images/thumbnails/twin_towers_min.jpg"],
    ["Crosspoint", "glass", 2019, descriptionPlaceholder, "images/thumbnails/crosspoint_min.jpg"],
    ["Morning dew", "glass", 2019, descriptionPlaceholder, "images/thumbnails/morning_dew_min.jpg"],
    ["Hands is power", "glass", 2019, descriptionPlaceholder, "images/thumbnails/hands_power_min.jpg"],
    ["Sadness", "photography", 2019, descriptionPlaceholder, "images/thumbnails/sadness_min.jpg"],
    ["Sail", "glass", 2018, descriptionPlaceholder, "images/thumbnails/sail_min.jpg"],
    ["Sanity", "glass", 2018, descriptionPlaceholder, "images/thumbnails/sanity_min.jpg"],
    ["Caryatide", "glass", 2018, descriptionPlaceholder, "images/thumbnails/caryatide-min.jpg"],
    ["Design isle", "environmental", 2017, descriptionPlaceholder, "images/thumbnails/design_isle_min.jpg"],
    ["Jewlery", "glass", 2017, descriptionPlaceholder, "images/thumbnails/jewelry_min.jpg"],
    ["Snake", "glass", 2017, descriptionPlaceholder, "images/thumbnails/snake_min.jpg"],
    ["Still life", "photography", 2016, descriptionPlaceholder, "images/thumbnails/still_life_min.jpg"],
    ["Torņkalns", "glass", 2016, descriptionPlaceholder, "images/thumbnails/tornkalns_min.jpg"],
    ["Wind", "photography", 2016, descriptionPlaceholder, "images/thumbnails/wind_min.jpg"],
]

function populateGallery (galleryArr) {
    // Removes the previous gallery view if it exists
    if (document.getElementsByClassName("gallery-row").length > 0) {
        document.getElementsByClassName("gallery-row")[0].remove();
    }

    // Gallery Wrapper
    var galleryWrapper = document.createElement("div");
    galleryWrapper.className = "row gallery-row"
    galleryWrapper.id = "gallery-row"
    document.getElementsByClassName("filter-row")[0].appendChild(galleryWrapper);
    
    var galleryItems = galleryArr.length;

    // Empty array message
    if (galleryItems == 0) {
        var emptyArr = document.createElement("div");
        emptyArr.className = "empty-array";
        emptyArr.innerHTML = "Nothing here yet...";
        document.getElementsByClassName("gallery-row")[0].appendChild(emptyArr);
    }

    // The rows of the gallery
    var galleryRow;
    for (galleryRow = 0; galleryRow < Math.ceil(galleryItems/4); galleryRow++) {
        
        var row = document.createElement("div");
        row.className = "row gallery-row";
        document.getElementById("gallery-row").appendChild(row);

        var galleryCollumn;
        for (galleryCollumn = 0; galleryCollumn < 4; galleryCollumn++) {
            var arrayElement = ((galleryRow+1)*4)-(4-galleryCollumn);
            if (galleryArr[arrayElement]) {
                var imgContainer = document.createElement("div");
                if (galleryCollumn == 0) {
                    imgContainer.className = "col-md-2 col-sm-6 img-container col-md-offset-2 img-container";
                }
                else {
                    imgContainer.className = "col-md-2 col-sm-6 img-container";
                }
                imgContainer.id = "element"+arrayElement;
                document.getElementsByClassName("gallery-row")[0].appendChild(imgContainer);             

                var image = document.createElement("img");
                image.className = "image";
                image.src = galleryArr[arrayElement][4];
                document.getElementById("element"+arrayElement).appendChild(image);
               
                var overlay = document.createElement("div");
                overlay.className = "overlay";
                overlay.id = "overlay"+arrayElement;
                document.getElementById("element"+arrayElement).appendChild(overlay);

                var text = document.createElement("div");
                text.className = "text";
                text.innerHTML = galleryArr[arrayElement][0].toString();
                document.getElementById("overlay"+arrayElement).appendChild(text);
                
            }
        }
    }
}

function testFunc() {
    var row = document.createElement("div");
    row.className = "row gallery-row";
    document.getElementsByClassName("filter-row")[0].appendChild(row);

    var imgContainer = document.createElement("div");
    imgContainer.className = "col-md-2 col-sm-6 img-container col-md-offset-2 img-container";
    document.getElementsByClassName("gallery-row")[0].appendChild(imgContainer);

    var image = document.createElement("img");
    image.className = "image";
    image.src = gallery[0][4];
    document.getElementsByClassName("img-container")[0].appendChild(image);

    var overlay = document.createElement("div");
    overlay.className = "overlay";
    document.getElementsByClassName("img-container")[0].appendChild(overlay);

    var text = document.createElement("div");
    text.className = "text";
    text.innerHTML = gallery[0][0].toString();
    document.getElementsByClassName("overlay")[0].appendChild(text);
}

function mediaFilter(mediaType) {
    var filteredArr = gallery.filter( function (media){
        return media[1] === mediaType; 
    })
    populateGallery(filteredArr);    
}

function yearFilter(year) {
    var filteredArr = gallery.filter( function (media){
        return media[2] === year; 
    })
    populateGallery(filteredArr);    
}


