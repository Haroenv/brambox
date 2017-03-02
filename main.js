'use strict';

/* proper business                    */
console.log('aight, gonna start');

/* array with all sounds, always add  */
/* new audio files here too           */
var sounds = ['aight.mp3','mayeah.mp3','yo.mp3','g.mp3'];
var content = document.querySelector('.content');
var audio = document.querySelector('.audio');

/* add a button to start playing and  */
/* a matching audio element which is  */
/* not visible                        */
var addSound = function(add) {
  content.innerHTML += '\n<button class="button" data-sound="' + add + '">' + add + '</button>';
  audio.innerHTML += '\n<audio id="' + add + '"src="src/' + add + '"></audio>';
};

for (var i = 0; i < sounds.length; i++) {
  addSound(sounds[i]);
}

/* add click listener for each button */
/* on click the data-sound-matching   */
/* audio element starts playing       */
var songs = document.querySelectorAll('.content .button');

var addPlayListener = function(play) {
  play.addEventListener('click',function(){
    document.getElementById(this.getAttribute('data-sound')).play();
  });
};

for (var i = 0; i < songs.length; i++) {
  addPlayListener(songs[i]);
}
