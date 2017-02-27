export const formattedSeconds = (sec) => Math.floor(sec / 60) +  'm ' + ('0' + sec % 60).slice(-2) + 's';
