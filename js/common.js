// js/common.js
 



//response  message img src
var img_src;


// img load into canvas
const canvas = document.querySelector("#canvas > .wrapper");
const img=new Image();
img.onload=function(){
    canvas.innerHTML += '<img src="'+img.src+'"/>';
};
img.src="sample_img.jpg";



// '생성' 버튼에 클릭 이벤트 바인딩
const btn_create = document.getElementById("create_object");



btn_create.addEventListener("click", handleCreateObject);
 
// 마우스 이벤트 추가
document.addEventListener('mousemove', handleObjectDrag);
document.addEventListener('mouseup', handleObjectDrop);