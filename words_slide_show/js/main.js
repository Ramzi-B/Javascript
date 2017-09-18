var myWords_i = 0,
    myWords_array = ["Smart", "Beautiful", "Cute", "Loyal", "Happy", "Strong", "The Best"],
    myWords_el;


function myWordsNext() {
  myWords_i++;
  myWords_el.style.opacity = 0;
  if(myWords_i > (myWords_array.length - 1)) {
    myWords_i = 0;
  }
  setTimeout('myWordsSlide()', 1000);
}

function myWordsSlide() {
  myWords_el.innerHTML = myWords_array[myWords_i];
  myWords_el.style.opacity = 1;
  setTimeout('myWordsNext()', 2000);
}

myWords_el = document.getElementById('myWords');
myWordsSlide();
