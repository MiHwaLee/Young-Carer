let textObject = document.querySelectorAll(".textObj");
let bCover = document.querySelector('#bCover');
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');
let one = document.querySelector('#one');

console.log(textObject[0]);

document.addEventListener('scroll', scrollFn);
let startY = 0;
let endY = 0;
let nowY = 0;
let scrollY ;

function scrollFn(){

scrollY = document.documentElement.scrollTop;

console.log(scrollY);

    if (scrollY < 200){
        textObject[0].style.opacity = '0';
    }

    else if(scrollY >= 200 && scrollY < 1500 ){
        textObject[0].style.opacity =  '1';
        startY = 200;
        endY = 500-1;
        nowY =  scrollY - startY;
        textObject[0].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
    }

    else if(scrollY >= 1500 && scrollY < 2000 ){
        textObject[0].style.opacity =  '0';
        startY = 1500;
        endY = 2000-1;
        nowY =  scrollY - startY;
        textObject[0].style.opacity =  makeAni(startY, endY, nowY, 1, 0);
        console.log("opa=====" + makeAni(startY, endY, nowY, 1, 0));
    }

    else if(scrollY >= 2000 ){
        textObject[0].style.opacity =  '0';}

    //1
    if (scrollY < 1800){
        textObject[1].style.opacity = '0';
    }

    else if(scrollY >= 1800 && scrollY < 3100 ){
        textObject[1].style.opacity =  '1';
        startY = 1800;
        endY = 3100-1;
        nowY =  scrollY - startY;
        textObject[1].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
    }

    else if(scrollY >= 3100 && scrollY < 3600 ){
        textObject[1].style.opacity =  '0';
        startY = 3100;
        endY = 3600-1;
        nowY =  scrollY - startY;
        textObject[1].style.opacity =  makeAni(startY, endY, nowY, 1, 0);
        console.log("opa=====" + makeAni(startY, endY, nowY, 1, 0));
    }

    else if(scrollY >= 3600 ){
        textObject[1].style.opacity =  '0';}

    //2
    if (scrollY < 3100){
        textObject[2].style.opacity = '0';
    }

    else if(scrollY >= 3100 && scrollY < 4400 ){
        textObject[2].style.opacity =  '1';
        startY = 3100;
        endY = 4400-1;
        nowY =  scrollY - startY;
        textObject[2].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
    }

    else if(scrollY >= 4400 && scrollY < 5100 ){
        textObject[2].style.opacity =  '0';
        startY = 4400;
        endY = 5100-1;
        nowY =  scrollY - startY;
        textObject[2].style.opacity =  makeAni(startY, endY, nowY, 1, 0);
        console.log("opa=====" + makeAni(startY, endY, nowY, 1, 1));
    }

    else if (scrollY >= 5100){
        textObject[2].style.opacity = '0';
    }

    //3
    if (scrollY < 4700){
        textObject[3].style.opacity = '0';
    }

    else if(scrollY >= 4700 && scrollY < 6000 ){
        textObject[3].style.opacity =  '1';
        startY = 4700;
        endY = 6000-1;
        nowY =  scrollY - startY;
        textObject[3].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
    }

    else if(scrollY >= 6000 && scrollY < 6500 ){
        textObject[3].style.opacity =  '0';
        startY = 6000;
        endY = 6500-1;
        nowY =  scrollY - startY;
        textObject[3].style.opacity =  makeAni(startY, endY, nowY, 1, 0);
        console.log("opa=====" + makeAni(startY, endY, nowY, 1, 0));
    }

    else if(scrollY >= 6500 ){
        textObject[3].style.opacity =  '0';}

    //동영상

    if(scrollY < 6300){
        img1.style.opacity = '0';
    }

    else if(scrollY >= 6300 && scrollY < 7500){
        img1.style.opacity =  '1';
        startY = 6300;
        endY = 7500-1;
        nowY =  scrollY - startY;
        img1.style.opacity =  makeAni(startY, endY, nowY, 0, 1);
    }

    if(scrollY < 6300){
        img2.style.opacity = '0';
    }

    else if(scrollY >= 6300 && scrollY < 7500){
        img2.style.opacity =  '1';
        startY = 6300;
        endY = 7500-1;
        nowY =  scrollY - startY;
        img2.style.opacity =  makeAni(startY, endY, nowY, 0, 1);
    }

    if(scrollY < 6300){
        img3.style.opacity = '0';
    }

    else if(scrollY >= 6300 && scrollY < 7500){
        img3.style.opacity =  '1';
        startY = 6300;
        endY = 7500-1;
        nowY =  scrollY - startY;
        img3.style.opacity =  makeAni(startY, endY, nowY, 0, 1);
    }

    if(scrollY < 6300){
        img4.style.opacity = '0';
    }

    else if(scrollY >= 6300 && scrollY < 7500){
        img4.style.opacity =  '1';
        startY = 6300;
        endY = 7500-1;
        nowY =  scrollY - startY;
        img4.style.opacity =  makeAni(startY, endY, nowY, 0, 1);
    }

    //버튼
    if(scrollY <= 7400){
        one.style.opacity = '0';
        one.style.width = '5vw';
    }

    else if(7400 < scrollY){
        one.style.opacity = '1';
        one.style.width = '10vw';
    }
};

function makeAni(_startY, _endY, _nowY, _valA, _valB)
{
    let calcVal = _valA + (_valB - _valA) * (_nowY / (_endY - _startY));
    console.log("percent ===" +(_nowY / (_endY - _startY)) );
    return calcVal;
};