
var button = document.getElementById('c');
var count = 0;

button.addEventListener('click', function() {
  count++;

  if (count == 17) {
    var domanda = window.prompt('4°, t _ _ _ _ e, ???');
    count = 0;
  }
  if (domanda == 'Tedone') {
    window.location = "https://youtu.be/ozRyRcbx57I";
  }
});
