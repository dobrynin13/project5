function MoveStop () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, PCA96852)
}
function MoveRight () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, PCA96852)
}
function MoveBack () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, PCA96852)
}
function t_right () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, PCA96852)
}
function t_left () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, PCA96852)
}
function MoveLeft () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, PCA96852)
}
function tern_left_one () {
    t_left()
    basic.pause(200)
    MoveForward()
    basic.pause(666)
    t_right()
    basic.pause(200)
    MoveForward()
    basic.pause(666)
    t_right()
    basic.pause(200)
    MoveForward()
    basic.pause(666)
    t_left()
    basic.pause(200)
}
function MoveForward () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 100, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, PCA96852)
}
function tern_right_one () {
    t_right()
    basic.pause(200)
    MoveForward()
    basic.pause(666)
    t_left()
    basic.pause(200)
    MoveForward()
    basic.pause(666)
    t_left()
    basic.pause(200)
    MoveForward()
    basic.pause(666)
    t_right()
    basic.pause(200)
}
let r_line = 0
let l_line = 0
let PCA96852 = 0
let strip = neopixel.create(DigitalPin.P0, 18, NeoPixelMode.RGB)
strip.clear()
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
let turn = 0
let turn_right = 0
let turn_left = 0
PCA96852 = PCA9685.chipAddress("0x43")
PCA9685.init(PCA96852, 0)
PCA9685.reset(PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, PCA96852)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, PCA96852)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
let distance = 0
basic.pause(2000)
basic.forever(function () {
    if (turn_right) {
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Red))
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Red))
        basic.pause(300)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
basic.forever(function () {
    if (turn_left) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        basic.pause(300)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
basic.forever(function () {
    l_line = pins.digitalReadPin(DigitalPin.P13)
    r_line = pins.digitalReadPin(DigitalPin.P13)
    distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    basic.pause(100)
})
basic.forever(function () {
    turn_left = pins.digitalReadPin(DigitalPin.P4)
    turn_right = pins.digitalReadPin(DigitalPin.P13)
    if (l_line == 0 && r_line == 0) {
        let right_obstacle = 0
        let left_obstacle = 0
        if (turn_left == 1 && turn_right == 1) {
            turn = 0
            turn_left = 0
            turn_right = 0
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            if (distance <= 20 && distance > 2) {
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, PCA96852)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, PCA96852)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, PCA96852)
                PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, PCA96852)
            } else {
                if (distance <= 95) {
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, distance + 5, PCA96852)
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, PCA96852)
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, distance + 5, PCA96852)
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, PCA96852)
                } else {
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, PCA96852)
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, PCA96852)
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, PCA96852)
                    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, PCA96852)
                }
            }
        }
        if (left_obstacle == 1 && right_obstacle == 0) {
            turn = 0
            turn_left = 0
            turn_right = 1
            MoveLeft()
        }
        if (left_obstacle == 0 && right_obstacle == 1) {
            turn = 0
            turn_left = 0
            turn_right = 0
            MoveRight()
        }
        if (left_obstacle == 0 && right_obstacle == 0) {
            turn = 1
            turn_left = 0
            turn_right = 0
            if (Math.randomBoolean()) {
                t_left()
            } else {
                t_right()
            }
        }
    } else {
        MoveStop()
    }
})
basic.forever(function () {
    if (turn) {
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        basic.pause(300)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
