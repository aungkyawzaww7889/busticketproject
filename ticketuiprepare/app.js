$(document).ready(function(){

    let today = new Date();
    let day = today.getDate() + 7;
    let month = today.getMonth() + 1; // Months are zero-indexed, so January is 0
    let year = today.getFullYear();
    
    // Format the date as needed (e.g., DD/MM/YYYY)
    let formattedDate = month + '/' + day + '/' + year;

    // console.log('Today\'s Date: ' + formattedDate);

    $('#bookingdate').datepicker({
        minDate:0,
        showAnim:"slideDown",
        duration:"slow",
        maxDate:`${formattedDate}`
    });

    $('#bookingdate').change(function(){
        // console.log($("#deparature").text());
        $("#deparature").css({
            opacity:"0"
        });
    });


});



const getminus = document.getElementById('minus');
const getplus = document.getElementById('plus');
const getnum = document.getElementById('num');



let x = 0;
getplus.addEventListener('click',function(){

    x++;
    if(x >= 4){
        x = 4;
        getplus.style.opacity = 0.5;
    }

    if(x >= 1){
        getnum.innerText = `${x} Seats`;
        getminus.style.opacity = 1;

    }else{
        getnum.innerText = `${x} Seat`;

    }

    // console.log(x);

});



getminus.addEventListener('click',function(){

    x--;
    if(x <= 0){
        x = 0;
        getminus.style.opacity = 0.5;
    }

    if(x >= 1){
        getnum.innerText = `${x} Seats`;
        getplus.style.opacity = 1;
    }else{
        getnum.innerText = `${x} Seat`;
    }

    // console.log(x);



});

const getuls = document.querySelector('.foruls');
// console.log(getuls);

function togglemenu(evl){
    console.log(evl.target);

    if(evl.target.classList.contains('toggleinputs')){
        evl.target.classList.remove('toggleinputs');
        getuls.classList.add('opacity-100');
    }else{
        evl.target.classList.add('toggleinputs');
        getuls.classList.remove('opacity-100');

    }
}

const getleftbtn = document.getElementById('leftbtn');
const getrightbtn = document.getElementById("rightbtn");
const getlists = document.querySelectorAll('.lists');




let imgaddress = ["photo1","photo2","photo3"];

let i = 0;

getleftbtn.addEventListener('click',function(){
    // console.log("left"); 

    i--;
    if(i < 0){
        i = imgaddress.length -1;
        
    }
    // console.log(i);

    document.querySelector('#shoimgs').src = `./images/${imgaddress[i]}.jpg`;
    getlists.forEach(lists => lists.classList.remove('active'));
    getlists[i].classList.add('active');
});


getrightbtn.addEventListener('click',function(){
    // console.log("right"); 

    i++;
    if(i >= imgaddress.length){
        i = 0;
        
    }
    // console.log(i);

    document.querySelector('#shoimgs').src = `./images/${imgaddress[i]}.jpg`;
    getlists.forEach(lists => lists.classList.remove('active'));
    getlists[i].classList.add('active');

});


// getlists.forEach(lists => lists.addEventListener('click',togglemenu));

getlists.forEach(function(list){

    list.addEventListener("click",function(){
        // console.log(this);
        // console.log(this.innerText);
        // console.log(imgaddress[this.innerText-1]);


        getlists.forEach(lists => lists.classList.remove('active'));
        this.classList.add('active');

        document.querySelector('#shoimgs').src = `./images/${imgaddress[this.innerText-1]}.jpg`;
        
    });


});




