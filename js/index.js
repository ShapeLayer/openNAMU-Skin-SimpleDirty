function materialize () {
    let buttons = document.getElementsByTagName('button')
    for(let i = 0; i<buttons.length; i++) {
        if (buttons[i].className == undefined || buttons[i].className == '') {
            buttons[i].classList.add('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'mdl-js-ripple-effect', 'mdl-button__margin')
        }
    }

    let tables = document.getElementsByTagName('table')
    for(let i = 0; i<tables.length; i++) {
        tables[i].classList.add('mdl-data-table', 'mdl-js-data-table', 'mdl-shadow--2dp')
    }

}

window.onload = materialize()