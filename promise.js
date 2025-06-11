
let api = `https://jsonplaceholder.typicode.com/posts`;
let api2 = `https://dog.ceo/api/breeds/image/random`;
let api3 = `https://randomuser.me/api/`;
let api4 = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`

//
document.getElementById('promiseNormal').addEventListener('click', async function(){
    normalPromiseFetch(api).then((res)=>console.log('resNormal',res)).catch((err)=>console.log(err))
    let normalAsyncRes = await normalPromiseUsingAsync(api);
    console.log('normalAsync',normalAsyncRes);
})
// normal promise of fetch
function normalPromiseFetch(api){
   return fetch(api).then(res=>{
        return  res.json()

    }).catch((err)=>{
        throw err
    })
}
async function normalPromiseUsingAsync(api){
   try{
        const res = await fetch(api);
        const data = await res.json();
        return data;
   }catch(err){
    throw err;
   }
}
/// promise all 
//resolve when all promises  are resolved or reject when any promise is rejected (its fails first)
document.getElementById('promiseAll').addEventListener('click', async function(){
    Promise.all([normalPromiseFetch(api), normalPromiseFetch(api2), normalPromiseFetch(api3), normalPromiseFetch(api4)])
    .then((res)=>{
        console.log('promiseAll', res);
    })
    .catch((err)=>{
        console.log('promiseAllError', err);
    })
    try{
    let res = await Promise.all([normalPromiseUsingAsync(api), normalPromiseUsingAsync(api2), normalPromiseUsingAsync(api3), normalPromiseUsingAsync(api4)]);
    console.log('promiseAllAsync', res);
    }
    catch(err){
        console.log('promiseAllAsyncError', err);
    }
})
// promise any , its give first resolved promise and its reject when all promises are rejected
document.getElementById('promiseAny').addEventListener('click', async function(){
    Promise.any([normalPromiseFetch(api), normalPromiseFetch(api2), normalPromiseFetch(api3), normalPromiseFetch(api4)])
    .then((res)=>{
        console.log('promiseAny', res);
    })
    .catch((err)=>{
        console.log('promiseAnyError', err);
    })
    try{
        let res = await Promise.any([normalPromiseUsingAsync(api), normalPromiseUsingAsync(api2), normalPromiseUsingAsync(api3), normalPromiseUsingAsync(api4)]);
        console.log('promiseAnyAsync', res);
    }
    catch(err){
        console.log('promiseAnyAsyncError', err);
    }
})
// promise.race
// first settle resolved or rejected promise
document.getElementById('promiseRace').addEventListener('click', async function(){
    Promise.race([normalPromiseFetch(api), normalPromiseFetch(api2), normalPromiseFetch(api3), normalPromiseFetch(api4)])
    .then((res)=>{
        console.log('promiseRace', res);
    }).catch((err)=>{
        console.log('promiseRaceError', err);
    })
    try{
        let res = await Promise.race([normalPromiseUsingAsync(api), normalPromiseUsingAsync(api2), normalPromiseUsingAsync(api3), normalPromiseUsingAsync(api4)]);
        console.log('promiseRaceAsync', res);
    }catch(err){
        console.log('promiseRaceAsyncError', err);
    }   
})
// Promise allSettled 
// it will settle all promises and return an array of objects with status and value or reason
document.getElementById('promiseAllSettled').addEventListener('click', async function(){ 
    Promise.allSettled([normalPromiseFetch(api), normalPromiseFetch(api2), normalPromiseFetch(api3), normalPromiseFetch(api4)])
    .then((res)=>{
        console.log('promiseAllSettled', res);
    }).catch((err)=>{
        console.log('promiseAllSettledError', err);
    })
    try{
        let res = await Promise.allSettled([normalPromiseUsingAsync(api), normalPromiseUsingAsync(api2), normalPromiseUsingAsync(api3), normalPromiseUsingAsync(api4)]);
        console.log('promiseAllSettledAsync', res);
    }catch(err){
        console.log('promiseAllSettledAsyncError', err);
    } 
})
//
//Creates a rejected promise with a given reason
// Promise Combinators (Introduced in ES6+)
// Promise.all()
// Resolves when all promises resolve
// Rejects immediately when any promise rejects
// Returns array of results in input order
// Promise.race()
// Resolves or rejects when first promise settles
// Returns value/reason of first settled promise
// Promise.allSettled() (ES2020)
// Waits for all promises to settle (resolve or reject)
// Never rejects - returns array of outcome objects
// Each object has status ("fulfilled"/"rejected") and value/reason
// Promise.any() (ES2021)
// Resolves when first promise resolves
// Only rejects if all promises reject (with AggregateError)
// Returns first successful value
