let input = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")


class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }
    crearDiv(nuevaTarea){
        //ESTA FUNCION CREA EL CONTENEDOR DONDE VAN LOS INPUT Y LOS 2 BOTONES REMOVER Y EDITAR
        let divContainer = document.createElement("div")
        let inputItem = document.createElement("input")
        let botonEditar= document.createElement('button')
        let botonRemover= document.createElement('button')
        //disabled:elemento deshabilitado
        inputItem.setAttribute('disabled','true')
        //AGREGAR CLASE CSS AL INPUT
        inputItem.classList.add("input")
        //EL VALOR DEL INPUT ES EL PARAMETRO DE LA FUNCION CREARDIV "NUEVATAREA"
        inputItem.setAttribute("value", nuevaTarea)
        inputItem.setAttribute('type','text')
        //AGREGA CLASE CSS
        inputItem.setAttribute('class','item-input')

        

        //AGREGAR CLASE CSS
        divContainer.classList.add("itemContainer")
        //innerHTML podemos modificar el contenido del tag O reemplazándolo por otro tag, agregando con tags.
        // SE AGREGA BOTON EDITAR CANDADO
        botonEditar.innerHTML= `<i class="fa-solid fa-lock"></i>`
        //CLASE CSS
        botonEditar.classList.add("buttonGeneral")
        // SE AGREGA BOTON BASURERO
        botonRemover.innerHTML=`<i class="fa-solid fa-trash"></i>`
        //CLASE CSS
        botonRemover.classList.add("buttonGeneral")
         //CLASE DE CSS
        divContainer.setAttribute('class','itemContainer')


        divContainer.appendChild(inputItem)
        divContainer.appendChild(botonEditar)
        divContainer.appendChild(botonRemover)
        container.appendChild(divContainer)
        //_____________________________________________
       
        botonEditar.addEventListener('click', function(){
            if(inputItem.disabled){
             this.innerHTML='<i class="fa-solid fa-lock-open"></i>'
            } 
            else this.innerHTML='<i class="fa-solid fa-lock"></i>'
            inputItem.toggleAttribute('disabled');
        })
        //__________________________________________-
        botonRemover.addEventListener("click", function(){
            document.querySelector('.container').removeChild(divContainer)
        })
    }
}


function chequearInput (){
    if (input.value ) {
        new Item (input.value).crearDiv
        input.value = ""
    }
}

botonAgregar.addEventListener("click", function(){
    chequearInput()
    
})

    