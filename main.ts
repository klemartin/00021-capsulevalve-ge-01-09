input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
    basic.pause(wait)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 50)
    basic.pause(wait)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 0)
})
let wait = 0
wait = 500
