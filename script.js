let jogador1;
let jogador2;
let partidas = [];
let lenPartidas = 1;
let VezJogador1 = true;

let resetaTabuleiro = () => {
  for (let i = 1; i <= 9; i++ ){
    document.getElementById(''+i).innerHTML = "";
  }
  VezJogador1 = true;
}

let checaRodada = () =>{
  let j1 = document.getElementsByClassName("jogador1");
  let j2 = document.getElementsByClassName("jogador2");

  if (parseInt(localStorage.getItem("rodadas")) == 4){
    document.getElementById("game").className = "esconder";
    document.getElementById("rodada").className = "esconder";
    document.getElementById("placar").className = "mostrar";
    document.getElementById("lj1").className = "mostrarLabel";
    document.getElementById("sj1").className = "mostrarLabel";
    document.getElementById("lj2").className = "mostrarLabel";
    document.getElementById("sj2").className = "mostrarLabel";
    document.getElementById("meuButton").className = "mostrar";
    document.getElementById("clear").className = "mostrarLabel";
    document.getElementById("nomejogador1").innerHTML = "";
    document.getElementById("nomejogador2").innerHTML = "";
    j1[0].style.display = "inline-block";
    j1[1].style.display = "inline-block";
    j2[0].style.display = "inline-block";
    j2[1].style.display = "inline-block";    
    document.getElementById("h1").innerHTML = "JOGO DA VELHA: PLACAR";
    localStorage.setItem("rodadasbk", parseInt(localStorage.getItem("rodadas")));
    localStorage.setItem("verRodadas", "true");
    localStorage.setItem("rodadas", 1);
  }
}

let iterador = 0;

let atualizaPlacar = () =>{
  document.getElementById("r" + (++iterador)).innerHTML = localStorage.getItem("rodadas");
  document.getElementById("v" + (iterador)).innerHTML = localStorage.getItem("Vencedor");
  document.getElementById("j1-" + (iterador)).innerHTML = localStorage.getItem("nome-j1");
  document.getElementById("j2-" + (iterador)).innerHTML = localStorage.getItem("nome-j2");
  if (iterador == 3)
    iterador = 0;
}

let houveVencedor = (id) =>{
  let j1 = document.getElementsByClassName("jogador1");
  let j2 = document.getElementsByClassName("jogador2");

  if(document.getElementById(1).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(2).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(3).innerHTML == localStorage.getItem("simbolo2-j1")){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(1).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(2).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(3).innerHTML == localStorage.getItem("simbolo2-j2")){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: 
    localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j2[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(1).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(4).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(7).innerHTML == localStorage.getItem("simbolo2-j1")){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(1).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(4).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(7).innerHTML == localStorage.getItem("simbolo2-j2")){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j2[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(1).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(9).innerHTML == localStorage.getItem("simbolo2-j1")){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(1).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(9).innerHTML == localStorage.getItem("simbolo2-j2")){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j2[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(2).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(8).innerHTML == localStorage.getItem("simbolo2-j1")){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(2).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(8).innerHTML == localStorage.getItem("simbolo2-j2")){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j2[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(3).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(6).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(9).innerHTML == localStorage.getItem("simbolo2-j1")){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(3).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(6).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(9).innerHTML == localStorage.getItem("simbolo2-j2")){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j2[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if(document.getElementById(3).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(7).innerHTML == localStorage.getItem("simbolo2-j1")){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if((document.getElementById(3).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(7).innerHTML == localStorage.getItem("simbolo2-j2"))){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j2[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if((document.getElementById(4).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(6).innerHTML == localStorage.getItem("simbolo2-j1"))){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    alert(j1[0].value + " venceu.");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    resetaTabuleiro();
  }
  else if((document.getElementById(4).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(5).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(6).innerHTML == localStorage.getItem("simbolo2-j2"))){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    alert(j2[0].value + " venceu.");
    resetaTabuleiro();
  }
  else if((document.getElementById(7).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(8).innerHTML == localStorage.getItem("simbolo2-j1") && document.getElementById(9).innerHTML == localStorage.getItem("simbolo2-j1"))){
    localStorage.setItem("Vencedor", j1[0].value);
    localStorage.setItem("vitoria-j1", parseInt(localStorage.getItem("vitoria-j1"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    alert(j1[0].value + " venceu.");
    resetaTabuleiro();
  }
  else if((document.getElementById(7).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(8).innerHTML == localStorage.getItem("simbolo2-j2") && document.getElementById(9).innerHTML == localStorage.getItem("simbolo2-j2"))){
    localStorage.setItem("Vencedor", j2[0].value);
    localStorage.setItem("vitoria-j2", parseInt(localStorage.getItem("vitoria-j2"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: localStorage.getItem("Vencedor") });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    alert(j2[0].value + " venceu.");
    resetaTabuleiro();
  }
  else if (parseInt(localStorage.getItem("jogadas")) == 9){
    localStorage.setItem("Vencedor", "Empate");
    localStorage.setItem("empates", parseInt(localStorage.getItem("empates"))+1);
    partidas.push({Numero: localStorage.getItem("rodadas"), Jogador1: j1[0].value, Jogador2: j2[0].value, Vencedor: "Empate" });
    localStorage.setItem("partidas",[localStorage.getItem("partidas"), localStorage.getItem("Vencedor")]);
    atualizaPlacar();
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("rodadas", parseInt(localStorage.getItem("rodadas"))+1);
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
    alert("Empate");
    resetaTabuleiro();
  }
  checaRodada();
}

let jogada = (id) =>{
  if(document.getElementById(id).innerHTML!="")
    alert("Já está ocupado");
  else{
    if(VezJogador1){
      document.getElementById(id).innerHTML = jogador1;
      localStorage.setItem("simbolo2-j1", document.getElementById(id).innerHTML);
    }else {
      document.getElementById(id).innerHTML = jogador2;
      localStorage.setItem("simbolo2-j2", document.getElementById(id).innerHTML);
    }
    VezJogador1 = !VezJogador1;
    localStorage.setItem("jogadas", parseInt(localStorage.getItem("jogadas"))+1);
  }
}
 
let SalvarJogadores = () => {
  let j1 = document.getElementsByClassName("jogador1");
  let j2 = document.getElementsByClassName("jogador2");

  if (j1[1].value != j2[1].value){
    
    jogador1 = j1[1].value;
    jogador2 = j2[1].value;
    localStorage.setItem("nome-j1", j1[0].value);
    localStorage.setItem("nome-j2", j2[0].value);
    localStorage.setItem("vitoria-j1", 0);
    localStorage.setItem("vitoria-j2", 0);
    localStorage.setItem("simbolo-j1",jogador1);
    localStorage.setItem("simbolo-j2",jogador2);
    if (jogador1 == "Goku")
      jogador1 = "<img src='imagem/gokupic.png' width='50px' height='50px'>"
    if (jogador1 == "Vegeta")
      jogador1 = "<img src='imagem/vegetapic.jpg' width='50px' height='50px'>"
    if (jogador1 == "Dora")
      jogador1 = "<img src='imagem/dorapic.png' width='50px' height='50px'>"
    if (jogador1 == "Raposo")
      jogador1 = "<img src='imagem/raposopic.png' width='50px' height='50px'>"
    if (jogador2 == "Goku")
      jogador2 = "<img src='imagem/gokupic.png' width='50px' height='50px'>"
    if (jogador2 == "Vegeta")
      jogador2 = "<img src='imagem/vegetapic.jpg' width='50px' height='50px'>"
    if (jogador2 == "Dora")
      jogador2 = "<img src='imagem/dorapic.png' width='50px' height='50px'>"
    if (jogador2 == "Raposo")
      jogador2 = "<img src='imagem/raposopic.png' width='50px' height='50px'>"
    localStorage.setItem("empates", 0);
    localStorage.setItem("rodadas", 1);
    localStorage.setItem("verRodadas", "false");
    localStorage.setItem("jogadas", 0);
    localStorage.setItem("partidas", "");

    document.getElementById("nomejogador1").innerHTML = j1[0].value + " X ";
    document.getElementById("nomejogador2").innerHTML = j2[0].value;
    document.getElementById("game").className = "mostrar";
    document.getElementById("placar").className = "esconder";
    document.getElementById("rodada").className = "mostrar";
    document.getElementById("lj1").className = "esconder";
    document.getElementById("sj1").className = "esconder";
    document.getElementById("lj2").className = "esconder";
    document.getElementById("sj2").className = "esconder";
    document.getElementById("meuButton").className = "esconder";
    document.getElementById("clear").className = "esconder";
    j1[0].style.display = "none";
    j1[1].style.display = "none";
    j2[0].style.display = "none";
    j2[1].style.display = "none";
    document.getElementById("h1").innerHTML = "JOGO DA VELHA";
    document.getElementById("rodada").innerHTML = "Rodada: "+localStorage.getItem("rodadas");
  }
  else
    alert("Os jogadores devem ter símbolos diferentes");
}

let atualizaPlacar2 = (i) =>{
  let lista = localStorage.getItem("partidas").split(",");
  document.getElementById("r" + (++iterador)).innerHTML = parseInt(i);
  document.getElementById("v" + iterador).innerHTML = lista[i];
  document.getElementById("j1-" + (iterador)).innerHTML = localStorage.getItem("nome-j1");
  document.getElementById("j2-" + (iterador)).innerHTML = localStorage.getItem("nome-j2");
  if (iterador == 3)
    iterador = 0;
}

let getLocalStorage = (booleano) =>{
  if(localStorage.length!=0){
    iterador = 0;
    let max = 3;
    let min = localStorage.getItem("rodadas");
    if (localStorage.getItem("verRodadas") == "true"){
      for (let i = 1; i <= max; i++)
        atualizaPlacar2(i);
    }
    else{
      for (let i = 1; i <= min-1; i++)
        atualizaPlacar2(i);
      for (let i = min; i <= 3; i++ ){
        document.getElementById("r" + (i)).innerHTML = "-"
        document.getElementById("v" + (i)).innerHTML = "-"
        document.getElementById("j1-" + (i)).innerHTML = "-"
        document.getElementById("j2-" + (i)).innerHTML = "-"
      }
    }
    iterador = 0;
  }

  if(localStorage.length!=0 || booleano == true){
    let j1 = document.getElementsByClassName("jogador1");
    let j2 = document.getElementsByClassName("jogador2");
    j1[0].value = localStorage.getItem("nome-j1");
    j2[0].value = localStorage.getItem("nome-j2");
    j1[1].value = localStorage.getItem("simbolo-j1");
    j2[1].value = localStorage.getItem("simbolo-j2");
    if(booleano == true)
      for (let i = 1; i <= 3; i++ ){
        document.getElementById("r" + (i)).innerHTML = ""
        document.getElementById("v" + (i)).innerHTML = ""
        document.getElementById("j1-" + (i)).innerHTML = ""
        document.getElementById("j2-" + (i)).innerHTML = ""
      }
  }
}

let reset = () =>{
  localStorage.clear();
  getLocalStorage(true);
  document.getElementsByClassName("jogador1")[1].value = "";
  document.getElementsByClassName("jogador2")[1].value = "";
}