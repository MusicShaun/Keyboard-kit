function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
    if(!audio) return; 
  
    audio.currentTime = 0 ; //rewinds it to the start
    audio.play();
  
    key.classList.add('playing'); 
  
  }
  
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; 
  this.classList.remove('playing');
  console.log(e)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition )); 
window.addEventListener('keydown', playSound);