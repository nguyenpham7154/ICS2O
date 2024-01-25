// Stopwatch
let milliseconds = 0;
let timer;

function startWatch() {
  clearInterval(timer);
  timer = setInterval(()=>{ 
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    watch.value = 
      ('0'+ dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0'+ dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+ dateTimer.getUTCMilliseconds()).slice(-3,-1);
  }, 10);
};

function pauseWatch() {
  clearInterval(timer);
};

function resetWatch() {
  clearInterval(timer);
  milliseconds = 0;
  watch.value = '00:00:00';
};

// Graph dimensions
var rowLength = 9, columnLength = 9, setBombs = 10;
// declare 3 matrixes containing the state of each coordinate.
var graph = [], revealed = [], flagged = [], left = [];
var board = document.getElementById("board");
var flagCount = document.getElementById("flagCountDisplay");
var watch = document.getElementById("watchDisplay");
var end = document.getElementById("endDisplay");

// Adjacent nodes
var directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

// Counts how many mines are around tile
function countAdjacentMines(row, column) {
  var count = 0;
  // Searches each direction
  for (let i = 0; i < 8; i++) {
    var searchRow = row + directions[i][0];
    var searchColumn = column + directions[i][1];
    // If search tile coordinate is within the graph and is a mine, add count
    if (searchRow >= 0 && searchRow < rowLength && searchColumn >= 0 && searchColumn < columnLength && graph[searchRow][searchColumn] == "💣") {
      count++;
    }
  }
  return count;
}

// Clears all adjacent blank tiles
function clearSafeArea(row, column) {  
  //If revealed then backtrack
  if (revealed[row][column]) return;
  
  // Marks tile as revealed
  revealed[row][column] = true;

  // Loops through each direction
  for (let i = 0; i < 8; i++) {
    var searchRow = row + directions[i][0];
    var searchColumn = column + directions[i][1];
    // If search tile coordinate is within the graph
    if (searchRow >= 0 && searchRow < rowLength && searchColumn >= 0 && searchColumn < columnLength) {
      // If search tile is blank then repeat
      if (graph[searchRow][searchColumn] == "0") {
        clearSafeArea(searchRow, searchColumn);
        var button = document.getElementById(row + "," + column);
        button.style.color = "#C0C0C0";
        button.style.border = "0.1px solid #8A8A8A";
        button.style.backgroundColor = "#C0C0C0";
      }
      else {
        revealTile(searchRow, searchColumn);
      }
    }
  }
}

// Ends game
function endGame() {
  // Gets all elements/buttons inside the graph and disables them 
  var buttons = document.getElementById("board").getElementsByTagName('*');
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// End of the game
function revealBombs() {
  endGame();
  pauseWatch();
  end.innerHTML = "L skill issue";
  // Shows all bombs
  for (let x = 0; x < rowLength; x++) {
    for (let y = 0; y < columnLength; y++) {
      if (graph[x][y] == "💣") {
        // Highlight tile if flagged correctly
        var button = document.getElementById(x + "," + y);
        if (flagged[x][y]) {
          button.style.border = "0.1px solid #8A8A8A"
          button.style.backgroundColor = "pink";
        }
        // Changes color of all bombs to make them visable
        else {
          button.style.color = "rgba(0, 0, 0, 1)";
        }
      }
    }
  }
}

// Reveal the tile pressed on
function revealTile(row, column) {
   
  // If flagged then do nothing
  if (flagged[row][column]) return;
  
  // Gets corresonding button id
  var button = document.getElementById(row + "," + column);
  button.style.border = "0.1px solid #8A8A8A";
  button.style.backgroundColor = "#C0C0C0";
  
  // Sets color for digits
  switch (graph[row][column]) {
    case 6 :
      revealed[row][column] = true;
      button.style.color = "#00A36C";
      break;
    case 5 :
      revealed[row][column] = true;
      button.style.color = "#800020";
      break;
    case 4 :
      revealed[row][column] = true;
      button.style.color = "purple";
      break;
    case 3 :
      revealed[row][column] = true;
      button.style.color = "red";
      break;
    case 2 : case 8 :
      revealed[row][column] = true;
      button.style.color = "green";
      break;
    case 1 : case 7 :
      revealed[row][column] = true;
      button.style.color = "blue";
      break;
    case 0 :
      clearSafeArea(row, column);
      break;
    case "💣":
      button.style.backgroundColor = "red";
      button.style.color = "red";
      revealBombs();
      return;
  }

  // Counts how many tiles are unrevealed by filtering all the true elements
  var revealedTiles = 0;
  for (let x = 0; x < rowLength; x++) {
    revealedTiles += revealed[x].filter(Boolean).length;
  };

  // Starts timer when clicking first tile
  if (revealedTiles > 0) {startWatch()}
  // Ends game if last unbombed tile is revealed
  if (revealedTiles == rowLength * columnLength - setBombs) {
    endGame();
    pauseWatch();
    end.innerHTML = "You Won!";
  }
  console.log(revealedTiles);
}

// Disable right click on page
window.addEventListener('contextmenu', (event) => {
  event.preventDefault()
})

// Placing the flags
function setFlag(row, column) {
  var button = document.getElementById(row + "," + column);
  // If already flagged, remove flag from button and insert original digit/mine
  if (flagged[row][column]) {
    flagged[row][column] = false;
    button.innerHTML = graph[row][column];
    button.style.color = "rgba(0, 0, 0, 0)";
    flagCount.value = Number(flagCount.value) + 1;
  }
  // if unvistited and unflagged, remove digit/mine from button and insert flag
  else if (!revealed[row][column]) {
    flagged[row][column] = true;
    button.innerHTML = "🚩";
    button.style.color = "red";
    flagCount.value -= 1;
  }
}

// Creating individual tiles as buttons on the board
function createButton(row, column, content) {
  var button = document.createElement("button");
  button.innerHTML = content;
  // Assigns an id to each tile
  button.id = row + "," + column;
  // Sets flag when right click
  button.setAttribute("oncontextmenu", "setFlag(" + row + ", " + column + ");");
  // Reveals when left click
  button.setAttribute("onclick", "revealTile(" + row + ", " + column + ");");
  // Appends tile to graph
  board.appendChild(button);
}

// Creates a board from the ground up
function createGraph() {
  resetWatch()
  end.innerHTML = "";
  board.innerHTML = "";
  graph = [], revealed = [], flagged = [], bombs = setBombs;
  flagCount.value = setBombs;
  
  // Create matrixes
  for (let x = 0; x < rowLength; x++) {
    // Temporary arrays to append matrixes 
    let graphFiller = [], revealedFiller = [], flaggedFiller = [];
    for (let y = 0; y < columnLength; y++) {
      graphFiller.push("0");
      revealedFiller.push(false);
      flaggedFiller.push(false);
    }
    graph.push(graphFiller);
    revealed.push(revealedFiller);
    flagged.push(flaggedFiller);
  }

  // Randomises coordinates then sets bombs
  while (bombs > 0) {
    var randomRow = Math.floor(rowLength * Math.random());
    var randomCol = Math.floor(columnLength * Math.random());

    // if unbombed tile set bomb
    if (graph[randomRow][randomCol] != "💣") {
      graph[randomRow][randomCol] = "💣";
      bombs--;  
    }
  }
  
  // Set number values for tiles
  for (let x = 0; x < rowLength; x++) {
    for (let y = 0; y < columnLength; y++) {
      if (graph[x][y] != "💣") {
        graph[x][y] = countAdjacentMines(x, y);
      }
    }
  }
  
  // Lays out buttons in a grid
  for (let x = 0; x < rowLength; x++) {
    for (let y = 0; y < columnLength; y++) {
      createButton(x, y, graph[x][y]);
    }
    // Starts a new row
    board.innerHTML += "<br>";
  }
}

// Change difficulty
function changeDifficulty() {
  switch (document.getElementById("changeDifficulty").value) {
    case "1" :
      columnLength = 9; 
      rowLength = 9;
      setBombs = 10;
      createGraph();
      break;
    case "2" :
      columnLength = 16; 
      rowLength = 16;
      setBombs = 40;
      createGraph();
      break;
    case "3" :
      columnLength = 30;
      rowLength = 16;
      setBombs = 99;
      createGraph();
      break;
    case "4" :
      // Create input for values
      columnLength = document.getElementById("");
      rowLength = document.getElementById("");
      setBombs = document.getElementById("");
  }
}

createGraph()

// Sources used
// https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2021-2022/Makalah/Makalah-IF2211-Stima-2022-K2%20(30).pdf
// https://dash.harvard.edu/bitstream/handle/1/14398552/BECERRA-SENIORTHESIS-2015.pdf
// https://leetcode.com/problems/minesweeper/solutions/149798/javascript-dfs-and-bfs-clean-solution/
// https://fireship.io/courses/javascript/interview-graphs/
// https://codepen.io/henriquelothammer/pen/NWNQBwq 