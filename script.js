let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.querySelectorAll('.cell')[index].textContent = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').textContent = currentPlayer + ' wins!'; // Corrigido para 'currentPlayer'
        } else if (!board.includes('')) {
            document.getElementById('status').textContent = 'It\'s a Draw';
        }
        currentPlayer = (currentPlayer === 'x') ? '0' : 'x';
    }
}

function checkWinner() { // Corrigido a palavra "fuction" para "function"
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];
    return winningCombos.some(combo => {
        return board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== '';
    });
}
