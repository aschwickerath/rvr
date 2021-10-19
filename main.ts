sphero.resetYaw()
let buttonA = input.buttonIsPressed(Button.A)
let buttonB = input.buttonIsPressed(Button.B)
let buttonAB = input.buttonIsPressed(Button.AB)
if (buttonA) {
    sphero.drive(0, 0)
} else if (buttonB) {
    sphero.drive(0, 0)
} else if (buttonAB) {
    sphero.drive(0, 0)
} else {
    sphero.drive(0, 0)
}
