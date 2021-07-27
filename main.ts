let degree = 0
input.calibrateCompass()
basic.forever(function () {
    degree = input.compassHeading()
    music.setVolume(200)
    if (degree < 45) {
        basic.showString("N")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (degree < 135) {
        basic.showString("E")
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (degree < 225) {
        basic.showString("S")
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (degree < 315) {
        basic.showString("W")
        music.playTone(494, music.beat(BeatFraction.Eighth))
    }
})
