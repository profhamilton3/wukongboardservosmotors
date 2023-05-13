input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 52)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 39)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
    basic.showIcon(IconNames.Butterfly)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 0)
})
wuKong.setLightMode(wuKong.LightMode.BREATH)
basic.showLeds(`
    # # # . .
    . . . # .
    . . . # .
    . . . # .
    . . . # .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond, 750)
basic.showIcon(IconNames.SmallHeart, 500)
})
