var tempopadrao;
var msgtempoescolhido;

function escolhaPrato() {
	var prato = document.getElementById("pratoEscolhido").value;    
	var msgpratoescolhido;
  
    switch(prato) {
    case "1":
    tempopadrao = 10,  msgpratoescolhido = "Prato escolhido: Pipoca - tempo sugerido 10s";
    break;
    case "2":
    tempopadrao = 8,  msgpratoescolhido = "Prato escolhido: Macarrão - tempo sugerido 8s";
    break;
    case "3":
    tempopadrao = 15,  msgpratoescolhido = "Prato escolhido: Carne - tempo sugerido 15s";
    break;
	case "4":
    tempopadrao = 12,  msgpratoescolhido = "Prato escolhido: Feijão - tempo sugerido 12s";
    break;
	case "5":
    tempopadrao = 8,  msgpratoescolhido = "Prato escolhido: Brigadeiro - tempo sugerido 8s";
    break;	      
    default:
    tempopadrao = 0,  msgpratoescolhido = "Prato Inexistente";
  }
  document.getElementById("msgprato").innerHTML = msgpratoescolhido;
  document.getElementById("tempoEscolhido").value = tempopadrao;
  document.getElementById("msgtempo").innerHTML = "--";
}
function definaTempo() {
	var tempoescolhido = document.getElementById("tempoEscolhido").value;
    
	switch(true) {
      case tempopadrao == 0:
      msgtempoescolhido = "O prato escolhido não existe"
      break;	
      case tempoescolhido > tempopadrao * 3:
      msgtempoescolhido = "Kabumm"
      break;	
      case tempoescolhido > tempopadrao * 2:
      msgtempoescolhido = "A comida queimou"
      break;
      case tempoescolhido < tempopadrao:
      msgtempoescolhido = "Tempo insuficiente"
      break;      
      default:
      msgtempoescolhido = "Prato pronto, bom apetite!!!"; 
      
    }    
    
    document.getElementById("msgtempo").innerHTML = msgtempoescolhido;
}
