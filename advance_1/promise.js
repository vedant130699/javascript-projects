const promise = new Promise((resolve, reject)=>{
    //do an async task... eg db tasks
    //db calls, cryptography, network

    setTimeout(e=>{
        console.log('Async task is complete');
        resolve();
    }, 1000)
});


promise.then(e=>{
    console.log("promise consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(e=>{
        console.log("Async task two");
        resolve();
    }, 1000)
}).then(e=>{
    console.log("Async task 2 completed");
})


const promise3= new Promise((resolve, reject)=>{
    setTimeout(e=>{
        //data can be passed in resolve which in turn passes to then()
        resolve({username: 'vedant', email: 'vedant@gmail.com'});
    }, 1000)
})

promise3.then(e=>{
    console.log(e);
})

promise4 = new Promise((resolve, reject)=>{
    setTimeout(e=>{
        let error = false;
        if(!error){
            resolve({username: 'abc', email: 'abc@gmail.com'});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

promise4.then(e=>{
    console.log(e);
    return e.username;
}).then(e=>{
    console.log(e);
}).catch(e=>{
    console.log(e)
}).finally(e=>{
    console.log('promise is eigther resolved or rejected')
})

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(e=>{
        let error = true;
        if(!error){
            resolve({username: 'Javascript', password: '123'});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

//new syntax... async await

async function consumePromise5(){
    
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromise5();


async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`E: ${error}`);
    }
}    

getUsers()