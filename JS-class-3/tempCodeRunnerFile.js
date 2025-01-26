// let h1 = document.getElementById('container-h1');

// h1.style.backgroundColor = 'blue';

// let container = document.getElementsByClassName('container')[0];

// // let containerH2 = document.createElement('h2');
// // containerH2.innerText = "Learn Coding!";
// // containerH2.className = "container-h2";
// // containerH2.id = "container-id";
// // container.appendChild(containerH2);

// // containerH2.style.cursor = "pointer";





// // let btn = document.getElementById('button');

// // function changeColor(){
// //     h1.style.color = 'blue';
// //     h1.style.backgroundColor = 'aquamarine';
// // }

// // let state = false;

// // function alertMe(){
// //     state = !state;

// //     if(state){
// //         h1.style.color = 'blue';
// //         h1.style.backgroundColor = 'aquamarine';
// //     }
// //     else{
// //         h1.style.color = 'black';
// //         h1.style.backgroundColor = 'blue';
// //     }

// // }


// function changeColorToPink(){
//     document.getElementById('box-1').style.backgroundColor = "pink"
// }
// function changeColorToOrange(){
//     document.getElementById('box-2').style.backgroundColor = "orange"



// }
// function changeColorToGreen(){
//     document.getElementById('box-3').style.backgroundColor = "green"



// }
// function changeColorToBlue(){
//     document.getElementById('box-4').style.backgroundColor = "blue"



// }
// function changeColorToRed(){
//     document.getElementById('box-5').style.backgroundColor = "red"



// }
// function changeColorToYellow(){
//     document.getElementById('box-6').style.backgroundColor = "yellow"



// }

// function callBackFn(){
//     console.log("I am a call back function");
    
// }

// setTimeout(callBackFn, 3000);

// console.log("Hello")


// setInterval(callBackFn, 3000)


// setTimeout(()=>{
//     console.log("Good Morning!");
// }, 4000)

// setInterval(() => {
//     console.log("Very Good Morning");
// }, 2000);

function callMe(b){
    let a = 20;
    
    let func = ()=>{
        console.log("3");
        console.log(a+b);
    }
    

    console.log("1");
    b++;
    console.log("2");
    setTimeout(func, 3000);
    console.log("4");
    a++;
}

let a = 3;

callMe(a+2);





