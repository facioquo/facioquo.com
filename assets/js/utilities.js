function scrollToStart(id) {
  setTimeout(() => {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }, 200);
}

function scrollToEnd(id) {
  setTimeout(() => {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
  }, 200);
}
