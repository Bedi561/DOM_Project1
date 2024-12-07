



/* 
The document.querySelectorAll() method in JavaScript is used to select and retrieve a list of elements from the 
DOM (Document Object Model) based on a specified CSS selector. It returns a NodeList, which is a collection of DOM elements 
that match the selector. */

const squares = document.querySelectorAll('.colorsquare');
console.log(squares);


// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value);


// could use for each loop here
squares.forEach(squares => console.log(squares.value));

const timesClicked = {'red': 0, 'yellow': 0, 'blue': 0};

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});
