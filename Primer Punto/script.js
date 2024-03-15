const name_person = document.getElementById("name");
const phoneNumber = document.getElementById("phone_number");
const birthday = document.getElementById("birthday");

document.getElementById("buttonSend").addEventListener("click", function(event) {
    event.preventDefault();
    const formContainer = document.querySelector(".form_container");
    formContainer.remove();

    const container = document.createElement("div");
    container.className = "container";

    const divDataName = createDataDiv("Nombre:", name_person.value);
    const divDataphoneNumber = createDataDiv("Número de telefono:",  phoneNumber.value);
    const divDatabirthday = createDataDiv("Fecha de Nacimiento:", birthday.value);

    appendChildren(container, [divDataName, divDataphoneNumber, divDatabirthday]);

    const buttonGoBack = document.createElement("button");
    buttonGoBack.textContent = "Volver";

    buttonGoBack.addEventListener('click', () => {
        // Eliminar el contenedor al hacer clic en "Volver"
        container.remove();
        window.location.href = "index.html";
    });

    container.appendChild(buttonGoBack);
    document.body.appendChild(container);
});



function createDataDiv(label, value) {
    const header = document.createElement("h2");
    header.textContent = `${label} ${value}`;
    const dataDiv = createDiv("dataContainer", header);
    return dataDiv;
}

function createDiv(classDiv, elements) {   
    const div = document.createElement("div");
    div.className = classDiv;
    div.appendChild(elements);
    return div;
}

function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}

document.getElementById("buttonReset").addEventListener("click", function(event) {
    event.preventDefault();
    name_person.value = "";
    phoneNumber.value = "";
    birthday.value = "";
});
