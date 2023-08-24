"use strict";
function getHandScore(card) {
    //get highest score of card in hand with specific counting point
    console.log(card);
    let each_card = card.split(" "); // string to array
    let score = [0, 0, 0, 0]; // hearts(H), clubs(C), diamonds(D) or spades(S)
    let trip = []; // check triple
    for (let i = 0; i < each_card.length; i++) {
        let suit = each_card[i].slice(0, 1);
        let rank = each_card[i].slice(1);
        let point = 0;
        trip.push(rank);
        if (Number(rank))
            point += Number(rank);
        else if (rank == "A")
            point += 11;
        else {
            point += 10;
        }
        switch (suit) { //fill point to suit
            case "H":
                score[0] += point;
                break;
            case "C":
                score[1] += point;
                break;
            case "D":
                score[2] += point;
                break;
            case "S":
                score[3] += point;
                break;
        }
    }
    if (trip[0] == trip[1] && trip[1] == trip[2]) {
        if (trip[0] == "A")
            return 35;
        return 32.5;
    }
    return score.sort().reverse()[0];
}
console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("H4 H2 C3"));
console.log(getHandScore("S3 H3 C3"));
console.log(getHandScore("SA HA CA"));
