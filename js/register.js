function buttonsubmit() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const user = document.getElementById("user");
    const pass = document.getElementById("password");
    const cpass = document.getElementById("cpassword");
    //const emsg = document.getElementById("errormessage");

    if (pass.value != cpass.value) {
        pass.classList.add("filerequired");
        cpass.classList.add("filerequired");
        Swal.fire({
            title: "Las contraseñas no coinciden."
        });
    } else {
        pass.classList.remove("filerequired");
        cpass.classList.remove("filerequired");
    }

    let inputs = [fname,lname,user,pass,cpass];

    for (let input of inputs) {
        if(input.value === null || input.value === "") {
            input.classList.add("filerequired");
            //emsg.style.display = "none";
            //emsg.style.color = "red";
            Swal.fire({
                title: "Te faltan campos por llenar, por favor verifica."
            });
        } else {
            input.classList.remove("filerequired");
            //emsg.style.display = "block";
        }
    };
    return false;
}