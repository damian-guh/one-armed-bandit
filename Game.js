class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(100);
        document.getElementById('start').addEventListener("click", this.startGame);
        this.spanFunds = document.querySelector(".funds");
        this.boards = document.querySelectorAll(".color");
        this.inputBid = document.querySelector('input');
        this.spanLosses = document.querySelector('.loss');
        this.spanWins = document.querySelector('.win');
    }
    render() {

    }
    startGame() {

    }
}
const game = new Game();