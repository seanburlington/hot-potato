input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Yes)
    while (timer > 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
        timer += -1
    }
    basic.showIcon(IconNames.No)
})
let timer = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
