var a;
function myFunction() {
    a = setTimeout(c, 2500);
}
function c() {
    document.getElementById('loader').style.display='none';
    document.getElementById('myDiv').style.display='block';
}
