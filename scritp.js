const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta =document.querySelector('.list-tasks')

let mylist = []


function adicionarNovaTarefa(){
    mylist.push({
        tarefa: input.value,
        concluida: false
    })
    
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi= ''
    


    mylist.forEach( (item, posicao ) => {
        novaLi = novaLi + `
        
        <li class="task ${item.concluida && 'done'}">
            <img src="img/checked.png" alt="checked" onclick="tarefaChecked(${posicao})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="lixeira" onclick="deletar(${posicao})">
        </li>
        
        `
    } ) 

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(mylist))

}


    function tarefaChecked(posicao){
        mylist[posicao].concluida = !mylist[posicao].concluida 
        
        mostrarTarefas()

    }

    function deletar(posicao){
        mylist.splice(posicao, 1)

        mostrarTarefas()
    }

    function recarregar(){
        const tarefasDoStorage = localStorage.getItem('lista')

        if (tarefasDoStorage) {
        mylist= JSON.parse(tarefasDoStorage)
        
        }
        mostrarTarefas()
    }

recarregar()

button.addEventListener('click', adicionarNovaTarefa )