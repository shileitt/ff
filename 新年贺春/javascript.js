var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];

//当音乐播放完毕后，图标自动停止
audio.addEventListener("ended",function(event){
	music.setAttribute("class","");
},false);

//点击图标控制音乐播放
//music.onclick = function(){
//	if (audio.paused){
//		audio.play();
//		this.setAttribute("class","play");
//	}else{
//		audio.pause();
//		this.setAttribute("class","");
//	}
//	
//}

//使用监听事件不会有0.3s的延迟
music.addEventListener("touchstart",function(even){
	music.onclick = function(){
	if (audio.paused){
		audio.play();
		this.setAttribute("class","play");
	}else{
		audio.pause();
		this.setAttribute("class","");
	}
	
}

},false);

page1.addEventListener("touchstart",function(event){
	page1.style.display = "none";
	page2.style.display = "block";
	page3.style.display = "block";
	page3.style.top = "100%";
	
	setTimeout(function(){
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},5500);
},false);
