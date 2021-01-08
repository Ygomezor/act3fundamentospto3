controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Digita un Número Entero")
    num1 = game.askForNumber("Digita un Número Entero")
    game.splash("Digita otro Número Entero")
    num2 = game.askForNumber("Digita otro Número Entero")
    game.splash("Hmm...")
    game.splash("La suma es:", convertToText(num1 + num2))
    if ((num1 + num2) % 2 == 0) {
        scene.setBackgroundColor(7)
        game.splash("Resultado es Par!")
    } else {
        scene.setBackgroundColor(5)
        game.splash("Resultado es Impar!")
        game.reset()
    }
})
let num2 = 0
let num1 = 0
game.splash("")
scene.setBackgroundColor(9)
num1 = 0
num2 = 0
game.splash("Identifica si la suma de", "dos números es Par o Impar")
game.splash("Cuando...")
game.splash("Resultado = Par", "Fondo = Amarillo")
game.splash("Resultado = Impar", "Fondo = Verde")
game.splash("Entonces...")
