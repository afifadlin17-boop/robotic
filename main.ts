let distance = 0
basic.showString("ARTIC")
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # # #
        . . # . .
        . . # . .
        `)
    distance = Tinybit.Ultrasonic_Car()
    if (0 == distance) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 95)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 95)
        basic.pause(100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 95)
    }
})
basic.forever(function () {
    if (distance < 2) {
        Tinybit.Music_Car(Tinybit.enMusic.nyan)
        basic.showIcon(IconNames.No)
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    } else {
        basic.showIcon(IconNames.Yes)
        music.ringTone(698)
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
    }
})
