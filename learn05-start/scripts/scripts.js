// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};
const dog2 = {
    heading: "Philosophical Dog",
    image: "images/gold-dog.jpg",
    caption: "Chilling outside and pondering",
    altTag: "Golden dog enjoying his time outside."
};
const dog3 = {
    heading: "2 Dogs on a Beach",
    image: "images/white-dogs.jpg",
    caption: "Enjoying the beach together",
    altTag: "2 Dogs on a beach."
};
const dog4 = {
    heading: "Dog building a Snowman",
    image: "images/snow-dog.jpg",
    caption: "What a joy it is to build a snowman",
    altTag: "Snowman building time."
};
function chooseDog(dog) {
    if (dog == 1) {
    loadMe(dog1, 1) // don't put dog1 in quotes or it will pass a string not the object
    } else if (dog == 2) {
        loadMe(dog2, 2)
    } else if (dog == 3) {
        loadMe(dog3, 3)
    } else if (dog == 4) {
        loadMe(dog4, 4)
    } 
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}
    