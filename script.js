// Variable indicating whose turn...
let turn = "X";
// variables to track number of wins...
let xWins = 0,
  oWins = 0;
// tracks the place on the board with value X
let xSpots = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// tracks the place on the board with value O
let oSpots = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let box = document.querySelectorAll(".box");

// Continuously updates player score...
document.querySelector("body").addEventListener("mousemove", () => {
  document.getElementById("x").innerText = xWins;
  document.getElementById("o").innerText = oWins;
});

// Game logic
box.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // the dimension of the block on which the user clicked
    let dim = e.target.className.split(" ");
    let row = dim[1];
    let col = dim[2];
    // checks if the clicked spot already has a value ...
    if (xSpots[row][col] == 1 || oSpots[row][col] == 1) return;
    // sets the text "X" or "O"
    ele.innerText = turn;
    // Sets 2 diff colors to "X"  and "O"
    box.forEach((ele) => {
      if (ele.innerText == "X") ele.style.color = "#FA1249";
      else ele.style.color = "#C8E6F9";
    });
    // adds 1 to the 2d array wher the user clicked
    if (turn == "X") {
      xSpots[row][col] = 1;
    } else {
      oSpots[row][col] = 1;
    }
    // checks if any of the user has won or not
    isWin(turn, row, col);
    // switches the turn
    turn = turn == "X" ? "O" : "X";
  });
});

// function to check if a user has won
let isWin = (turn, row, col) => {
  // when sum becomes 3 ... user wins
  let sum = 0;
  // checks if any of the row has all "X" or all "Y"
  for (i = 0; i < 3; i++) {
    if (turn == "O") {
      sum += oSpots[row][i];
    } else {
      sum += xSpots[row][i];
    }
  }
  if (sum == 3) {
    setTimeout(() => {
      alert(`Congratulations ${turn} wins!`);
    }, 0);
    // increments score
    turn == "X" ? xWins++ : oWins++;
    // clears the board
    newGame();
    return;
  }
  sum = 0;
  // checks if any of the column has all "X" or all "Y"
  for (i = 0; i < 3; i++) {
    if (turn == "O") {
      sum += oSpots[i][col];
    } else {
      sum += xSpots[i][col];
    }
  }
  if (sum == 3) {
    setTimeout(() => {
      alert(`Congratulations ${turn} wins!`);
    }, 0);
    turn == "X" ? xWins++ : oWins++;
    newGame();
    return;
  }
  sum = 0;
  // checks if the diagonal(left to right) has all "X" or all "Y"
  for (i = 0; i < 3; i++) {
    if (turn == "O") {
      sum += oSpots[i][i];
    } else {
      sum += xSpots[i][i];
    }
  }
  if (sum == 3) {
    setTimeout(() => {
      alert(`Congratulations ${turn} wins!`);
    }, 0);
    turn == "X" ? xWins++ : oWins++;
    newGame();
    return;
  }
  sum = 0;
  // checks if the diagonal(right to left) has all "X" or all "Y"
  for (i = 0; i < 3; i++) {
    if (turn == "O") {
      sum += oSpots[i][2 - i];
    } else {
      sum += xSpots[i][2 - i];
    }
  }
  if (sum == 3) {
    setTimeout(() => {
      alert(`Congratulations ${turn} wins!`);
    }, 0);
    turn == "X" ? xWins++ : oWins++;
    newGame();
    return;
  }
};

// to restart the game ( score becomes 0 )
document.querySelector("#restart").addEventListener("click", () => {
  newGame();
  xWins = oWins = 0;
});

let newGame = () => {
  setTimeout(() => {
    turn = "X";
    xSpots = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    oSpots = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    box.forEach((ele) => {
      ele.innerText = "";
    });
  }, 0);
};
