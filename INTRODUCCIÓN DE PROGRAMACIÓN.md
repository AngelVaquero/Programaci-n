INTRODUCCIÓN DE PROGRAMACIÓN
Especificar muy concretamente los pasos que debe realizar la máquina.
Ejemplo: 
    Entrar a la casa:
        1. Acercarse a la puerta.
        2. Levantar la mano.
        3. Tomar la mantilla.
        4. Girar la mantilla hacia la izquierda.
        5. Empujar la puerta.
        6. Soltar la mantilla.
        7. Caminar hacia delante.
        8. Darse la vuelta en 180 grados.
        9. Levantar la mano.
        10. Tomar la mantilla.
        11. Empujar la puerta suavemente.
Ordenador puede:
    +
    -
    * (Multiplicar)
    /
También puede recordar:
    Nombres
    Correos
    Edades
    Contraseñas
    Direcciones
    ...
Dato: 
    Ejemplo:
        36, feliz, cerdo
Información:
    Ejemplo: 
        Usuario: 
            36 años
            Cerdo feliz
    Otro ejemplo:
        Dato: Salchica
        Información: perro salchicha
Variables contienen datos
    Ejemplo:
        x = 10
        Edad = 10
        Cantidad = 10  
    Dar nombre a las variables que tengan sentido
    Otro ejemplo:
        x = "cerdo"
        Animal = "cerdo"
        Menu = "cerdo"
        Holamundo = "cerdo"
Tipos de datos:
    Animal = "cerdo" -> String (Palabra, frase oración,pito)
    Edad = 36 -> Integer (Número ENTERO(1, 2, (3)))
    Harina = 0.5 -> Float (Número DECIMAL (0.5))
    Caracter = "a" -> Char (UN dato)
    Casado = true -> Boolean (True o false)
    Ejemplos:
        Holamundo = "cerdo feliz" -> String
        Juegos = 12 -> Integer
        Calzado = 10.5 -> Float
        Cansado = false -> Boolean
Funciones (recordar algoritmos para no tener que escribirlos repetidamente)
Ejemplo:
function EntrarALaCasa():
o
function entrar_a_la_casa():
Llamar una función:
    Entrar_a_la_casa()
Algoritmo: set de instrucciones para realizar una acción
    Otro algoritmo:
        function Entrar_a_la_casa():
            1. Acercarse a la puerta
            2. Patear muy fuerte
            3. Caminar hacia delante
    Otro:
        function Entrar_a_la_casa():
            1. Correr en dirección a la ventana
            2. Saltar
            3. Encogerse
    Múltiples algoritmos para el mismo problema
Orientación orientado a objetos o paradigma (Forma de como ver la vida, como resolver un problema): es una preferencia, no si está bien o mal hecho.
    Ejemplo:
        Personas {
            Edad: Integer
            Nombre: String
            ColorCabello: String
        } Plano de como crear una persona
    Todo esto se refiere a CLASE por así decirlo el plano de construcción de una casa
    PersonaCerdo = {
        Edad: 36
        Nombre: "cerdo"
        ColorCabello: "castaño"
    } 
    Esto ya sería la clase ya construida o OBJETO ("cerdo" sería una instancia de la clase persona)
    Otro ejemplo:
        PersonaFelipe = {
            Edad: 15
            Nombre: "Felipe"
            ColorCabello: "Rojo pasión" 
        }
    Ejemplo más reprensetativo:
        class Personas {
            Edad: integer
            Nombre: string
            ColorCabello: string
        }
        PersonaCerdo = new Personas(
            Edad: 36 años
            Nombre: "Cerdo"
            ColorCabello: "Castaño"
        )
        PersonaFelipe = new Personas(
            Edad: 15
            Nombre: "Felipe"
            ColorCabello: "Rojo pasión"
        )
        Asociar comportamiento a cada persona:
            Ejemplo:
            class Personas {
            Edad: integer
            Nombre: string
            ColorCabello: string
            DecirNombre():
                    Habla {tu nombre} 
            }
            PersonaCerdo = new Personas(
                Edad: 36 años
                Nombre: "Cerdo"
                ColorCabello: "Castaño"
                DecirNombre():
                    Habla {tu nombre}
            )
           PersonaFelipe = new Personas(
            Edad: 15
            Nombre: "Felipe"
            ColorCabello: "Rojo pasión"
            DecirNombre(): /Esto es un método que es al que vamos a llamar (función dentro de un objeto)/
               Habla {tu nombre}
           )
    Todo esto es útil para un usuario que tiene un nombre, una contraseña, un correo, ... para poder iniciar sesión, cambiar contraseñas,...
    SE USAN PARA REUTILIZAR CÓDIGO
    Indicar quien queremos que entre en la casa:
        Ejemplo:
            function Entrar_a_la_casa(Persona):
            si persona.edad > 17 -> it /Esto es Condición/
                correr hacia la ventana.
                Saltar.
                Encogerse.
            sino: -> else
                Vete de aquí. 
        Esto se usa para asignar porciones de código dependiendo de la opción elegida.
        Eso sirve para validar si es mayor de edad el usuario, si tiene algún permiso específico,...
¿Qué son los errores?
    Ejemplo:   
        function Entrar_a_la_casa(Persona):
            Acercarse a la puerta. /Si la puerta está abierta no dará error pero si está cerrdada sí./
            Caminar hacia delante. -> Bug (Errores involuntarios que dan mensajes diferentes) (estos errores van a variar según el lenguaje o lo que se esté utilizando: ERROR ! Puerta cerrada !)
!!Importante: APRENDER A LEER LOS MENSAJES DE ERROR QUE NOS OFRECE EL LENGUAJE DE PROGRAMACIÓN CON EL QUE TRABAJAMOS

