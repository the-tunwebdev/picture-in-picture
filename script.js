const button = document.getElementById('button');
const video_element = document.getElementById('video');

// async (prompt the user to select media stream)
async function selecct_media_stream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video_element.srcObject= mediaStream;
        video_element.onloadedmetadata=()=>{
            video_element.play()
        }


    }catch(err){

    }
}
button.addEventListener('click',async ()=>{
    // disable the button 
    button.disabled= true;
    // start picture in picture
    await video_element.requestPictureInPicture();
    // reset button
    button.disabled= false
    
})
// onload 
selecct_media_stream()