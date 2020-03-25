function getExtension (str) {
    return str.substring(str.lastIndexOf('.'))
}

function bindingEvents (target) {
    target.addEventListener('dragover', dragOver)
    target.addEventListener('dragleave', dragOver)
    target.addEventListener('drop', uploadFiles)
}

function dragOver (e) {
    e.stopPropagation()
    e.preventDefault()
    if (e.type === 'dragover') {
        e.target.classList.add('textarea-drag')
    } else {
        e.target.classList.remove('textarea-drag')
    }
}

function uploadFiles (e) {
    e.stopPropagation()
    e.preventDefault()
    dragOver(e)

    let now = new Date()
    let files = e.target.files || e.dataTransfer.files
    let filename = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + '-' + now.getTime()

    document.getElementById('file-uploader-form__file').files = files
    document.getElementById('file-uploader-form__name').value = filename

    let form = new FormData(document.getElementById('file-uploader-form'))
    let xhr = new XMLHttpRequest()
    xhr.open('POST' , '/upload' , true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            toastSnackBar('업로드가 완료되었습니다. 이제 문서를 저장해도 됩니다.', 3000)
            if (window.location.pathname.match(/(\/edit\/).*?/)) {
                document.getElementById('save').disabled = false
            }
        }
    }
    if (window.location.pathname.match(/(\/edit\/).*?/)) {
        document.getElementById('save').disabled = true
    }
    toastSnackBar('파일 업로드중입니다. 업로드가 완료될때까지 문서를 저장하거나 페이지를 이동하지 마세요.', 3000)
    xhr.send(form)

    if (files.length == 1) {
        e.target.value += ('[[file:'+ filename + getExtension(files[0].name) + ']]')
    } else {
        for (let i = 0; i < files.length; i++) {
            e.target.value += ('[[file:'+ filename + ' ' + (i+1) + getExtension(files[i].name) + ']]')
        }
    }
}