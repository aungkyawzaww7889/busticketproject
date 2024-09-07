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




