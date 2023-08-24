function getQuestionPart(phrases: string[]): string[] {
    //remove same longest word in every word n = 3
    let shortest: number = phrases[0].length
    for (let i = 1; i < 3; i++) {//find length of shortest string        checked
        if (phrases[i].length < shortest) shortest = phrases[i].length
    }


    for (let i = shortest; i > 0; i--) {
        let sub_phrases: string[][] = []
        for (let j = 0; j < 3; j++) {
            sub_phrases.push(substring(phrases[j], i))
        }

        if (get_share(sub_phrases) != "") {
            cut_share(get_share(sub_phrases))
            return phrases
        }
    }
    return []


    function substring(gotword: string, cut_length: number): string[] {//get sub array of string by cut length      checked
        let array_string: string[] = []
        for (let i = 0; i + cut_length <= gotword.length; i++) {
            array_string.push(gotword.slice(i, i + cut_length))
        }
        return array_string
    }

    function get_share(s_array: string[][]): string {//get share word in sub array      checked
        let test_set: string[] = s_array[0]
        let share_times: number = 0
        for (let i = 0; i < test_set.length; i++) {
            for (let j = 1; j < s_array.length; j++) {
                if (s_array[j].indexOf(test_set[i]) > -1) {
                    share_times += 1
                }


                if (share_times == 2)
                    return test_set[i]
            }
        }
        return ""
    }


    function cut_share(s: string) {//cut share string in every string       checked
        for (let i = 0; i < 3; i++) {
            phrases[i] = phrases[i].replace(s, "")
            if (phrases[i][0] == " ")//fill if frist is blank
                phrases[i] = phrases[i].replace(" ", "")
            if (phrases[i][phrases[i].length -1] == " ") //fill if last is blank
                phrases[i] = phrases[i].replace(" ", "")
        }
    }

}



console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]),) // ["ROOM", "SALTS", "BLOOD"]
console.log(" ")
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])) // ["BE", "GIRL", "SHIP"]
console.log(" ")
console.log(getQuestionPart(["FEELGOOD", "SOUND GOOD", "LOOK GOOD"])) // [ 'FEEL', 'SOUND', 'LOOK' ]
console.log(" ")
console.log(getQuestionPart(["FEEL GOOD", "FEEL SAD", "FEEL HAPPY"])) // [ 'GOOD', 'SAD', 'HAPPY' ]
