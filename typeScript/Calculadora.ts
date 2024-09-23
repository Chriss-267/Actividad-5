class Calculadora {

    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }


    multiplicar(a: number, b: number): number {
        return a * b;
    }


    dividir(a: number, b: number): number {
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


const calculadora = new Calculadora();
console.log("Suma: " + calculadora.sumar(5, 3));
console.log("Resta: " + calculadora.restar(5, 3));
console.log("Multiplicación: " + calculadora.multiplicar(5, 3));
console.log("División: " + calculadora.dividir(5, 3));
console.log("Potencia: " + calculadora.potencia(2, 3));
console.log("Factorial: " + calculadora.factorial(5));
