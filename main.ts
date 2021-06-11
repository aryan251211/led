basic.forever(function () {
    for (let X = 0; X <= 5; X++) {
        for (let Y = 0; Y <= 5; Y++) {
            led.toggle(X, Y)
            basic.pause(200)
        }
    }
})
