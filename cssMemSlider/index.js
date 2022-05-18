alert("Добрый день. я немного неверно поняла задание и засабмитила не ту ссылку, очень большая просьба перейти в консоль, там лежит верная ссылка на пул реквест. Спасибо!")

const mems = [
    {
        img: "/cssMemSlider/cssMemSlider/assets/img/kot-nyashka.jpg",
        text: "I'm pretty!",
    },
    {
        img: "/cssMemSlider/cssMemSlider/assets/img/memes_5e789b1ba22bb.jpg",
        text: "When you find out your lifestyle is actually called 'quarantine'",
    },
    {
        img: "/cssMemSlider/cssMemSlider/assets/img/square_320_31a9a88f188c78edd7005767e422db1f.jpg",
        text: "Meow!",
    },
    {
        img: "/cssMemSlider/cssMemSlider/assets/img/120684793.jpg",
        text: "True story!",
    },
];

const sliderItems = document.querySelector(".slider-items");
const sliderControls = document.querySelector(".slider-controls");

createItems(mems);

function createItems(arr) {
    arr.forEach((element, ind) => {
        let item = document.createElement("div");
        item.classList.add("slider-item");
        if (ind === 0) {
           item.classList.add("open");
        }
        item.id = `sliderItem-${ind}`;
        let image = document.createElement("div");
        image.style.backgroundImage = `url(${element.img})`;
        image.classList.add("slider-image");
        item.innerHTML = `<p>${element.text}</p>`;
        item.prepend(image);
        sliderItems.append(item);
        let button = document.createElement("input");
        button.classList.add("slider-control");
        button.type = "radio";
        button.name = "control";
        if (ind === 0) {
            button.checked = true;
        }
        button.addEventListener("click", () => {slide(ind)});
        sliderControls.append(button);
    });
}

function slide(index) {
    let currentItem = document.querySelector(".open");
    currentItem.classList.remove("open");
    let newItem = document.querySelector(`#sliderItem-${index}`);
    newItem.classList.add("open");
}

console.log("https://github.com/Viktoria235689/cssMemSlider/pull/1")