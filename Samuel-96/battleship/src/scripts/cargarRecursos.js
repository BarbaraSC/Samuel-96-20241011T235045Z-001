import GitLogo from "../assets/github-logo.png";
import ShipIcon from "../assets/battleship-icon.png"
import PunteroImpacto from "../assets/puntero.png";

function cargarImagenes(){
    const logoGithub = document.querySelector("#logo-github");
    logoGithub.src = GitLogo;

    const logoBattleship1 = document.querySelector("#battleship-logo1");
    const logoBattleship2 = document.querySelector("#battleship-logo2");
    logoBattleship1.src = ShipIcon;
    logoBattleship2.src = ShipIcon;

    const botonReinicio = document.querySelector("#reiniciar");
    botonReinicio.addEventListener("click", () => {
      location.reload();
    })
}

function cargarTableros(tablero) {
    document.querySelector("#info-partida").textContent = "Coloca tu acorazado";
    const tableroJugador = document.querySelector(".tablero-jugador");
    const tableroCpu = document.querySelector(".tablero-cpu");

    if(tablero.jugador){
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const celda = document.createElement("div");
          celda.classList.add("celda");
          celda.dataset.fila = i;
          celda.dataset.columna = j;
          tableroJugador.appendChild(celda);
        }
      }
    }

    if(!tablero.jugador){
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const celda = document.createElement("div");
          celda.classList.add("celda");
          celda.dataset.fila = i;
          celda.dataset.columna = j;
          tableroCpu.appendChild(celda);
        }
      }
    }
    
  }

  function activarCursorCpu(){
    const tableroCpu = document.querySelector(".tablero-cpu");
    tableroCpu.style.pointerEvents = "auto";
    tableroCpu.style.cursor = "pointer"
  }

  function desactivarCursor(){
    const tableroCpu = document.querySelector(".tablero-cpu");
    tableroCpu.style.pointerEvents = "none";
    tableroCpu.style.cursor = "not-allowed"
  }

  function activarOverlay(tablero)
  {
    //const tableroJugador = document.querySelector(".tablero-jugador");
    tablero.classList.add("overlay-activado");
  }

  function desactivarOverlay(tablero)
  {
    //const tableroJugador = document.querySelector(".tablero-jugador");
    tablero.classList.remove("overlay-activado");
  }


export {cargarImagenes, cargarTableros, activarOverlay, desactivarOverlay, activarCursorCpu, desactivarCursor};