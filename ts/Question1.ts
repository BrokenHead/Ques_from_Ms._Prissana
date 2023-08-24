function getHandScore(card: string): number {
    //get highest score of card in hand with specific counting point
    console.log(card)
    let each_card: string[] = card.split(" ") // string to array
    let score: number[] = [0, 0, 0, 0]// hearts(H), clubs(C), diamonds(D) or spades(S)
    let trip: string[] = []// check triple

    for (let i = 0; i < each_card.length; i++) {
        let suit: string = each_card[i].slice(0, 1)
        let rank: string = each_card[i].slice(1)
        let point: number = 0
        trip.push(rank)

        if (Number(rank))
            point += Number(rank)
        else if (rank == "A")
            point += 11
        else {
            point += 10
        }

        switch (suit) {//fill point to suit
            case "H":
                score[0] += point
                break;
            case "C":
                score[1] += point
                break;
            case "D":
                score[2] += point
                break;
            case "S":
                score[3] += point
                break;

        } 
    }
    if (trip[0] == trip[1] && trip[1] == trip[2]) {
        if (trip[0] == "A")
            return 35
        return 32.5
    }
    return score.sort().reverse()[0]

}



console.log(getHandScore("S8 S10 CA"))
console.log(getHandScore("H4 H2 C3"))
console.log(getHandScore("S3 H3 C3"))
console.log(getHandScore("SA HA CA"))
