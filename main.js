$("document").ready(function($){
photos();
    $("#slides").cycle({
        fx:     'none',
        speed:   1,
        timeout: 3000
});
});


function photos(){
$.get("images/gallery/control.json", function(json){
console.log(json.files);
});
}