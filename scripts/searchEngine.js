var input = document.getElementById('s')
input.addEventListener('keypress', function(event) {
  const key = event.key;
  if (key === 'Enter') {
    // Change the search engine here
    window.open('https://google.com/search?q=%' + (input.value.split("").map(x=>x.charCodeAt(0)).map(y=>y.toString(16)).join("%")), '_blank')
  };
});
