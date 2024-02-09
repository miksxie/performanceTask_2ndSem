function openEyes(){
    document.getElementById('eyes').src='eyes.png';
    document.getElementById('para').style.display='block';
}
function closeEyes(){
    document.getElementById('eyes').src='eyesClose.png';
    document.getElementById('para').style.display='none';

}
function openMouth(){
    document.getElementById('mouth').src='mouth.png';
    document.getElementById('mouth').style.width='95px';
    document.getElementById('mouth').style.top='-385px';
    document.getElementById('mouth').style.left='-98px';
    document.getElementById('paraMouth').style.display='block';
    document.getElementById('paraNose').style.display='block';
    document.getElementById('closeNose').style.display='none';

    
}
function closeMouth(){
    document.getElementById('mouth').src='mouthClose.png';
    document.getElementById('mouth').style.width='50px';
    document.getElementById('mouth').style.position='relative';
    document.getElementById('mouth').style.left='-73px';
    document.getElementById('mouth').style.top='-390px';
    document.getElementById('paraMouth').style.display='none';
    document.getElementById('para').style.display='none';
}