const POP_UP = document.getElementById('popUp');

let produkti = [];

document.getElementById('Prece').addEventListener('click',() => {
    POP_UP.style.display = 'block';
})

document.getElementById('prece3').addEventListener('click',() => { 
    POP_UP.style.display = 'none';

    let prece = {Produkts: prece1.value, Skaits: prece2.value};

    prece1.value= "";
    prece2.value="";

    produkti.push(prece);

    render();
})
function render() {
    let preces = document.getElementById('preces');

    for(let i = 0; i < produkti.length; i++){
        console.log(produkti[i])
        let saraksts = `
        <div class="saraksts">
            <h3>Produkts: ${produkti[i].prece1}</h3>
            <h4>Skaits: ${produkti[i].prece2}</h4>
        </div>`;
        preces.innerHTML = saraksts;
}

}
