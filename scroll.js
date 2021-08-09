var star = document.getElementById('star');
var moon = document.getElementById('moon');
var behind = document.getElementById('behind');
var text = document.getElementById('text');
var btn = document.getElementById('btn');
var front = document.getElementById('front');

window.addEventListener('scroll',function(){
    var value=window.scrollY;
    star.style.left = value *0.5 + 'px';

    moon.style.top = value *0.5 + 'px';

    behind.style.top = value *0.5 + 'px';

    star.style.left = value *0.5 + 'px';

    btn.style.marginLeft = value *3 + 'px';

    text.style.marginRight = value *3+ 'px';

})