// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';

// import dataAtletas from './data/atletas/atletas.js';
import dataAtletas from './data/copy.js';

const transformaBandera = (initial) => {
  const newInitial = initial.slice(0, -1);
  return newInitial;
};

<<<<<<< HEAD
const data = (dataAtletas.atletas);
console.log("todos los atletas =>",data);
=======
const data = dataAtletas.atletas;
>>>>>>> d44994bb4bedc1a66c87392373f56d68ea1d4423

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

/* filtrar a los atletas por  */

const filtrardataHombres = data.filter(items =>{ return (items.gender === 'M')
});
console.log("atletas hombres =>", filtrardataHombres);

const filtrardataMujeres = data.filter( items =>{ return (items.gender === 'F')
});
console.log("atletas mujeres =>", filtrardataMujeres);

/* para las opciones de temporada y medallas debemos filtar el array disciplinas de array general Atletas */
const filtrardataInvierno = data.filter( items =>{ return (items.disciplinas.filter( item =>{ return (item.temporada === 'Summer')}))
});
console.log("temporada inviernop =>", filtrardataInvierno);

const filtrarmedallaOro = data.filter( items =>{ return (items.gender === 'F')
});
console.log("atletas mujeres =>", filtrarmedallaOro);