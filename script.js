let counter = 0;

$("#counter").html(counter);

function increaseCounter() {
    counter++;
    $("#counter").html(counter);

};

function decreaseCounter() {
    counter--;
    $("#counter").html(counter);

};

$("#increase").click(function(){
    increaseCounter();

    
});

$("#decrease").click(function(){
    decreaseCounter();
});

$("#reset").click(function(){
    counter = 0;
    $("#counter").html(counter);

});








