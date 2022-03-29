"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let url = "https://60da9f01801dcb0017290a77.mockapi.io/cursosDoor";
    mostrarTabla();

    async function mostrarTabla() {
        let position = document.querySelector("#position");
        position.innerHTML = '';
        try {
            let res = await fetch(url);
            let cursos = await res.json();
            for (let i = 0; i < cursos.length; i++) {
                if (cursos[i].price >= 300) {
                    position.innerHTML += `<tr>
                <td class="resaltado"> ${cursos[i].course}</td>
                <td class="resaltado"> ${cursos[i].professor}</td>
                <td class="resaltado"> ${cursos[i].duration}</td>
                <td class="resaltado"> ${cursos[i].price}</td>
                                </tr>`;
                } else {
                    position.innerHTML += `<tr>
                <td> ${cursos[i].course}</td>
                <td> ${cursos[i].professor}</td>
                <td> ${cursos[i].duration}</td>
                <td> ${cursos[i].price}</td>
                </tr>`
                }

            }
        } catch (error) {
            console.log(error);
        }
    }
    document.querySelector('#filtrar').addEventListener("click", filtrar);


    async function filtrar() {
        var input, filter, table, tr, td, i, j, visible;
        input = document.getElementById("filter");
        filter = input.value.toUpperCase();
        table = document.getElementById("position");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            visible = false;
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    visible = true;
                }
            }
            if (visible === true) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
})