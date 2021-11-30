function f(callback){
    setTimeout(function(){ 
                    console.log('doStaff in f');
                    callback();
                },3000);

    return ({computedValueF:5});
}

function g(){
    setTimeout(function(){ 
                 console.log('doStaff in g ');
                 },2000);
    return ({computedValueG:10});
}

f(g);  // execute g apres f même si f s'execute aprés 3000ms et g apres 2000ms.