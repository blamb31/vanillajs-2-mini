document.querySelector("form").addEventListener("submit", addTodo)

function addTodo(e) {
    e.preventDefault()
    let item = document.createElement("li")
    item.innerText = document.querySelector("#item").value
    item.addEventListener("click", completeTodo)

    let delBox = document.createElement("button")
    delBox.innerText = "X"
    delBox.addEventListener("click", removeTodo)
    item.append(delBox)

    let list = document.querySelector("ul")
    list.appendChild(item)
    
}

function removeTodo (e) {
    e.target.parentNode.remove()
    console.log("Removed")
}

function completeTodo(event) {
    let status = event.target.getAttribute("aria-checked")
    if (status !== "true") {
        event.target.setAttribute("aria-checked", 'true')
        console.log("wrong")

    }
    else {
        event.target.setAttribute("aria-checked", 'false')

    }


    success = document.querySelector('#completed-message')
    success.style.visibility = 'visible'

    setTimeout(function() {
        success.style.visibility = "hidden"
    }, 2000)
}
