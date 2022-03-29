// document.addEventListener("DOMContentLoaded", () => {
//     let url = "https://60da9f01801dcb0017290a77.mockapi.io/contact";

//     document.querySelector('#btncontact').addEventListener("click", agregarMessage);
//     async function agregarMessage() {
//         let name = document.querySelector('#name-form').value;
//         let lastname = document.querySelector('#lname-form').value;
//         let birthday = document.querySelector('#birthday-form').value;
//         let mail = document.querySelector('#mail-form').value;
//         let commentary = document.querySelector('#tArea-form').value;
//         let message = {
//             "name": name,
//             "lastname": lastname,
//             "mail": mail,
//             "birthday": birthday,
//             "commentary": commentary,
//         }

//         try {
//             let res = await fetch(url, {
//                 "method": "POST",
//                 "headers": { "content-type": "application/json" },
//                 "body": JSON.stringify(message)
//             });
//             console.log(res);
//             if (res.status === 201) {
//                 document.querySelector('#message').innerHTML = "Your consultation was successfully delivered.";
//             }
//         } catch (error) {
//             console.log(error);
//         }

//     }
// })

document.addEventListener("DOMContentLoaded", () => {
    let url = "https://60da9f01801dcb0017290a77.mockapi.io/contact";

    document.querySelector('#btncontact').addEventListener("click", () => {
        let captchatxt = document.querySelector(".captchatxt");
        let maincaptcha = document.querySelector(".maincaptcha");
        if (captchatxt.innerText == maincaptcha.value) {
            agregarMessage();
        }


        async function agregarMessage() {
            let name = document.querySelector('#name-form').value;
            let lastname = document.querySelector('#lname-form').value;
            let birthday = document.querySelector('#birthday-form').value;
            let mail = document.querySelector('#mail-form').value;
            let commentary = document.querySelector('#tArea-form').value;
            let message = {
                "name": name,
                "lastname": lastname,
                "mail": mail,
                "birthday": birthday,
                "commentary": commentary,
            }

            try {
                let res = await fetch(url, {
                    "method": "POST",
                    "headers": { "content-type": "application/json" },
                    "body": JSON.stringify(message)
                });
                console.log(res);
                if (res.status === 201) {
                    document.querySelector('#messagecont').innerHTML = "Your consultation was successfully delivered.";
                }
            } catch (error) {
                console.log(error);
            }

        }
    })
});