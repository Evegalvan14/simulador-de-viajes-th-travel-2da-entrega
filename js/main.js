
const IVA = 1.21
const presupuesto = []

const ofertas = [{id: 01, destino: 'Aéreo a Samaná, República Dominicana desde Buenos Aires', dias: '10 dias', mes: 'Mayo', precio: 180000},
                 {id: 02, destino: 'Hotel Viva Wyndhman Dominicus Beach All Inlusive, Punta Cana, República Dominicana', dias: '10 dias', mes: 'Abril', precio: 342000},
                 {id: 03, destino: 'Aéreo a Río de Janeiro, Brasil desde Córdoba', dias: '7 dias', mes: 'Mayo', precio: 190000},
                 {id: 04, destino: 'Entrada a Universal Studios, Orlando-Florida, EEUU', dias: '10 dias', mes: 'junio', precio: 150000},
                 {id: 05, destino: 'Entrada a parques de Disney, Orlando-Florida, EEUU', dias: '14 dias', mes: 'junio', precio: 175000},
                 {id: 06, destino: 'Hotel Viva Wyndham Azteca All inclusive, Playa del Carmen, México', dias: '14 dias', mes: 'junio', precio: 350000},
                 {id: 07, destino: 'Alquiler de auto en Madrid, España', dias: '21 dias', mes: 'julio', precio: 180000},
                 {id: 08, destino: 'Alquiler de auto en Wellington, Nueva Zelanda', dias: '5 dias', mes: 'agosto', precio: 105000},
                 {id: 09, destino: 'Crucero por el Caribe', dias: '20 dias', mes: 'septiembre', precio: 300000},
                 {id: 10, destino: 'Asistencia al viajero', dias: '30 dias', mes: 'abril', precio: 175000}]

const mensajeInicial = "Estas son nuestras ofertas disponibles, para continuar selecciona la oferta deseada por el código numérico: \n 01-'Aéreo a Samaná, República Dominicana desde Buenos Aires- 10 dias- Mayo- precio: $180000' \n 02 -'Hotel Viva Wyndhman Dominicus Beach All Inlusive, Punta Cana, República Dominicana - 10 dias- Abril - precio: $342000' \n03 -'Aéreo a Río de Janeiro, Brasil desde Córdoba - 7 dias - Mayo - precio: $190000' \n04 -'Entrada a Universal Studios, Orlando-Florida, EEUU -10 dias -junio - precio: 150000'\n05 -'Entrada a parques de Disney, Orlando-Florida, EEUU - 14 dias -junio - precio: $175000'\n06 -'Hotel Viva Wyndham Azteca All inclusive, Playa del Carmen, México - 14 dias - junio - precio: $350000'\n07 -'Alquiler de auto en Madrid, España - 21 dias - julio - precio: $180000' \n08 -'Alquiler de auto en Wellington, Nueva Zelanda - 5 dias - agosto - precio: $105000' \n09 - 'Crucero por el Caribe - 20 dias - septiembre - precio: $300000\n10 -'Asistencia al viajero - 30 dias - abril - precio: $175000"


function buscarOferta(id) {
    let resultado = ofertas.find((oferta)=> oferta.id === parseInt(id))
        return resultado
}

function finalizarCompra() {
    if (presupuesto.length === 0) {
        console.warn("El presupuesto está vacío.")
        return 
    }

    const shoppingViajes = new Compra(presupuesto)
    alert('💰 El costo total es de: ARS ' + shoppingViajes.obtenerSubtotal())

    let descuento = 0.80

    let respuesta = confirm("¿Deseas confirmar tu compra?")
    if (respuesta === true) {
        alert('✅ Confirmamos tu pago de: ARS ' + (shoppingViajes.obtenerSubtotal() * descuento) + "\n Muchas gracias por su compra :)")
        presupuesto.length = 0
    }
}

function verPresupuesto() {
    console.table(presupuesto)
}

function comprar() {
    let id = prompt (mensajeInicial) 
        if (!parseInt(id)) {
            alert("⛔️ Error en el código ingresado.")
            let respuesta = confirm("¿Deseas intentar de nuevo?")
                if (respuesta === true) {
                    comprar() 
                }
                return
        }

    let ofertaElegida = buscarOferta(id)

        if (ofertaElegida === undefined) {
            alert("⛔️ Error en el id ingresado.")
                return
        }

        alert(' ' + ofertaElegida.destino + ' - ha sido agregada al presupuesto.')
        presupuesto.push(ofertaElegida)

        let respuesta = confirm("¿Deseas agregar algo más a tu presupuesto?")
            if (respuesta === true) {
                comprar()
            } else {
                finalizarCompra()
            }
}

 comprar()
