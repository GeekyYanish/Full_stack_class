/*const getData=()=>{
    return new Promise((resolve,reject)=>{
            // code database query
        
            //resolve("Some data");
            reject("error");
    });
};

getData().then((data)=>{
    console.log(data);
}, (error)=>{
    console.log(error);
})

getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
*/


const getData=async()=>{

};

console.log(getData());












/*
const getData = ()=>{
    return new Promise((resolve,reject) =>{
        //query database
        resolve("some data");
        reject("error");
    });
};

getData().then((data)=>{
    console.log(data);
},(error)=>{
    console.log(error);
});

getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

*/
/*
const getData = async()=>{
    
};

console.log(getData());
*/

/*
const baseURL="https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=QTd4H7HDVpLKhqIqtV42NmAthrt8ub4b"


fetch(baseURL).then((res)=>{
    res.json().then((data)=>{  
        console.log(data);
    })
}).catch(err=>{
    console.log(err);
})

const dosomething =async() => {
    const res=await fetch(baseURL);
    const data=await res.json();
    return data;

};

dosomething().then(data =>{

});

*/