let currentPlayer = 'X';
let playerX, playerO;

function startGame() {
    playerX = document.getElementById('playerX').value;
    playerO = document.getElementById('playerO').value;

    if (playerX === '' || playerO === '') {
        alert('Por favor, insira os nomes de ambos os jogadores.');
        return;
    }

    document.querySelector('.players').style.display = 'none';
    document.getElementById('game').classList.remove('hidden');

    document.getElementById('message').textContent = `Vez de ${playerX} (X)`;
}

function makeMove(cell) {
    if (cell.textContent === '' && !isGameOver()) {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            document.getElementById('message').textContent = `Vitória de ${currentPlayer === 'X' ? playerX : playerO} (${currentPlayer})`;
        } else if (checkTie()) {
            document.getElementById('message').textContent = 'Empate!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').textContent = `Vez de ${currentPlayer === 'X' ? playerX : playerO} (${currentPlayer})`;
        }
    }
}

function isGameOver() {
    return document.getElementById('message').textContent !== '';
}

function checkWin() {
    const cells = document.querySelectorAll('.cell');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return true;
        }
    }

    return false;
}

function checkTie() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        if (cell.textContent === '') {
            return false;
        }
    }
    return true;
}

