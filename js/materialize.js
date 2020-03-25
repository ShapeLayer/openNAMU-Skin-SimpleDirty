function materialize () {
    let buttons = document.getElementsByTagName('button')
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].className == undefined || buttons[i].className == '') {
            buttons[i].classList.add('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'mdl-js-ripple-effect', 'mdl-button__margin')
        }
    }

    let tables = document.getElementsByTagName('table')
    for (let i = 0; i < tables.length; i++) {
        tables[i].classList.add('mdl-data-table', 'mdl-js-data-table', 'mdl-shadow--2dp')
    }

    let inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        if ((inputs[i].className == undefined || inputs[i].className == '') && (inputs[i].type == 'text' || inputs[i].type == 'number' || inputs[i].type == 'password')) {
            if (inputs[i].id == undefined || inputs[i].id == '') {
                inputs[i].id = 'input' + i
            }

            let attributes = ''
            let attributesKeys = []
            for(let j = 0; j < inputs[i].attributes.length; j++) {
                attributesKeys.push(inputs[i].attributes[j].name)
                if (inputs[i].attributes[j].name === 'class') {
                    attributes = attributes + ' class="mdl-textfield__input ' + inputs[i].attributes[j].value + '"'
                } else {
                    attributes = attributes + ' ' + inputs[i].attributes[j].name + '="' + inputs[i].attributes[j].value + '"'
                }
            }
            if (attributesKeys.indexOf('class') < 0) {
                attributes = attributes + ' class="mdl-textfield__input"'
            }

            inputs[i].outerHTML = `
            <div class="mdl-textfield mdl-js-textfield">
                <input ` + attributes + `>
                <label class="mdl-textfield__label" for="` + inputs[i].id + `"></label>
            </div>
            `
        }
    }

    let textareas = document.getElementsByTagName('textarea')
    for (let i = 0; i < textareas.length; i++) {
        if ((textareas[i].className == undefined || textareas[i].className == '')) {
            if (textareas[i].id == undefined || textareas[i].id == '') {
                textareas[i].id = 'textarea' + i
            }

            let attributes = ''
            let attributesKeys = []
            for(let j = 0; j < textareas[i].attributes.length; j++) {
                attributesKeys.push(textareas[i].attributes[j].name)
                if (textareas[i].attributes[j].name === 'class') {
                    attributes = attributes + ' class="mdl-textfield__input ' + textareas[i].attributes[j].value + '"'
                } else {
                    attributes = attributes + ' ' + textareas[i].attributes[j].name + '="' + textareas[i].attributes[j].value + '"'
                }
            }
            if (attributesKeys.indexOf('class') < 0) {
                attributes = attributes + ' class="mdl-textfield__input"'
            }

            textareas[i].outerHTML = `
            <div class="mdl-textfield mdl-js-textfield">
                <textarea class="mdl-textfield__input" ` + attributes + `></textarea>
                <label class="mdl-textfield__label" for="` + textareas[i].id + `"></label>
            </div>
            `
        }
    }
}
