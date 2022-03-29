"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let url = "https://60da9f01801dcb0017290a77.mockapi.io/cursosDoor";
    mostrarTabla();

    async function mostrarTabla() {
        let position = document.querySelector("#js__tableBody");
        position.innerHTML = '';
        try {
            let res = await fetch(url);
            let cursos = await res.json();
            console.log(cursos);
            for (let i = 0; i < cursos.length; i++) {
                if (cursos[i].price >= 300) {
                    position.innerHTML += `<tr>
                    <td> ${cursos[i].id} </td>
                <td class="resaltado"> ${cursos[i].course}</td>
                <td class="resaltado"> ${cursos[i].professor}</td>
                <td class="resaltado"> ${cursos[i].duration}</td>
                <td class="resaltado"> ${cursos[i].price}</td>
                                </tr>`;
                } else {
                    position.innerHTML += `<tr>
                <td> ${cursos[i].id}</td>
                <td> ${cursos[i].course}</td>
                <td> ${cursos[i].professor}</td>
                <td> ${cursos[i].duration}</td>
                <td> ${cursos[i].price}</td>
                </tr>`
                }
                // <td><button class="deletebtn">Delete</button><button class"editbtn">Edit</button></td>
            }
        } catch (error) {
            console.log(error);
        }
    }

    document.querySelector("#delete").addEventListener("click", borrarDato);

    async function borrarDato() {
        let id = document.querySelector("#choose").value;
        try {
            await fetch(url + "/" + id, { "method": "DELETE" });
        } catch {}
    }

    document.querySelector("#edit").addEventListener("click", editDato);

    async function editDato() {
        let id = document.querySelector("#choose").value;
        let course__name = document.querySelector('#course__name').value;
        let professor = document.querySelector('#professor').value;
        let duration = document.querySelector('#duration').value;
        let price = document.querySelector('#price').value;
        let cambios = {
            "course": course__name,
            "professor": professor,
            "duration": duration,
            "price": price,
        }
        try {
            await fetch(url + "/" + id, {
                "method": "PUT",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(cambios)
            });
        } catch (error) {
            console.log(error)
        }
    }


    document.querySelector("#refresh_table").addEventListener("click", mostrarTabla)
        // hacer funcion para llamar a mostrar tabla con un boton llamado actualizar tabla

    document.querySelector('#add').addEventListener("click", agregarCurso);
    async function agregarCurso() {
        let course__name = document.querySelector('#course__name').value;
        let professor = document.querySelector('#professor').value;
        let duration = document.querySelector('#duration').value;
        let price = document.querySelector('#price').value;
        let curso = {
            "course": course__name,
            "professor": professor,
            "duration": duration,
            "price": price,
        }
        try {
            let res = await fetch(url, {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(curso)
            });
            if (res.status === 201) {
                document.querySelector('#message').innerHTML = "The new course has been created";
            }
        } catch (error) {
            console.log(error);
        }

    }

    document.querySelector('#add__3').addEventListener("click", agregar_3);

    function agregar_3() {
        for (let i = 1; i <= 3; i++) {
            agregarCurso()
        }
    }
})