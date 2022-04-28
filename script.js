console.log("Welcome to Spotify App");

//Initialize the Variables
let index = 1;
let audioElement =new Audio("songs/1.mp3");
console.log(parseInt(audioElement.duration));
audioElement.pause();
let masterPlay = document.getElementById("masterPlay");
let pause = document.querySelector(".pause");
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.querySelector(".gif");
let timestamp = document.getElementsByClassName("timestamp");
let songItems = document.getElementsByClassName("songItem");
let logo = document.getElementsByClassName("logo");
let songName = document.getElementsByClassName("songName");
let upperPause = document.getElementsByClassName("upperPause");
let prev = document.getElementById("prev");
let songT = document.querySelector(".songT");
let next = document.getElementById("next");
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    // {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath :"covers/1.jpg"},
    
];
let i=0;
Array.from(songItems).forEach(element=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    songName[i].innerHTML= songs[i].songName;
    i=i+1;

});

for(let i=1;i<=10;i=i+1)
{
    let y = new Audio(` songs/${i}.mp3 `);
    timestamp[i-1].innerHTML = `${parseInt(y.duration)}`;
    

}


// Handle play/pause click
masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            songT.innerHTML=songs[index-1].songName;
            gif.style.opacity="1";
          masterPlay.style.visibility= "hidden";
           pause.style.visibility = "visible";
        }

      
});

Array.from(logo).forEach(e=>{
 
    e.addEventListener('click',(x)=>{
      
        audioElement.pause();
        index = parseInt(x.target.id);
           
        audioElement.currentTime=0;
         audioElement = new Audio (`songs/${index}.mp3`);
        if(audioElement.paused || audioElement.currentTime<=0)
        {
           
            
            audioElement.play();
            songT.innerHTML=songs[index-1].songName;
            gif.style.opacity="1";
            masterPlay.style.visibility= "hidden";
            pause.style.visibility = "visible";
            // e.style.visibility= "hidden";
            // upperPause[j].style.visibility = "visible";

        }
       

    
});
});



pause.addEventListener('click',()=>{
    
   audioElement.pause();
   gif.style.opacity="0";
   masterPlay.style.visibility= "visible";
   pause.style.visibility = "hidden";
});

// Listen to Events
 audioElement.addEventListener('timeupdate',()=>{

    console.log("timeupdate");
    //Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;

 });
 prev.addEventListener('click',()=>{

        audioElement.pause();
        audioElement.currentTime=0;
        if(index!=1)
        {
            index=index-1;
        }
        else{
            index=10
        }
        audioElement = new Audio (`songs/${index}.mp3`);
        audioElement.play();
        gif.style.opacity="1";
        songT.innerHTML=songs[index-1].songName;


 });
next.addEventListener('click',()=>{

        audioElement.pause();
        audioElement.currentTime=0;
        if(index==10)
        {
            index=1;
        }
        else
        {
            index=index+1;
        }
        audioElement = new Audio (`songs/${index}.mp3`);
        audioElement.play();
        gif.style.opacity="1";
        songT.innerHTML= songs[index-1].songName;


 });

 myProgressBar.addEventListener("change",()=>{

        audioElement.currentTime = (audioElement.duration* (myProgressBar.value/100));

 });
