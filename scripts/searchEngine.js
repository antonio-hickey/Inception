var input = document.getElementById('s')
input.addEventListener('keypress', function(event) {
  const key = event.key;
  if (key === 'Enter') {
    // Change the search engine here
    window.open('https://google.com/search?q=' + input.value, '_blank')
  };
});

