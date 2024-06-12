var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
        this.salario = 0;
        this.bonificacion = 0;
        this.comisiones = 0;
        this.resultado = 0;
        this.resultIgss = 0;
    }
    SueldoLiquido.prototype.asignarSalario = function (valor) {
        this.salario = valor;
    };
    SueldoLiquido.prototype.asignarBonificacion = function (valor) {
        this.bonificacion = valor;
    };
    SueldoLiquido.prototype.asignarComisiones = function (valor) {
        this.comisiones = valor;
    };
    SueldoLiquido.prototype.calcularTotalGanado = function () {
        this.resultado = this.salario + this.bonificacion + this.comisiones;
        return this.resultado;
    };
    SueldoLiquido.prototype.calcularIgss = function () {
        this.resultIgss = (this.salario * 4.83) / 100;
        return this.resultIgss;
    };
    return SueldoLiquido;
}());
var igss = new SueldoLiquido();
var divIgss = document.getElementById('resultado_igss');
var sueldoLiquido = new SueldoLiquido();
var divGanado = document.getElementById('resultado_ganado');
function obtenerDatos() {
    sueldoLiquido.asignarSalario(parseFloat(document.getElementById("salario").value));
    sueldoLiquido.asignarBonificacion(parseFloat(document.getElementById("bonificacion").value));
    sueldoLiquido.asignarComisiones(parseFloat(document.getElementById("comisiones").value));
}
// Verificar si el método asignarAhorro existe y llamarlo si es necesario
function calcularTotalGanado() {
    obtenerDatos();
    divGanado.textContent = "El sueldo líquid es de: " + sueldoLiquido.calcularTotalGanado();
}
function calcularIgss() {
    obtenerDatos();
    divIgss.textContent = "De igss es: " + igss.calcularIgss();
}
