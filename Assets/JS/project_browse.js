// used to pulse image on project detail page on mouse down
// paired with expansion to give interactiv effect when opening a project detail page
function pulse(id){
    var carousel_item = document.getElementById(id);
    carousel_item.setAttribute('class', 'pulseDetail');
}