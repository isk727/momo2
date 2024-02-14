const video = document.getElementById('remote_video');
$("#sound").on('click', function () {
  if(video.muted){
    $("#speaker").attr('src', 'img/sp_on.png');
    video.muted = false;
  }else{
    $("#speaker").attr('src', 'img/sp_off.png');
    video.muted = true;
  }
});
window.setTimeout(function() {
  connect();
  $("#sound").css('visibility', 'visible');
}, 1000);
