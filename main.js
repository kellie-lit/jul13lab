
let button =document.querySelector('button');
let aych = document.querySelector('h2');

btnclick = () =>{console.log('button clicked')
 axios.get('https://swapi.dev/api/planets/2/').then(resp=> {
    for(i=0;i<resp.data.residents.length;i++){
    axios.get(resp.data.residents[i]).then(resid => aych.append(`${resid.data.name}`))
}
}
)
}

button.addEventListener('click',btnclick)

