let nombre = prompt("¡Bienvenido a Heladería Delicias! Por favor, introduce tu nombre:");
alert("Hola, " + nombre + ". ¡A continuación verás nuestro menú de helados!");

const heladosDisponibles = [
    { 
        nombre: "Helado de Vainilla",
        precio: 1500,
        toppings: [
            { nombre: "Chispas de Chocolate", precio: 500 },
            { nombre: "Salsa de Caramelo", precio: 700 },
            { nombre: "Nueces", precio: 800 }
        ]
    },
    { 
        nombre: "Helado de Chocolate",
        precio: 1700,
        toppings: [
            { nombre: "Crema Batida", precio: 600 },
            { nombre: "Fresas Frescas", precio: 900 },
            { nombre: "Salsa de Chocolate", precio: 700 }
        ]
    },
    { 
        nombre: "Helado de Fresa",
        precio: 1600,
        toppings: [
            { nombre: "Granola", precio: 500 },
            { nombre: "Sirope de Frutas", precio: 600 },
            { nombre: "Chips de Galleta", precio: 800 }
        ]
    },
    { 
        nombre: "Helado de Menta",
        precio: 1800,
        toppings: [
            { nombre: "Menta Fresca", precio: 500 },
            { nombre: "Salsa de Menta", precio: 700 },
            { nombre: "Chispas de Chocolate", precio: 500 }
        ]
    },
    
    { 
        nombre: "Helado de Tiramisú",
        precio: 1900,
        toppings: [
            { nombre: "Crema de Café", precio: 600 },
            { nombre: "Chocolate Rallado", precio: 700 },
            { nombre: "Galleta de Amaretto", precio: 800 }
        ]
    },
    { 
        nombre: "Helado de Piña Colada",
        precio: 1800,
        toppings: [
            { nombre: "Trozos de Piña", precio: 500 },
            { nombre: "Coco Rallado", precio: 600 },
            { nombre: "Salsa de Ron", precio: 700 }
        ]
    },
    { 
        nombre: "Helado de Cheesecake",
        precio: 2000,
        toppings: [
            { nombre: "Trocitos de Cheesecake", precio: 800 },
            { nombre: "Salsa de Frambuesa", precio: 600 },
            { nombre: "Galleta Triturada", precio: 700 }
        ]
    }
];

const mensajeOpciones = "Estos son nuestros helados disponibles:\n\n" +
    heladosDisponibles.map((helado, index) => {
        let mensaje = `${index + 1}. ${helado.nombre} - $${helado.precio}`;
        if (helado.toppings.length > 0) {
            mensaje += "\n  Toppings disponibles:";
            helado.toppings.forEach((topping) => {
                mensaje += `\n    - ${topping.nombre} - $${topping.precio}`;
            });
        }
        return mensaje;
    }).join('\n') +
    "\n\nPor favor, introduce el número del helado que deseas (1-7), o presiona 'x' para salir:";

function mostrarMenu() {
    let totalCompra = 0;

    do {
        let opcionElegida = prompt(mensajeOpciones);

        switch (opcionElegida) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
                let opcionSeleccionada = heladosDisponibles[parseInt(opcionElegida) - 1];
                totalCompra += opcionSeleccionada.precio;
                alert("Has elegido el helado de " + opcionSeleccionada.nombre + ". ¡Disfrútalo!");

                
                if (opcionSeleccionada.toppings.length > 0) {
                    let agregarToppings = confirm("¿Deseas agregar toppings a tu helado?");
                    if (agregarToppings) {
                      
                        opcionSeleccionada.toppings.forEach((topping) => {
                            let agregar = confirm(`¿Deseas agregar ${topping.nombre} por $${topping.precio}?`);
                            if (agregar) {
                                totalCompra += topping.precio;
                            }
                        });
                    }
                }
                break;
            case "x":
                alert("Gracias por visitar Heladería Delicias. ¡Que tengas un día refrescante!");
                return;
            default:
                alert("Por favor, selecciona una opción válida.");
        }

        alert("Total a pagar hasta ahora: $" + totalCompra);

    } while (true);

    let comprarMas = confirm("¿Quieres comprar algo más?");
    if (!comprarMas) {
        alert("Gracias por tu compra en Heladería Delicias. Total a pagar: $" + totalCompra);
    } else {
        mostrarMenu();
    }
}

mostrarMenu();
