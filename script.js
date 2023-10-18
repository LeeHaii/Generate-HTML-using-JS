
const array = [
    {
        title: 'Eng Phun Nem',
        img_src: 'pic1.jpg',
        description: 'abc',
    },
    {
        title: 'Eng Hoeng',
        img_src: 'pic2.jpg',
        description: 'def',
    },
    {
        title: 'Eng Lin Tran',
        img_src: 'pic3.jpg',
        description: 'def',
    }
]

const cardArray = document.querySelector(".cardArray");

for(let i=0; i < array.length; i++) {
    const cardArrayDiv = document.createElement("div");
    cardArrayDiv.className = "singleCard" + i;

    const cardSingleName = document.createElement("p");
    const cardSingleImg = document.createElement("img");
    const cardSingleDescription = document.createElement("p");

    cardSingleName.textContent = array[i].title;
    cardSingleImg.setAttribute("src", array[i].img_src);
    cardSingleImg.setAttribute("width", "300px");
    cardSingleDescription.textContent = array[i].description;

    cardArrayDiv.appendChild(cardSingleName);
    cardArrayDiv.appendChild(cardSingleImg);
    cardArrayDiv.appendChild(cardSingleDescription);

    cardArray.appendChild(cardArrayDiv);
}


