function agregarTarea() {
    //obtenemos el valor del campo de la tarea
    let nuevaTareaTexto=document.getElementById("nuevaTarea").value;
    //validamos que el valor no sea vacio
    if (nuevaTareaTexto===""){
        alert("por favor, ingrese nueva tarea");
        return;
    }

    //creamos elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent=nuevaTareaTexto +" ";

    //crear boton eliminar
    let botonEliminar=document.createElement("button")
    botonEliminar.textContent="eliminar"
    botonEliminar.onclick=function(){nuevaTarea.remove();}

    //agregar boton de eliminar de la lista 
    nuevaTarea.appendChild(botonEliminar);

    //agrgar el elemento / la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value=" ";
   





}