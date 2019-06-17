class Result {
    static moneyWinInGame(result, bid) {
        if (result) {
            return 3 * bid;
        } else {
            return 0;
        }
    }
    static checkWiner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) {
            return true;
        } else {
            return false;
        }
    }
}