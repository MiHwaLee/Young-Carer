
let imageObject = document.querySelectorAll('.imgOj');
let geul = document.querySelector('#geul');
let bCover = document.querySelector('#bCover');
let one = document.querySelector('#one');


document.addEventListener('scroll', scrollFn);
document.addEventListener('resize', scrollFn);
let startY = 0;
let endY = 0;
let nowY = 0;
let scrollY;

function scrollFn(){

scrollY = document.documentElement.scrollTop;


    if(scrollY < 500){
        geul.style.opacity = '1';
    }

    else if(scrollY >= 500 && scrollY < 1000){
        geul.style.opacity = '0';
    }

    console.log(scrollY);
    //0
    if(scrollY < 200){
        imageObject[0].style.opacity = '0';
    }

    else if(scrollY >= 200  && scrollY < 1200){
        imageObject[0].style.opacity = '1';
        imageObject[0].style.transform = 'scale(1)';
        startY = 200;
        endY = 1200-1;
        nowY =  scrollY - startY;
        imageObject[0].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[0].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    //1. 모녀가 함께 있는 모습...

    if(scrollY < 1600){
        imageObject[1].style.opacity = '0';
    }

    else if(scrollY >= 600 && scrollY < 2600){
        imageObject[1].style.opacity = '1';
        imageObject[1].style.transform = 'scale(1)';
        startY = 1600;
        endY = 2600-1;
        nowY =  scrollY - startY;
        imageObject[1].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[1].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }


    //2. 나도 이번에 시간나면...

    if(scrollY < 1000){
        imageObject[2].style.opacity = '0';
    }

    else if(scrollY >= 1000 && scrollY < 2000){
        imageObject[2].style.opacity = '1';
        imageObject[2].style.transform = 'scale(1)';
        startY = 1000;
        endY = 2000-1;
        nowY =  scrollY - startY;
        imageObject[2].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[2].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 3. 행복하세요...

    if(scrollY < 1200){
        imageObject[3].style.opacity = '0';
    }

    else if(scrollY >= 1200 && scrollY < 2200){
        imageObject[3].style.opacity = '1';
        imageObject[3].style.transform = 'scale(1)';
        startY = 1200;
        endY = 2200-1;
        nowY =  scrollY - startY;
        imageObject[3].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[3].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 4. 어머니가 치매여서...

    if(scrollY < 1400){
        image1.style.opacity = '0';
    }

    else if(scrollY >= 1400 && scrollY < 2400){
        imageObject[4].style.opacity = '1';
        imageObject[4].style.transform = 'scale(1)';
        startY = 1400;
        endY = 2400-1;
        nowY =  scrollY - startY;
        imageObject[4].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[4].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 5. 여기 어디에요?...

    if(scrollY <600){
        image1.style.opacity = '0';
    }

    else if(scrollY >= 600 && scrollY < 1600){
        imageObject[5].style.opacity = '1';
        imageObject[5].style.transform = 'scale(1)';
        startY = 600;
        endY = 1600-1;
        nowY =  scrollY - startY;
        imageObject[5].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[5].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 6. 좋은 일 가득하시길...
    if(scrollY < 800){
        imageObject[6].style.opacity = '0';
    }

    else if(scrollY >= 800 && scrollY < 1800){
        imageObject[6].style.opacity = '1';
        imageObject[6].style.transform = 'scale(1)';
        startY = 800;
        endY = 1800-1;
        nowY =  scrollY - startY;
        imageObject[6].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[6].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 7. 보기 좋다~
    if(scrollY < 400){
        imageObject[7].style.opacity = '0';
    }
    
    else if(scrollY >= 400 && scrollY < 1400){
        imageObject[7].style.opacity = '1';
        imageObject[7].style.transform = 'scale(1)';
        startY = 400;
        endY = 1400-1;
        nowY =  scrollY - startY;
        imageObject[7].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[7].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 어둡게
    if(scrollY <= 2800){
        bCover.style.opacity = '0';
    }
    
    else if(2800 < scrollY && scrollY <3200){
        bCover.style.opacity = '0.8';
    }
    
    // 버튼
    if(scrollY <= 3000){
        one.style.opacity = '0';
        one.style.width = '5vw';
    }
    
    else if(3500 < scrollY){
        one.style.opacity = '1';
        one.style.width = '10vw';
    }
};

    function makeAni(_startY, _endY, _nowY, _valA, _valB)
    {
        let calcVal = _valA + (_valB - _valA) * (_nowY / (_endY - _startY));
        //console.log("percent ==="+_nowY / (_endY - _startY));
        return calcVal;
    };
