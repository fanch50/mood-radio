radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
