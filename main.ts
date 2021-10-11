input.onButtonPressed(Button.A, function () {
    divisore += 1
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    if (num % divisore == 0 && 0 == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    divisore += -1
    basic.showNumber(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    num = randint(2, 30)
    basic.showNumber(0)
    basic.showString("...")
    den = 0
    basic.showNumber(0)
})
let divisore = 0
let den = 0
let num = 0
num = 0
den = 0
