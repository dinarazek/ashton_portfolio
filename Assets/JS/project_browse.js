function pulse(id){
    var carousel_item = document.getElementById(id);
    carousel_item.setAttribute('class', 'pulseDetail');
}

// on hover, pulse for time and then remove attribute
// move id to different element to do
function hoverPulse(id) {
    var carousel_item = document.getElementById(id);
    carousel_item.setAttribute('class', 'pulse');
    setTimeout(pulse, 3000, id);
    carousel_item.removeAttribute('class');
    carousel_item.setAttribute('class', 'img-fluid');

}