function getClockAngle(hh_mm: string): number {
    //find lower angle in clock hand
    let short_a: number = ((Number(hh_mm.split(":")[0])%12) + (Number(hh_mm.split(":")[1])/60))*30//get angle for long hands 12 * 30 = 360 deg
    let long_a: number = Number(hh_mm.split(":")[1])*6//get angle for short hands 60 * 6 = 360 deg

    let ans:number = Math.abs(short_a - long_a)//more - less
    return (ans < 180)? ans : 360-ans //check if big angle ans will revarse
}

console.log(getClockAngle("09:00")) // 90
console.log(getClockAngle("17:30")) // 15
console.log(getClockAngle("12:00")) // 0
console.log(getClockAngle("14:00")) // 
console.log(getClockAngle("14:01")) // deferent 1 min is +- 5.5 deg
console.log(getClockAngle("18:00")) // 180