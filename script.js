  const keys = Array.from(document.querySelectorAll('.key'));
  window.addEventListener('keydown', play_sound);
  
  function play_sound(e){
      const aud = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!aud) return;

    key.classList.add('playing');
    aud.currentTime = 0;
    aud.play();
  }
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') 
        return;
    e.target.classList.remove('playing');
  }
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  