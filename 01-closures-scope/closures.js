//basic closures

function basic(){
    let x=10;
    function data(){
        console.log('x',x)
    }
    data();
}

basic();


//closures with private variables

function privateClosures(){
    let x= 20;
    return function data(){
        x++;
        console.log('x',x)
    }
}

const closure = privateClosures();
closure();
closure();


//closures with loop

function loopExample(){
    for(var i=0;i<=3;i++){
       setTimeout(function(){
            console.log('inside closure',i);
        },1000)
    }
}
loopExample();
