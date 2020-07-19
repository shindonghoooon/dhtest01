var img_src;
/**
chrome.runtime.sendMessage({action: 'getSource'}, function(response) {
   img_src=response.source;
});
console.log(img_src);
const canvas = document.querySelector("#canvas > .wrapper");
const img=new Image();
img.onload=function(){
    canvas.innerHTML += '<img src="'+ims_src+'"/>';
};
 */
chrome.runtime.onMessage.addListener(function(request,sender,response) {
    if(request.someParam!=="undefined"){
        img_src = request.someParam;
        console.log(img_src);
    }
});
