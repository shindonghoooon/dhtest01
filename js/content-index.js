var img_src;
chrome.runtime.onMessage.addListener(function(request,sender,response) {
    if(request.someParam!=="undefined"){
        img_src = request.someParam;
        const canvas = document.querySelector("#canvas > .wrapper");
        canvas.innerHTML += '<img src="'+img_src+'"/>';
    }
});
