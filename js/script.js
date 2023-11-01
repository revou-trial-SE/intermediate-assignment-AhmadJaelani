// Slide Show 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = imgList.length;
    }

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(function () {
    plusDivs(1);
}, 1000)



// button 

function change()
{
    var elem = document.getElementById("myButton1");
    if (elem.value == "Don't you dare!") elem.value = "Told You!";
    else elem.value = "Don't you dare!";
}

const modeToggleButton = document.getElementById("myButton1");
const body = document.body;

modeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// nav color 

const colorButton = document.getElementById("myButton1");
const header = document.querySelector("nav");

let colorIndex = 0;
const colors = ["#ffa500", "#64b5f6"];

colorButton.addEventListener("click", () => {
    header.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// change logo 
const logo = document.getElementById("logo");
const navText = document.getElementById("navText");
const logoChangeButton = document.getElementById("myButton1");

let isChanged = false;

logoChangeButton.addEventListener("click", () => {
    if (isChanged) {
        logo.src = "gambar/Bootstrap_logo.svg.png";
        navText.textContent = "Bootstrap";
    } else {
        logo.src = "gambar/spooky.png";
        navText.textContent = "Spooky Scary Skeleton";
    }

    isChanged = !isChanged;
});


// sound 
const toggleButton = document.getElementById("myButton1");
const gifContainer = document.getElementById("gifContainer");
const gif = document.getElementById("gif");
const gif2 = document.getElementById("gif2");
const gif3 = document.getElementById("gif3");
const audioPlayer = document.getElementById("audioPlayer");

let isPlaying = false;
let isGifPlaying = false;
let isMusicPlaying = false;

let timer;

toggleButton.addEventListener("click", () => {
    if (isPlaying) {
        clearInterval(timer);
        gif.style.display = "none";
        gif2.style.display = "none";
        gif3.style.display = "none";
        gifContainer.style.display = "none";
        audioPlayer.pause();
        toggleButton.textContent = "Don't you dare!";
    } else {
        gif.style.display = "block";
        gif2.style.display = "block";
        gif3.style.display = "block";
        gifContainer.style.display = "block";
        audioPlayer.play();
        toggleButton.textContent = "Told You!";
        timer = setTimeout(() => {
            gif.style.display = "none";
            gif2.style.display = "none";
            gif3.style.display = "none";
            gifContainer.style.display = "none";
            audioPlayer.pause();
            toggleButton.textContent = "Don't you dare!";
        }, 25000);
    }
    isPlaying = !isPlaying;
    isGifPlaying = !isGifPlaying;
    isMusicPlaying = !isMusicPlaying;
});

// card cat
const catText = document.getElementById("catcardText");
const catImage = document.getElementById("catImage");
const catButton = document.getElementById("catButton");

const contentOptions1 = [{
        text: "Cats have 32 muscles in each ear.",
        image: "gambar/cat1.jpg"
    },
    {
        text: "Cats have 4 rows of whiskers.",
        image: "gambar/cat2.jpg"
    },
    {
        text: "Cats have no collarbone, which is one reason they are so flexible.",
        image: "gambar/cat3.jpg"
    },
    {
        text: "Cats have over one hundred vocal sounds, while dogs have about ten!.",
        image: "gambar/cat4.jpg"
    },
    {
        text: "Cat whiskers are so sensitive they can detect the slightest change in air current.",
        image: "gambar/cat5.gif"
    }
];

let currentIndex1 = 0;

catButton.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % contentOptions1.length;

    catText.textContent = contentOptions1[currentIndex1].text;
    catImage.src = contentOptions1[currentIndex1].image;
});

// card fun
const funText = document.getElementById("funText");
const funImage = document.getElementById("funImage");
const funButton = document.getElementById("funButton");

const contentOptions2 = [{
        text: "The Eiffel Tower can be 15 cm taller during the summer.",
        image: "gambar/fun1.jpg"
    },
    {
        text: "Australia is wider than the moon.",
        image: "gambar/fun2.jpg"
    },
    {
        text: "Human teeth are the only part of the body that cannot heal themselves.",
        image: "gambar/fun3.jpg"
    },
    {
        text: "The real name for a hashtag is an octothorpe.",
        image: "gambar/fun4.jpg"
    },
    {
        text: "Ketchup was once sold as medicine.",
        image: "gambar/fun5.jpg"
    }
];

let currentIndex2 = 0;

funButton.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % contentOptions2.length;

    funText.textContent = contentOptions2[currentIndex2].text;
    funImage.src = contentOptions2[currentIndex2].image;
});


// card vegetable
const vegText = document.getElementById("vegText");
const vegImage = document.getElementById("vegImage");
const vegButton = document.getElementById("vegButton");

const contentOptions3 = [{
        text: "Cucumbers are one of the only veggies you can't cook, and always eat raw.",
        image: "gambar/veg1.jpg"
    },
    {
        text: "Kale has more vitamin C than oranges.",
        image: "gambar/veg2.jpg"
    },
    {
        text: "Broccoli, cauliflower, Brussels sprouts, cabbage, gai lan, collards, kale, kohlrabi, romanesco, and broccolini are all cultivars of the same plant.",
        image: "gambar/veg3.jpg"
    },
    {
        text: "The world's largest bean pods can grow up to 5 feet long.",
        image: "gambar/veg4.jpg"
    },
    {
        text: "A grapefruit is also a weapon if you throw it hard enough.",
        image: "gambar/veg5.jpg"
    }
];

let currentIndex3 = 0;

vegButton.addEventListener("click", () => {
    currentIndex3 = (currentIndex3 + 1) % contentOptions3.length;

    vegText.textContent = contentOptions3[currentIndex3].text;
    vegImage.src = contentOptions3[currentIndex3].image;
});

// locked section 

const coverContent = document.getElementById("coverContent");
const revealedContent = document.getElementById("revealedContent");
const continueButton = document.getElementById("continueButton");

continueButton.addEventListener("click", () => {
    coverContent.style.display = "none";
    revealedContent.style.display = "block";
});