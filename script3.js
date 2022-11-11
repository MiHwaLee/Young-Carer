let imageObject = document.querySelectorAll(".imgObj");
let bCover = document.querySelector('#bCover');
let one = document.querySelector('#one');
let two = document.querySelector('#two');

document.addEventListener('scroll', scrollFn);
document.addEventListener('resize', scrollFn);
let startY = 0;
let endY = 0;
let nowY = 0;
let scrollY ;

function scrollFn(){

scrollY = document.documentElement.scrollTop;

    if(scrollY >= 0 && scrollY < 500 )//할아버지
    {
        imageObject[0].style.opacity =  1;
        imageObject[0].style.bottom =  "0%";
        startY = 0;
        endY = 500-1;
        nowY =  scrollY - startY;
        imageObject[0].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[0].style.bottom =  makeAni(startY, endY, nowY, 100, 0) + "%";
    }

    else if(scrollY >= 500 && scrollY < 1000)//휠체어
    {
        imageObject[1].style.opacity =  1;
        imageObject[1].style.bottom =  "0%";
        startY = 500;
        endY = 1000-1;
        nowY =  scrollY - startY;
        imageObject[1].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[1].style.bottom =  makeAni(startY, endY, nowY, 100, 0) + "%";
    }

    else if(scrollY >= 1000 && scrollY < 1500)//병원
    {
        imageObject[2].style.opacity =  1;
        imageObject[2].style.bottom =  "0%";
        startY = 1000;
        endY = 1500-1;
        nowY =  scrollY - startY;
        imageObject[2].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[2].style.bottom =  makeAni(startY, endY, nowY, 100, 0) + "%";
    }

    else if(scrollY >= 1500 && scrollY < 2000)//대출
    {
        imageObject[3].style.opacity =  1;
        imageObject[3].style.bottom =  "0%";
        startY = 1500;
        endY = 2000-1;
        nowY =  scrollY - startY;
        imageObject[3].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[3].style.bottom =  makeAni(startY, endY, nowY, 100, 0) + "%";
    }

    else if(scrollY >= 2000 && scrollY < 2500)//차
    {
        imageObject[4].style.opacity =  1;
        imageObject[4].style.bottom =  "25%";
        startY = 2000;
        endY = 2500-1;
        nowY =  scrollY - startY;
        imageObject[4].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[4].style.bottom =  makeAni(startY, endY, nowY, 100, 25) + "%";
    }

    else if(scrollY >= 2500 && scrollY < 3000)//통장
    {
        imageObject[5].style.opacity =  1;
        imageObject[5].style.bottom =  "25%";
        startY = 2500;
        endY = 3000-1;
        nowY =  scrollY - startY;
        imageObject[5].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[5].style.bottom =  makeAni(startY, endY, nowY, 100, 25) + "%";
    }

    else if(scrollY >= 3000 && scrollY < 3500)//만원1
    {
        imageObject[6].style.opacity =  1;
        imageObject[6].style.bottom =  "15%";
        startY = 3000;
        endY = 3500-1;
        nowY =  scrollY - startY;
        imageObject[6].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[6].style.bottom =  makeAni(startY, endY, nowY, 100, 20) + "%";
    }

    else if(scrollY >=3500 && scrollY < 4000)//통지서
    {
        imageObject[7].style.opacity =  1;
        imageObject[7].style.bottom =  "0%";
        startY = 3500;
        endY = 4000-1;
        nowY =  scrollY - startY;
        imageObject[7].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[7].style.bottom =  makeAni(startY, endY, nowY, 100, 0) + "%";
    }

    else if(scrollY >=4000 && scrollY < 4500)//약봉지
    {
        imageObject[8].style.opacity =  1;
        imageObject[8].style.bottom =  "10%";
        startY = 4000;
        endY = 4500-1;
        nowY =  scrollY - startY;
        imageObject[8].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[8].style.bottom =  makeAni(startY, endY, nowY, 100, 10) + "%";
    }

    else if(scrollY >=4500 && scrollY < 5000)//아파트
    {
        imageObject[9].style.opacity =  1;
        imageObject[9].style.bottom =  "20%";
        startY = 4500;
        endY = 5000-1;
        nowY =  scrollY - startY;
        imageObject[9].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[9].style.bottom =  makeAni(startY, endY, nowY, 100, 20) + "%";
    }

    else if(scrollY >=5000 && scrollY < 5500)//고무장갑
    {
        imageObject[10].style.opacity =  1;
        imageObject[10].style.bottom =  "20%";
        startY = 5000;
        endY = 5500-1;
        nowY =  scrollY - startY;
        imageObject[10].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[10].style.bottom =  makeAni(startY, endY, nowY, 100, 20) + "%";
    }

    else if(scrollY >=5500 && scrollY < 6000)//심장
    {
        imageObject[11].style.opacity =  1;
        imageObject[11].style.bottom =  "25%";
        startY = 5500;
        endY = 6000-1;
        nowY =  scrollY - startY;
        imageObject[11].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[11].style.bottom =  makeAni(startY, endY, nowY, 100, 25) + "%";
    }

    else if(scrollY >=6000 && scrollY < 6500)//
    {
        imageObject[12].style.opacity =  1;
        imageObject[12].style.bottom =  "20%";
        startY = 6000;
        endY = 6500-1;
        nowY =  scrollY - startY;
        imageObject[12].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[12].style.bottom =  makeAni(startY, endY, nowY, 100, 20) + "%";
    }

    else if(scrollY >=6500 && scrollY < 7000)//
    {
        imageObject[13].style.opacity =  1;
        imageObject[13].style.bottom =  "40%";
        startY = 6500;
        endY = 7000-1;
        nowY =  scrollY - startY;
        imageObject[13].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[13].style.bottom =  makeAni(startY, endY, nowY, 100, 40) + "%";
    }

    // 어둡게
    if(scrollY <= 7100){
        bCover.style.opacity = '0';
    }

    else if(7100 < scrollY && scrollY < 7400){
        bCover.style.opacity = '0.8';
    }

    //qjxms
    if(scrollY <= 7200){
        one.style.opacity = '0';
        one.style.width = '5vw';
    }

    else if(7200 < scrollY){
        one.style.opacity = '1';
        one.style.width = '10vw';
    }

    if(scrollY <= 7200){
        two.style.opacity = '0';
        two.style.width = '5vw';
    }

    else if(7200 < scrollY){
        two.style.opacity = '1';
        two.style.width = '10vw';
    }
};

function makeAni(_startY, _endY, _nowY, _valA, _valB)
{
    let calcVal = _valA + (_valB - _valA) * (_nowY / (_endY - _startY));
    console.log("percent ===" +(_nowY / (_endY - _startY)) );
    return calcVal;
};