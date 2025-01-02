const area = document.getElementById('txtArea')
area.focus()

//mudar a cor do texto
api.setColor((event, color) => {
    area.style.color = color
})