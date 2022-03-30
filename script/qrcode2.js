var arregloAlumnos=[];
const listaAlumnos=document.querySelector('#listaAlumnos');
$.ajax({
    url: 'csv/eventos.csv',
    dataType: 'text',
}).done(section);
function section(data){
    let allRows = data.split(/\r?\n|\r/);
    if (allRows.length>0){
        if (allRows.length>1&&allRows[0]!==""){
            let selected="";
            for (let i=0;i<allRows.length;i++){
                let rowCells = allRows[i].split(',');
                selected=selected+'<option value="'+rowCells[0]+'">'+rowCells[1]+'</option>';
            }
            document.getElementById('nombreEventos').innerHTML=selected;
        }else {
            document.getElementById('nombreEventos').innerHTML='<option>Vacio</option>';
        }
    }
}
$.ajax({
    url: 'csv/alumnos.csv',
    dataType: 'text',
}).done(alumnos);
function alumnos(data){
    let allRows = data.split(/\r?\n|\r/);
    for (let i=0;i<allRows.length;i++){
        let rowCells = allRows[i].split(',');
        arregloAlumnos.push(rowCells);
    }
    console.log(arregloAlumnos);
}
function busquedaInput(){
    let input=document.querySelector('#mostrarMatricula').value.toUpperCase();
    filtrar(input)
}
function filtrar(matricula){
    console.log("filter");
    listaAlumnos.innerHTML='';
    arregloAlumnos.forEach(function (value){
        if (value[0].includes(matricula)){
            listaAlumnos.innerHTML+='<li>'+value[0]+" "+value[1]+" "+value[2]+" "+value[3]+" "+'</li>'
        }
    })
}
document.getElementById('mostrarMatricula').addEventListener('keyup',filtrar);


