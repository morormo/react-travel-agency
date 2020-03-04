export const formatTime = time => {
  if(time === undefined || isNaN(time) || time <0){
    return null;
  } else {
    const second = Math.floor(time % 60).toString();
    const minutes = Math.floor((time / 60)%60).toString();
    const hour = Math.floor((time /3600) % 60).toString();

    return hour.padStart(2,'0') + ':'+ minutes.padStart(2,'0')+ ':'+ second.padStart(2,'0');
  }
};