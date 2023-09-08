// Arquivo json com os links favoritos do site da pagina inicial

// Função de musica aleatoria com array separados dos id dos videos e nome das musicas
var listaMusic = [ 
{
  id : 546 ,
  name: "Justin Bieber - MY Word",
  link: "ieWe5AW1uNY",
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id :456456,
  name:"MUSE - Greatest Hits",
  link: "EL2R3vszMPQ" ,
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id :66534 ,
  name: "The Beatles - As melhores",
  link:  "e6QhH3q-UJE" ,
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id : 25325,
  name: "Justin Bieber - freedom",
  link:   "7MhCwXstCRM",
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id : 567443,
  name:"Justin Bieber - Change" ,
  link:"OcnrboRX0lQ" ,
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id :65224643 ,
  name: "Nattan - Atualizado" ,
  link:  "sje0ZZZwJaA",
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id : 24642,
  name: "muse - the best of 6 song",
  link:"KaYoRfkUkeY" ,
  data: "03/09/2023" ,
  tipo: "Favoritos" 
},
{
  id : 4454554,
  name:"Justin Bieber - Justice"  ,
  link: "JKPp3Kshb7c",
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id :6976967 ,
  name:"Wesley Safadão - Atualizado"  ,
  link: "k1JHlNIZo74" ,
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id : 454564,
  name: "Top 100 Best Classic Rock Of All Time",
  link:  "UgfsbL-uHOA",
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id : 45464 ,
  name:"Coldplay - Greatest Hit" ,
  link: "4DLU67DA1d8" ,
  data: "03/09/2023" ,
  tipo: "Favoritos"
},
{
  id : 45456456,
  name: "Guns N Roses - Greatest Hit" ,
  link: "qO2dR1tXGTY",
  data: "03/09/2023" ,
  tipo: "Favoritos"
}

]

var dataMusic = Object.values(listaMusic)
//console.log(dataMusic[2].link)
//dataMusic.map((data)=>{console.log(data.link)})


// função antiga de adicionar na tela com concatenação de string e variaveis.

function musicAleatoria(){
  var musicEscolhida = Math.floor(Math.random() * 12)
  //console.log(musicEscolhida)
  // pegando barra footer
  var nomeBarra = document.getElementById("nomeMusicBarra");
  var generoBarra = document.getElementById("generoMusicBarra");
  var footerAparecer = document.getElementById("footerMusic");

  //pegando player de musica
  var nomePlay = document.getElementById("nomeMusicPlay");
  var generoPlay = document.getElementById("generoMusicPlay");
  var linkMusicNaTela = document.getElementById("music_yt");

  linkMusicNaTela.innerHTML = `<iframe 
                                  width="560" height="315" src="https://www.youtube.com/embed/${dataMusic[musicEscolhida].link}" 
                                  title="player" frameborder="0" allow="autoplay; clipboard-write;">
                               </iframe>`;   
                               
    nomeBarra.innerText =  dataMusic[musicEscolhida].name;
    generoBarra.innerText = `Genero ${dataMusic[musicEscolhida].tipo}`

    nomePlay.innerText =  dataMusic[musicEscolhida].name;
    generoPlay.innerText = `Genero ${dataMusic[musicEscolhida].tipo}`
                               
}

