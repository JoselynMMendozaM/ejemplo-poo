class SueldoLiquido {

    private salario: number = 0;
    private bonificacion: number = 0;
    private comisiones: number = 0;
    private ahorro: number = 0;
    private prestamosDescuentos: number = 0;
    private resultado: number = 0;
    private resultIgss: number = 0;
    private resultadoDescuentos: number = 0;

    public asignarSalario(valor: number) {
        this.salario = valor;
    }

    public asignarBonificacion(valor: number) {
        this.bonificacion = valor;
    }

    public asignarComisiones(valor: number) {
        this.comisiones = valor;
    }

    public asignarAhorro(valor: number) {
        this.ahorro = valor;
    }

    public asignarPrestamosDescuentos(valor: number) {
        this.prestamosDescuentos = valor;
    }

    public calcularTotalGanado(): number {
        this.resultado = this.salario + this.bonificacion + this.comisiones;
        return this.resultado;
    }

    public calcularIgss(): number {
        this.resultIgss = (this.salario * 4.83) / 100;
        return this.resultIgss;
    }

    public calcularTotalDescuentos(): number {
        this.resultado = this.ahorro + this.divIgss + this.prestamosDescuentos;
        return this.resultadoDescuentos;
    }

}

    const igss = new SueldoLiquido();
    let divIgss = document.getElementById('resultado_igss');

    const totalGanado = new SueldoLiquido();
    let divGanado = document.getElementById('resultado_ganado');

    const totalDescuentos = new SueldoLiquido();
    let divDescuentos = document.getElementById('resultado_ganado');


    function obtenerDatos() {
        totalGanado.asignarSalario(
            parseFloat((document.getElementById("salario") as HTMLInputElement).value)
        );
        totalGanado.asignarBonificacion(
            parseFloat((document.getElementById("bonificacion") as HTMLInputElement).value)
        );
        totalGanado.asignarComisiones(
            parseFloat((document.getElementById("comisiones") as HTMLInputElement).value)
        );
        totalDescuentos.asignarAhorro(
            parseFloat((document.getElementById("ahorro") as HTMLInputElement).value)
        );
        totalDescuentos.asignarPrestamosDescuentos(
            parseFloat((document.getElementById("prestamosDescuentos") as HTMLInputElement).value)
        );
        
    }
        // Verificar si el método asignarAhorro existe y llamarlo si es necesario
        

    function calcularTotalGanado() {
        obtenerDatos();
        divGanado.textContent = "El sueldo líquid es de: " + totalGanado.calcularTotalGanado();
    }

    function calcularIgss() {
        obtenerDatos();
        divIgss.textContent = "De igss es: " + igss.calcularIgss();
    }

    function calcularTotalDescuentos() {
        obtenerDatos();
        divDescuentos.textContent = "Los descuentos son de: " + igss.calcularTotalDescuentos();
    }
