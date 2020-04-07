// MOSTRAMOS SOLO CONTEINER DE BIENVENIDA //

let pgHome =
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";

  //pestaña de home
  const pestañaInicio = document.getElementById("home");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="block";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";  
});

console.log("phHome");

//pestaña de atletes-famele
const optFamele = document.getElementById("fmujeres");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="block";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";  
});

//pestaña de athletes-males
const optMale = document.getElementById("fhombres");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="block";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";  
});

//pestaña de temporada de verano
const optSummer = document.getElementById("tverano");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="block";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";  
});

//pestaña de temporada de invierno 
const optWinter = document.getElementById("tinvierno");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="block";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";  
});

//pestaña de medalla de oro
const pestañaInicio = document.getElementById("moro");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="block";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="none";  
});

//pestaña de medalla de plata
const pestañaInicio = document.getElementById("mplata");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="blocke";
  document.getElementById("cardsBronce").style.display="none";  
});

//pestaña de medalla de bronce
const pestañaInicio = document.getElementById("mbronce");
  btnInicio.addEventListener("click", () => {
  document.getElementById("cards").style.display="none";
  document.getElementById("atletashombres").style.display="none";
  document.getElementById("atletasMujeres").style.display="none";
  document.getElementById("temporadaVerano").style.display="none";
  document.getElementById("temporadaInvierno").style.display="none";
  document.getElementById("medallasOro").style.display="none";
  document.getElementById("cardsPlata").style.display="none";
  document.getElementById("cardsBronce").style.display="block";  
});

// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

// import dataAtletas from './data/atletas/atletas.js';
import dataAtletas from './data/copy.js';

const transformaBandera = (initial) => {
  const newInitial = initial.slice(0, -1);
  return newInitial;
};

const data = dataAtletas.atletas;


document.getElementById('main').innerHTML = `
<h2 class='titleh2' >TODOS LOS ATLETAS</h2>

<div class="container">
${data
    .map(
      dataPrincipal => `
<div class="cards">
<img width=110 height=110 src = ${
  dataPrincipal.gender === 'F'
    ? './img/avatarMujer.png'
    : './img/avatarVaron.png'
} class="imgAvatar">
    <div class="infoPrincipal ">
      <h2>${dataPrincipal.name}</h2>
      <p><strong class ="description">Sport :</strong> ${dataPrincipal.sport} </p>
      <p><strong class = "description">Weigth :</strong> ${dataPrincipal.weight} </p>
      <p><strong class = "description">Team:</strong> ${dataPrincipal.team} </p>
    </div>
    <img width = 40 height = 40 src = "https://www.countryflags.io/${transformaBandera(dataPrincipal.noc)}/flat/64.png"
    class >

</div>
`,
    )
    .join('')}
</div>
`;

//Metiendo los filtros en un forEach para que recorra en html

document.getElementById('fmujeres').innerHTML = `


<div class="container"> 
${filtrardataMujeres = data.filter(items => (items.gender === 'F'))
                 // console.log('atletas mujeres =>', filtrardataMujeres); 
    .map(
      dataPrincipal => `
<div class="cards">
<img width=110 height=110 src = ${
  dataPrincipal.gender === 'F'
    ? './img/avatarMujer.png'
    : './img/avatarVaron.png'
} class="imgAvatar">
    <div class="infoPrincipal ">
      <h2>${dataPrincipal.name}</h2>
      <p><strong class ="description">Sport :</strong> ${dataPrincipal.sport} </p>
      <p><strong class = "description">Weigth :</strong> ${dataPrincipal.weight} </p>
      <p><strong class = "description">Team:</strong> ${dataPrincipal.team} </p>
    </div>
    <img width = 40 height = 40 src = "https://www.countryflags.io/${transformaBandera(dataPrincipal.noc)}/flat/64.png"
    class >

</div>
`,
    )
    .join('')}
</div>
`;
/* filtrar a los atletas por  */
const filtrardataHombres = data.filter(items => (items.gender === 'M'));
console.log('atletas hombres =>', filtrardataHombres);

const filtrardataMujeres = data.filter(items => (items.gender === 'F'));
console.log('atletas mujeres =>', filtrardataMujeres); 

/* para las opciones de temporada y medallas debemos filtar el array disciplinas de array general Atletas */
/* const filtrardataInvierno = data.filter(items => (items.disciplinas.filter(item => (item.temporada === 'winter'))));
console.log('temporada inviernop =>', filtrardataInvierno);

const filtrarmedallaOro = data.filter(items => (items.gender === 'F'));
console.log('atletas mujeres =>', filtrarmedallaOro); */

/* const filterGender = data.filter(ele => (ele.gender === 'F'));
console.log(filterGender); */

/* FILTRADOS del array Disciplina */
/* filtrado  por temporada Verano */
const tempSummer = [];
data.forEach((elem) => {
  if (elem.hasOwnProperty('disciplinas')) {
    elem.disciplinas.forEach((obj) => {
      if (obj.temporada === 'Summer') {
        tempSummer.push(elem);
      }
    });
  }
});
console.log(tempSummer);

/* filtrado por temporada Invierto */
const tempWinter = [];
data.forEach((elem) => {
  if (elem.hasOwnProperty('disciplinas')) {
    elem.disciplinas.forEach((obj) => {
      if (obj.temporada === 'Winter') {
        tempWinter.push(elem);
      }
    });
  }
});
console.log(tempWinter);

/* filtrado por tipo de medalla oro */
const medallaGold = [];
data.forEach((elem) => {
  if (elem.hasOwnProperty('disciplinas')) {
    elem.disciplinas.forEach((obj) => {
      if (obj.medalla === 'Gold') {
        medallaGold.push(elem);
      }
    });
  }
});
console.log(medallaGold);

/* filtrado por tipo de medalla plata */
const medallaSilver = [];
data.forEach((elem) => {
  if (elem.hasOwnProperty('disciplinas')) {
    elem.disciplinas.forEach((obj) => {
      if (obj.medalla === 'Silver') {
        medallaSilver.push(elem);
      }
    });
  }
});
console.log(medallaSilver);

/* filtrado por tipo de medalla bronce */
const medallaBronze = [];
data.forEach((elem) => {
  if (elem.hasOwnProperty('disciplinas')) {
    elem.disciplinas.forEach((obj) => {
      if (obj.medalla === 'Bronze') {
        medallaBronze.push(elem);
      }
    });
  }
});
console.log(medallaBronze);

