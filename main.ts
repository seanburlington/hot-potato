input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Yes)
    while (timer > 0) {
        basic.pause(1000)
        timer += -1
    }
    basic.showIcon(IconNames.Square)
})
let timer = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
