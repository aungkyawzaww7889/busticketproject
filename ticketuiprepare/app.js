$(document).ready(function(){

    console.log('hay');

    $("#calendar").click(function(){

        $('#bookingdate').datepicker();

    });

    $("#closebtn").click(function(){
        $('#bookingdate').datepicker("hide");
        console.log("hay"); 
    })
    

    let getdate = new Date();
    let getday = getdate.getDay();
    let getmonth = getdate.getMonth();
    let getyear = getdate.getUTCFullYear();

    console.log(getday,getmonth,getyear);

    console.log($('#bookingdate').attr("value"));
});

