class Barco {
    constructor(nombre, tam, estaHundido) {
        this.nombre = nombre;
        this.tam = tam;
        this.numImpactos = 0;
        this.estaHundido = estaHundido;
        this.coordenadas = [];
    }

    hit() {
        this.numImpactos++;
        if (this.numImpactos >= this.tam) {
            this.estaHundido = true;
            this.numImpactos = this.tam;
            return;
        }
    }
}

class Tablero {
    constructor(jugador) {
        this.tablero = this.crearTablero();
        this.coleccionBarcos = [];
        this.jugador = jugador;
    }

    barcosEliminados() {
        return this.coleccionBarcos.length === 0;
    }

    crearTablero() {
        const tablero = [
            ["□ ", "⬜ ", "□ ", "□ ", "□ ", "□ ", "□ ", "□ "],
            ["□ ", "□ ", "⬜ ", "□ ", "□ ", "□ ", "□ ", "□ "],
            ["□ ", "□ ", "□ ", "⬜ ", "□ ", "□ ", "□ ", "□ "],
            ["□ ", "□ ", "□ ", "□ ", "⬜ ", "□ ", "□ ", "□ "],
            ["□ ", "□ ", "□ ", "□ ", "□ ", "⬜ ", "□ ", "□ "],
            ["□ ", "□ ", "□ ", "□ ", "□ ", "□ ", "⬜ ", "□ "],
            ["□ ", "□ ", "□ ", "□ ", "□ ", "□ ", "□ ", "⬜ "],
            ["⬜ ", "□ ", "□ ", "□ ", "□ ", "□ ", "□ ", "□ "],
        ];
        return tablero;
    }

    mostrarTablero() {
        for (let i = 0; i < this.tablero.length; i++) {
            let fila = "";
            for (let j = 0; j < this.tablero[i].length; j++) {
                fila += this.tablero[i][j] + " ";
            }
            console.log(fila);
        }
        console.log("-----------------------");
        console.log("-----------------------");
        console.log("-----------------------");
    }

    colocarBarcos(coordenadas, barco) {
        barco = barco.toLowerCase();
        const [fila, columna] = coordenadas;
        let longitud;

        switch (barco) {
            case "acorazado": longitud = 4; break;
            case "destructor": longitud = 4; break;
            case "submarino": longitud = 3; break;
            case "patrullero": longitud = 2; break;
            default: return false; // Manejar caso inválido
        }

        if (columna + longitud > this.tablero[0].length) {
            return false; // No hay suficiente espacio
        }

        const nuevoBarco = new Barco(barco, longitud, false);
        for (let i = 0; i < longitud; i++) {
            nuevoBarco.coordenadas.push([fila, columna + i]);
            this.tablero[fila][columna + i] = "🚢";
        }
        this.coleccionBarcos.push(nuevoBarco);
        return true;
    }

    recibirAtaque(coordenadas) {
        const [fila, columna] = coordenadas;
        let barcoImpactado = false;

        for (let i = 0; i < this.coleccionBarcos.length; i++) {
            const barco = this.coleccionBarcos[i];
            for (let j = 0; j < barco.coordenadas.length; j++) {
                const coordenada = barco.coordenadas[j];
                if (coordenada[0] === fila && coordenada[1] === columna) {
                    barco.hit();
                    if (barco.estaHundido) {
                        console.log("hundido el " + barco.nombre);
                        this.coleccionBarcos.splice(i, 1);
                    }
                    this.tablero[fila][columna] = "X";
                    barcoImpactado = true;
                    break;
                }
            }
        }

        if (!barcoImpactado) {
            this.tablero[fila][columna] = "f";
        }
    }

    comprobarCelda(fila, columna) {
        return this.tablero[fila][columna] !== "🚢";
    }
}

export { Barco, Tablero };