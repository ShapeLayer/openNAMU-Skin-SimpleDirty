function toastSnackBar (text, timeout) {
    let notification = document.querySelector('.mdl-js-snackbar')
    notification.MaterialSnackbar.showSnackbar(
        {
            message: text,
            timeout: timeout
        }
    )
}