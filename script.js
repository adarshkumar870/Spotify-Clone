console.log("Welcome to Spotify");

// Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
  {songName: "Ishqzaade", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  {songName: "Tera fitoor", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName: "Raabta", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName: "Sakhiyaan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName: "Bhula Dena", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName: "Tumhari Kasam", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
]
songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

 

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeallPlays = ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    
   

  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeallPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
  })
})


  

