function piedras() { 
    let piedras_cant = document.getElementById("piedras_cantidad").value
    localStorage.setItem('piedras_cant_local', piedras_cant)

    let peso = document.getElementById("peso_user").value
    sessionStorage.setItem("peso_piedra", peso)

}
