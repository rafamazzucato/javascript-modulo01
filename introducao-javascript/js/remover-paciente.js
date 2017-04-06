var pacientesTable = document.querySelector("#tabela-pacientes");

pacientesTable.addEventListener("dblclick", function(event) {
        var target = event.target;
        var lineToRemove = target.parentNode;

        lineToRemove.classList.add("fadeOut");

        setTimeout(function (){
            lineToRemove.remove();
        }, 500);
});
