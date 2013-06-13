var menu = document.getElementById('menu');
//document.getElementById('menu').style.color = "red";

var entries = menu.getElementsByTagName('li');

function loop(steps, cb){


    setTimeout(function() {
        //TODO here is the code
        //since we loop through the list elements quite often we need some sort of
        //callback mechanism so we can reuse our loop function
        //       entries[steps-1].style.display = "block";
        cb(entries[steps-1]);

        if (--steps) { loop(steps, cb); };
    }, 1000);
}

loop(entries.length, fade);


function fade(el){
    var op = 0.1;

    var timer = setInterval(function(){
        console.log(op);
        if (op = 1) {
            clearInterval(timer);
        };
        el.style.opacity = op;
       // el.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
    }, 500);

};
