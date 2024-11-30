const tabla = document.getElementById("estTabla");
const form = document.forms["registroForm"];

function getDefinitiva(nota1, nota2, nota3, nota4) {
    const definitiva = (nota1*0.2) + (nota2*0.2) + (nota3*0.2) + (nota4*0.4);
    return definitiva.toFixed(1);
}

function getEstado(nota) {
    let estado;
    if (nota >= 3 && nota <= 5) {
        estado = "Si aprueba";
    } else {
        estado = "No aprueba";
    }
    return estado;
}

function crearEstudiante(estudiante) {
    const tbody = tabla.getElementsByTagName("tbody")[0];
    const row = document.createElement("tr");

    const def = getDefinitiva(estudiante.nota1, estudiante.nota2, estudiante.nota3, estudiante.nota4);

    let fila = "";
    fila += "<td>" + estudiante.codigo + "</td>";
    fila += "<td>" + estudiante.nombre + "</td>";
    fila += "<td>" + estudiante.nota1 + "</td>";
    fila += "<td>" + estudiante.nota2 + "</td>";
    fila += "<td>" + estudiante.nota3 + "</td>";
    fila += "<td>" + estudiante.nota4 + "</td>";
    fila += "<td>" + def + "</td>";
    fila += "<td>" + getEstado(def) + "</td>";
    row.innerHTML = fila;
    tbody.appendChild(row);
}

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const estudiante = {
        codigo: form["codigoInp"].value,
        nombre: form["nombreInp"].value,
        nota1: form["primer20Inp"].value,
        nota2: form["segundo20Inp"].value,
        nota3: form["tercer20Inp"].value,
        nota4: form["final40Inp"].value,
    };
    crearEstudiante(estudiante);
})