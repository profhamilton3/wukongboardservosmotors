def on_button_pressed_a():
    basic.show_icon(IconNames.CHESSBOARD)
    wuKong.set_motor_speed(wuKong.MotorList.M1, 52)
    wuKong.set_servo_speed(wuKong.ServoList.S0, 39)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    wuKong.stop_all_motor()
    basic.show_icon(IconNames.BUTTERFLY)
    wuKong.set_servo_speed(wuKong.ServoList.S0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

wuKong.set_light_mode(wuKong.LightMode.BREATH)
basic.show_leds("""
    # # # . .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
""")

def on_forever():
    basic.show_icon(IconNames.SMALL_DIAMOND, 750)
    basic.show_icon(IconNames.SMALL_HEART, 500)
basic.forever(on_forever)
