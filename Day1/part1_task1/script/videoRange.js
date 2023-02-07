var vid = document.getElementById("vid");
var vidRange = document.getElementById("vidRange");
var speedRange= document.getElementById("speedRange");
const curtimetext = document.getElementById('curtimetext');
const durtimetext = document.getElementById("durtimetext");
vid.addEventListener('timeupdate',function(){
	var nt = vid.currentTime * (100 / vid.duration);
	vidRange.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);

	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);

	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
})

// Set video time to progress
function setVideoProgress() {
    vid.currentTime = (+progress.value * vid.duration) / 100;
}

function playVideo() {
    vid.play();
  }

function stopVideo() {
    vid.pause();
}

function muteVideo(){
    vid.muted = true;
}

function SetVolume(val)
{
    vid.muted = false;
    vid.volume = val / 100;
}

function IncreasesSpeed(val){
    vid.playbackRate=val;
    vid.playbackRate*=speedRange.value;
}

function increseSpeed(){
    vid.playbackRate += 5;
}

function decresesSpeed(){
    vid.playbackRate -= 5;
}

function goToBegin(){
    vid.currentTime = 0;
}

function goToEnd(){
    vid.currentTime = vid.duration;

}





