var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
   recognition.start();
}
recognition. oneresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
    if(Content=="take my selfie")
    {
console.log ("takeing selfie ---")
speak ()
    }
}
function speak(){
  var  synth = window.speechSynthesis;
  speak_data =document.getElementById("textbox").value;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera = document.getElementById("camera");

 function take_snapshot()
 {
   Webcam.snap(function(data_uri));
   document.getElementById("result").innerHTML = '<img id="selfie image" src ="'+data_uri'">'</img>;
 }
 function setTimeOutButton(){
   setTimeOut(
     function() {
       alert ("setTimeOutButton");
     }
    , 3000);
   )
 }