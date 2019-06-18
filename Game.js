class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(100);
        document.getElementById('start').addEventListener("click", this.startGame);
        this.spanResult = document.querySelector('.result');
        this.spanFunds = document.querySelector('.funds');
        this.boards = [...document.querySelectorAll(".color")];
        this.inputBid = document.querySelector('input');
        this.spanLosses = document.querySelector('.loss');
        this.spanWins = document.querySelector('.win');
        this.render();
    }
    render(colors = [], money = this.wallet.getWalletValue(), stats = [0, 0], result = "", wonMoney = 0, bid = 0) {
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i];
        })
        this.spanResult.textContent = result;
        if (result) {
            result = `Win:${wonMoney}`;
            result.style.color = "#40c94e";
        } else if (!result && result != "") {
            result = `Loss:${bid}`;
            result.style.color = "#a82626"

        }
        this.spanFunds.textContent = `Funds:${money}`;
        this.spanWins.textContent = `Wins:${stats[0]}`;
        this.spanLosses.textContent = `Losses:${stats[0]}`;
    }
    startGame() {

    }
}
const game = new Game(200);