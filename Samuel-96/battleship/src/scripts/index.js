import "../styles/style.css";
import {cargarImagenes, cargarTableros} from "./cargarRecursos.js";
import { Tablero } from "./objects";
import { colocarBarcosCpu, eventosCeldas } from "./eventosDOM";

const tableroJugador = new Tablero(true); //true porque el tablero pertenece al jugador
const tableroCpu = new Tablero(false); //false porque pertenece a la maquina

cargarImagenes(); 
cargarTableros(tableroJugador);
cargarTableros(tableroCpu);
colocarBarcosCpu(tableroCpu);
eventosCeldas(tableroJugador, tableroCpu);
/*
const tablero = new Tablero();
tablero.mostrarTablero();
tablero.colocarBarcos([0,0], "acorazado")
tablero.mostrarTablero();
*/