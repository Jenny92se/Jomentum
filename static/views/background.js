const body = document.querySelector("body");

let IMG_NUMBER = 3;

/*
Math.random() 은 0~1 까지의(1은 생성하지 않음) "0.8794235627233815"
이런 실수를 반환하기에, 큰 숫자가 나오게끔 곱하기를 한 후, Math.floor() 를 사용하여 정수화시켜야 함

Math.floor(Math.random() * 100) + 1;
이렇게 하면, 1 에서 100 까지 나오고

Math.floor(Math.random() * 10);
이렇게 하면, 0 에서 9 까지 나오게 됨
*/
function genRandom() {
    const number = Math.floor(Math.random() * 3);
    console.log(number);
    return number;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `../images/${imgNumber + 1}.jpeg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad);
}

function handleImgLoad() {

}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();