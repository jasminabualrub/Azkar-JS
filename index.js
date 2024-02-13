const count1=function(){
    const btn1=document.querySelector('.count1 button');
    const rst=document.querySelector('.count1 .num2')
    console.log(rst);
   let counter1=parseInt(document.querySelector('.count1 p').textContent);
    console.log(counter1);
    btn1.onclick=function(){
        counter1++;
        document.querySelector('.count1 p').textContent=counter1;
    }
    rst.onclick=function(){
        counter1=0;
        document.querySelector('.count1 p').textContent=counter1;

    }
    
}

count1();

const count2=function(){
    let btn2=document.querySelector('.count2 button');
    const rst=document.querySelector('.count2 .num2')
    console.log(rst);
    let counter2=parseInt(document.querySelector('.count2 p').textContent);
    console.log(counter2);
    btn2.onclick=function(){
        counter2++;
        document.querySelector('.count2 p').textContent=counter2;
    }
    rst.onclick=function(){
        counter2=0;
        document.querySelector('.count2 p').textContent=counter2;

    }
}
count2();


const count3=function(){
    let btn3=document.querySelector('.count3 button');
    const rst=document.querySelector('.count3 .num2')
    console.log(rst);
    let counter3=parseInt(document.querySelector('.count3 p').textContent);
    console.log(counter3);
    btn3.onclick=function(){
        counter3++;
        document.querySelector('.count3 p').textContent=counter3;
    }
    rst.onclick=function(){
        counter3=0;
        document.querySelector('.count3 p').textContent=counter3;

    }
}
count3();
const count4=function(){
    let btn4=document.querySelector('.count4 button');
    const rst=document.querySelector('.count4 .num2')
    console.log(rst);
    let counter4=parseInt(document.querySelector('.count4 p').textContent);
    console.log(counter4);
    btn4.onclick=function(){
        counter4++;
        document.querySelector('.count4 p').textContent=counter4;
    }
    rst.onclick=function(){
        counter4=0;
        document.querySelector('.count4 p').textContent=counter4;

    }
}
count4();