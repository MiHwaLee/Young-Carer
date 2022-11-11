let imageObject = document.querySelectorAll('.imgOj');
let image0 = document.querySelector('#image0');
let write = document.querySelector('#write');
let bCover = document.querySelector('#bCover');
let one = document.querySelector('#one');
let two = document.querySelector('#two');

document.addEventListener('scroll', scrollFn)
document.addEventListener('resize', scrollFn);
let startY = 0;
let endY = 0;
let nowY = 0;
let scrollY;

function scrollFn(){

scrollY = document.documentElement.scrollTop;
    
    // 폰 이미지
    if(scrollY <= 100){
        image0.style.opacity = '1';
        image0.style.transform = 'scale(1)';
    }

    else if(100 < scrollY && scrollY < 1000){
        image0.style.opacity = '0';
        image0.style.transform = 'scale(0.8)';
        startY = 100;
        endY = 1000-1;
        nowY =  scrollY - startY;
        image0.style.opacity =  makeAni(startY, endY, nowY, 1, 0);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        image0.style.transform = 'scale('+ makeAni(startY, endY, nowY, 1 , 0.8)+')';
    }

    // write 배경 이미지
    if(scrollY <= 800){
        write.style.opacity = '0';
        write.style.transform = 'scale(0)';
    }

    else if(800 < scrollY && scrollY < 1800)
    {
        write.style.opacity = '1';
        write.style.transform = 'scale(1)';
        startY = 800;
        endY = 1800-1;
        nowY =  scrollY - startY;
        write.style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        write.style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    console.log(scrollY)

    // 0. 이번달 병원비 어떻게 하지,,,
    if(scrollY < 1300){
        imageObject[0].style.opacity = '0';
    }

    else if(scrollY >= 1300  && scrollY < 2300){
        imageObject[0].style.opacity = '1';
        imageObject[0].style.transform = 'scale(1)';
        startY = 1300;
        endY = 2300-1;
        nowY =  scrollY - startY;
        imageObject[0].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[0].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 3. 왜 나는 보호 받아야 하는 나이에

    if(scrollY < 1500){
        imageObject[3].style.opacity = '0';
    }

    else if(scrollY >= 1500  && scrollY < 2500){
        imageObject[3].style.opacity = '1';
        imageObject[3].style.transform = 'scale(1)';
        startY = 1500;
        endY = 2500-1;
        nowY =  scrollY - startY;
        imageObject[3].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[3].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 7. 이 청구서는 뭐지?? 이렇게 많이 나온다고?
    
    if(scrollY < 1700){
        imageObject[7].style.opacity = '0';
    }

    else if(scrollY >= 1700  && scrollY < 2700){
        imageObject[7].style.opacity = '1';
        imageObject[7].style.transform = 'scale(1)';
        startY = 1700;
        endY = 2700-1;
        nowY =  scrollY - startY;
        imageObject[7].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[7].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 1. 저녁 알바를 더 해야할까?
    if(scrollY < 1900){
        imageObject[1].style.opacity = '0';
    }

    else if(scrollY >= 1900  && scrollY < 2900){
        imageObject[1].style.opacity = '1';
        imageObject[1].style.transform = 'scale(1)';
        startY = 1900;
        endY = 2900-1;
        nowY =  scrollY - startY;
        imageObject[1].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[1].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 6. 돈이 너무 많이 들어.
    if(scrollY < 2100){
        imageObject[6].style.opacity = '0';
    }

    else if(scrollY >= 2100  && scrollY < 3100){
        imageObject[6].style.opacity = '1';
        imageObject[6].style.transform = 'scale(1)';
        startY = 2100;
        endY = 3100-1;
        nowY =  scrollY - startY;
        imageObject[6].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[6].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 8. 나도 진로를 결정하고 싶다.
    if(scrollY < 2300){
        imageObject[8].style.opacity = '0';
    }

    else if(scrollY >= 2300  && scrollY < 3300){
        imageObject[8].style.opacity = '1';
        imageObject[8].style.transform = 'scale(1)';
        startY = 2300;
        endY = 3300-1;
        nowY =  scrollY - startY;
        imageObject[8].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[8].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 4. 이번에 신청한 지원도
    if(scrollY < 2500){
        imageObject[4].style.opacity = '0';
    }

    else if(scrollY >= 2500  && scrollY < 3500){
        imageObject[4].style.opacity = '1';
        imageObject[4].style.transform = 'scale(1)';
        startY = 2500;
        endY = 3500-1;
        nowY =  scrollY - startY;
        imageObject[4].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[4].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 2. 나는 이렇게 앞으로
    if(scrollY < 2700){
        imageObject[2].style.opacity = '0';
    }

    else if(scrollY >= 2700  && scrollY < 3700){
        imageObject[2].style.opacity = '1';
        imageObject[2].style.transform = 'scale(1)';
        startY = 2700;
        endY = 3700-1;
        nowY =  scrollY - startY;
        imageObject[2].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[2].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 5. 나는 효자가, 효녀가
    if(scrollY < 2900){
        imageObject[5].style.opacity = '0';
    }

    else if(scrollY >= 2900  && scrollY < 3900){
        imageObject[5].style.opacity = '1';
        imageObject[5].style.transform = 'scale(1)';
        startY = 2900;
        endY = 3900-1;
        nowY =  scrollY - startY;
        imageObject[5].style.opacity =  makeAni(startY, endY, nowY, 0, 1);
        //console.log("opa=====" + makeAni(startY, endY, nowY, 0, 1));
        imageObject[5].style.transform = 'scale('+ makeAni(startY, endY, nowY, 0, 1)+')';
    }

    // 어둡게
    if(scrollY <= 4000){
        bCover.style.opacity = '0';
    }

    else if(4000 < scrollY && scrollY < 4300){
        bCover.style.opacity = '0.8';
    }

    // 버튼
    if(scrollY <= 4100){
        one.style.opacity = '0';
        one.style.width = '5vw';
    }
    
    else if(4100 < scrollY){
        one.style.opacity = '1';
        one.style.width = '10vw';
    }

    if(scrollY <= 4100){
        two.style.opacity = '0';
        two.style.width = '5vw';
    }
    
    else if(4100 < scrollY){
        two.style.opacity = '1';
        two.style.width = '10vw';
    }
};

    function makeAni(_startY, _endY, _nowY, _valA, _valB)
    {
        let calcVal = _valA + (_valB - _valA) * (_nowY / (_endY - _startY));
        //console.log("percent ==="+_nowY / (_endY - _startY));
        return calcVal;
    };
