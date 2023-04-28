const cells = document.querySelectorAll(".cells");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let currentPlayer = "X" ;
  let gameEnd = false;
  
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (gameEnd) {
        return;
      }
      if (cell.textContent === "") {
        cell.textContent = currentPlayer;
            if(currentPlayer === "X"){
                cell.style.backgroundColor = "#E8FB4B";
            }
            else{
                cell.style.backgroundColor = "#66FD3F";}
        if (checkWin()) {
          gameEnd = false;
          alert(`${currentPlayer} es el ganador!`);
          if (currentPlayer === "X"){
            playerXplayer++;
            XPLAYER.textContent = `Puntaje X: ${playerXplayer}`;
          }else{
            playerOplayer++;
            OPLAYER.textContent = `Puntaje O: ${playerOplayer}`;
          }
        } else if (checkTie()) {
          gameEnd = false;
          alert("Excelente juego, es un empate!");
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });
  
  function checkWin() {
    return winConditions.some(condition => {
      return condition.every(index => {
        return cells[index].textContent === currentPlayer;
      });
    });
  }

  function checkTie() {
      return Array.from(cells).every(cell => {
        return cell.textContent !== "";
      });
    }

    function gameReset() {
        const cells = document.querySelectorAll(".cells");
        cells.forEach((cell) => {
            cell.textContent = "";
            cell.style.backgroundColor = "white"
        });
    }

let playerXplayer = 0;
let playerOplayer = 0;

const XPLAYER = document.getElementById('scoreX');
const OPLAYER = document.getElementById('scoreO');

