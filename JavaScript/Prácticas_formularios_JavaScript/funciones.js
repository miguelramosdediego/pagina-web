function fechayhoramorado() {
var fecha = new Date();
var numeroames;
var horascero;
var minutoscero;
var segundoscero;
    if (fecha.getMonth()==0) {
        numeroames='enero';
    }
    if (fecha.getMonth()==1) {
        numeroames='febrero';
    }
    if (fecha.getMonth()==2) {
        numeroames='marzo';
    }
    if (fecha.getMonth()==3) {
        numeroames='abril';
    }
    if (fecha.getMonth()==4) {
        numeroames='mayo';
    }
    if (fecha.getMonth()==5) {
        numeroames='junio';
    }
    if (fecha.getMonth()==6) {
        numeroames='julio';
    }
    if (fecha.getMonth()==7) {
        numeroames='agosto';
    }
    if (fecha.getMonth()==8) {
        numeroames='septiembre';
    }
    if (fecha.getMonth()==9) {
        numeroames='octubre';
    }
    if (fecha.getMonth()==10) {
        numeroames='noviembre';
    }
    if (fecha.getMonth()==11) {
        numeroames='diciembre';
    }

    if (fecha.getMinutes()<10) {
        minutoscero='0'+fecha.getMinutes();
    }
    else {
        minutoscero=fecha.getMinutes();
    }

    if (fecha.getSeconds()<10) {
        segundoscero='0'+fecha.getSeconds();
    }
    else {
        segundoscero=fecha.getSeconds();
    }

    if (fecha.getHours()<10) {
        horascero='0'+fecha.getHours();
    }
    else {
        horascero=fecha.getHours();
    }

    document.write('<span style="color:#820e88">'+fecha.getDate()+' de '+numeroames+' de '+fecha.getFullYear()+', '+horascero+':'+minutoscero+':'+segundoscero);
}

function fechayhoranegro() {
var fecha = new Date();
var numeroames;
var horascero;
var minutoscero;
var segundoscero;
    if (fecha.getMonth()==0) {
        numeroames='enero';
    }
    if (fecha.getMonth()==1) {
        numeroames='febrero';
    }
    if (fecha.getMonth()==2) {
        numeroames='marzo';
    }
    if (fecha.getMonth()==3) {
        numeroames='abril';
    }
    if (fecha.getMonth()==4) {
        numeroames='mayo';
    }
    if (fecha.getMonth()==5) {
        numeroames='junio';
    }
    if (fecha.getMonth()==6) {
        numeroames='julio';
    }
    if (fecha.getMonth()==7) {
        numeroames='agosto';
    }
    if (fecha.getMonth()==8) {
        numeroames='septiembre';
    }
    if (fecha.getMonth()==9) {
        numeroames='octubre';
    }
    if (fecha.getMonth()==10) {
        numeroames='noviembre';
    }
    if (fecha.getMonth()==11) {
        numeroames='diciembre';
    }

    if (fecha.getMinutes()<10) {
        minutoscero='0'+fecha.getMinutes();
    }
    else {
        minutoscero=fecha.getMinutes();
    }

    if (fecha.getSeconds()<10) {
        segundoscero='0'+fecha.getSeconds();
    }
    else {
        segundoscero=fecha.getSeconds();
    }

    if (fecha.getHours()<10) {
        horascero='0'+fecha.getHours();
    }
    else {
        horascero=fecha.getHours();
    }

    document.write('<span style="color:black">'+fecha.getDate()+' de '+numeroames+' de '+fecha.getFullYear()+', '+horascero+':'+minutoscero+':'+segundoscero);
}

function limitefecha() { /* https://jsfiddle.net/dae4y126/ */
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth()+1;
var agno = fecha.getFullYear();
    if(dia<10){
        dia='0'+dia
    }
    if(mes<10){
        mes='0'+mes
    }
    fecha = agno+'-'+mes+'-'+dia;
    document.getElementById('fechanacimiento').setAttribute('max', fecha);
}

function despueshijossi() { /* http://jsfiddle.net/QAaHP/16/ */
    if (document.getElementById('hijossi').checked) {
        document.getElementById('cuantoshijos').style.display = 'block';
    }
    else {
        document.getElementById('cuantoshijos').style.display = 'none';
    }
}

function habilitarmarcamovil() { /* https://www.w3schools.com/js/tryit.asp?filename=try_dom_select_disabled */
    if (document.getElementById('marcamovilsi').checked) {
        document.getElementById('marcamovil').disabled=false;
    }
    else {
        document.getElementById('marcamovil').disabled=true;
        var reiniciarmarca = document.getElementById('marcamovil'); /* https://www.aspsnippets.com/Articles/Reset-Clear-DropDownList-selection-selected-value-using-JavaScript-and-jQuery.aspx */
        reiniciarmarca.selectedIndex = 0;
    }
}

function borrar() {
    document.getElementById('cuantoshijos').style.display = 'none';
    document.getElementById('marcamovil').disabled=true;
    document.getElementById('comentarios').style.height = '64px'; /* https://stackoverflow.com/questions/36087612/reset-textarea-height-in-javascript */
}

function comprobarcontrasegna(event) { /* https://stackoverflow.com/questions/22983479/how-to-check-password-field-with-confirm-password-field */
    var x = document.getElementsByName('contrasegna')[0].value,
        y = document.getElementsByName('repitecontrasegna')[0].value;

    if (x === y) {
        alert('Tras comprobar los datos requeridos, el formulario se envía');
        return true;
    }
    else {
        alert('Las contraseñas no son iguales');
        alert('Tras comprobar los datos requeridos, los datos NO se envían');
        event.preventDefault();
        return false;
    }
}

function despuescarnet() { /* http://jsfiddle.net/QAaHP/16/ */
    if (document.getElementById('carnetsi').checked) {
        document.getElementById('cochepropio').style.display = 'block';
    }
    else {
        document.getElementById('cochepropio').style.display = 'none';
    }
}

function despuescochepropio() { /* http://jsfiddle.net/QAaHP/16/ */
    if (document.getElementById('cochepropiosi').checked) {
        document.getElementById('color').style.display = 'block';
        document.getElementById('marca').style.display = 'block';
    }
    else {
        document.getElementById('color').style.display = 'none';
        document.getElementById('marca').style.display = 'none';
    }
}
