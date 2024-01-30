const video = document.getElementById('remote_video');
$("#sound").on('click', function () {
  if(video.muted){
    $("#speaker").attr('src', 'img/sound_on.png');
    video.muted = false;
  }else{
    $("#speaker").attr('src', 'img/sound_off.png');
    video.muted = true;
  }
});
//connect();
//video.className = "rotate90";
window.setTimeout(function(){
  connect();
  video.className = "rotate90";
}, 1000);
