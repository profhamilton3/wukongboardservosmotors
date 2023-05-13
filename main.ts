input.onButtonPressed(Button.A, function on_button_pressed_a() {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 52)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    wuKong.stopAllMotor()
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
})
wuKong.setLightMode(wuKong.LightMode.BREATH)
basic.forever(function on_forever() {
    basic.showIcon(IconNames.Heart, 750)
    basic.showIcon(IconNames.SmallHeart, 500)
})
