class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener("click", this.startGame.bind(this));
        this.spanResult = document.querySelector('.result');
        this.spanFunds = document.querySelector('.funds');
        this.boards = [...document.querySelectorAll(".color")];
        this.inputBid = document.querySelector('input');
        this.spanLosses = document.querySelector('.loss');
        this.spanWins = document.querySelector('.win');
        this.render();
    }
    render(colors = [], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i];
        })
        this.spanFunds.textContent = `Funds:${money}$`;

        if (result) {
            result = `Win:${wonMoney}$`;
            this.spanResult.style.color = "#40c94e";
        } else if (!result && result !== "") {
            result = `Loss:${bid}$`;
            this.spanResult.style.color = "#a82626"

        }
        this.spanResult.textContent = result;


        this.spanWins.textContent = `Wins:${stats[1]}`;
        this.spanLosses.textContent = `Losses:${stats[2]}`;
        this.inputBid.value = "";
    }
    startGame() {
        if (this.inputBid.value < 1) {
            return alert("Bid must be 1$ or higher");
        }
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) {
            return alert("Too high bid");
        }
        this.wallet.changeWallet(bid, "-");
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);
    }
}