window.addEventListener('click',function(){
    console.log('Window is Clicked');
    
},true)
document.addEventListener('click',function(){
    console.log('Document is Clicked');
},true)

document.querySelector('.outer-div').addEventListener('click',function(e){
    // e.stopPropagation()
    console.log('Outer Div is Clicked');
},{once:true})
document.querySelector('.inner-div').addEventListener('click',function(){
    console.log('Inner Div is Clicked');
},true)
document.querySelector('.btn').addEventListener('click',function(e){
    console.log(e);
},true)