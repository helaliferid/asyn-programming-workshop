let completed=false;
console.log(completed)

let learnJS=new Promise(
    (resolve,reject)=>{
        setTimeout(
            ()=>{
              if(completed){
                  resolve('I have completed learning JS.');
              }else{
                  reject(`I haven't completed learning JS yet`);
              }
            }, 5*1000
        );
    }
)


// consuming the promise

let myLearningJsPromise="";
learnJS.then((data)=>{
    console.log(data);
    myLearningJsPromise=data;
}).catch(console.error);

console.log(myLearningJsPromise)