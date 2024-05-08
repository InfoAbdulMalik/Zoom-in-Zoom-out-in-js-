var img= document.getElementById('img')

function  zoom(e){

img.style.width='1000px';
img.style.marginLeft='400px'
img.style.transition='0.5s';

}
function leave(){
    img.style.width='500px';
    img.style.transition='0.5s';
    img.style.marginLeft='0px'
}
document.onclick = ()=>{
    img.style.width='500px'

}