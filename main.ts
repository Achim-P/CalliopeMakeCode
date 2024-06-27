input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(2, 2)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.plot(2, 2)
})
led.plot(2, 2)
basic.forever(function () {
	
})
