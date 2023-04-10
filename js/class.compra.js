class Compra {
    constructor(presupuestoDeCompra) {
        this.presupuesto = presupuestoDeCompra
    }
    obtenerSubtotal() {
        if (this.presupuesto.length > 0) {
            return this.presupuesto.reduce((acc, oferta)=> (acc + oferta.precio * IVA), 0)
        }
    }
}