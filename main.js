var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  function start() { document.getElementById("textbox").innerHTML = "";
   recognition.start(); }
    recognition.onresult = function(event) {
        console.log(event);
     var Content = event.results[0][0].transcript;
      document.getElementById("textbox").innerHTML = Content;
       console.log(Content);
        // if(Content =="take my selfie") { console.log("taking selfie --- ");
        if(Content=="Take my selfie."){
            speak();
        }
     } 
        function speak(){
            var speech=window.speechSynthesis;
            speakdata="taking your selfie in 5 seconds";
            var utter=new SpeechSynthesisUtterance(speakdata); 
            speech.speak(utter);
            Webcam.attach(camera);
            setTimeout(function(){
                takesnapshot();
                save();
            },5000);
        }
        Webcam.set({
            width:360,height:250,image_format:'png',png_quality:90
        });
        camera=document.getElementById("camera")
        function takesnapshot(){
            Webcam.snap(function(data_uri){
                document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>"
            })
        }
        function save(){
            link=document.getElementById("link");
            console.log(link);
            image=document.getElementById("selfie_img").src;
            console.log(image);
            link.href=image;
            link.click();
        }