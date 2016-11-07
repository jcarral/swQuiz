//UI elements
const checkForm = document.getElementById('checkForm')
const inputCheckForm = document.getElementById('checkMail')
const deleteForm = document.getElementById('deleteStudent')
const inputDelete = document.getElementById('inputDelete')

const ajax = (config) => {
    return new Promise((resolve, reject) => {
        let http = new XMLHttpRequest()
        http.open(config.method, config.url, true)
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status == 200) {
                resolve(http.responseText)
            } else if (http.status == 400) {
                reject(http.responseText)
            }
        }
        http.send(config.body)
    })
}

const addTooltip = (res, elements, messages) => {
    if (res.message === messages.validMessage) {
        elements.tooltip.classList = 'tooltip valid'
        elements.tooltip.innerHTML = messages.valid
    } else {
        elements.tooltip.classList = 'tooltip error'
        elements.tooltip.innerHTML = messages.error
    }
    elements.loading.classList += ' hidden'
}

const submitCheckForm = (e) => {
    e.preventDefault()
    let config = {
        url: `https://swrest.herokuapp.com/api/check`,
        method: 'POST',
        body: `correo=${inputCheckForm.value}`
    }
    let loading = document.getElementById('spinnerCheck')
    let tooltip = document.getElementById('tooltipCheck')

    tooltip.classList += 'hidden'
    loading.classList = 'bowlG'

    ajax(config)
        .then((res) => {
            res = JSON.parse(res)
            let elements = {
                tooltip: tooltip,
                loading: loading
            }
            let messages = {
                validMessage: 'Correo válido',
                valid: 'Correo correcto',
                error: 'Correo incorrecto'
            }
            addTooltip(res, elements, messages)
        })
        .catch((res) => {
            console.log(res);
        })
}

const submitDeleteForm = (e) => {
    e.preventDefault()
    let config = {
        url: `https://swrest.herokuapp.com/api/check`,
        method: 'DELETE',
        body: `correo=${inputDelete.value}`
    }
    let loading = document.getElementById('spinnerDelete')
    let tooltip = document.getElementById('tooltipDelete')

    tooltip.classList += 'hidden'
    loading.classList = 'bowlG'
    ajax(config)
        .then((res) => {
            res = JSON.parse(res)
            let elements = {
                tooltip: tooltip,
                loading: loading
            }
            let messages = {
                validMessage: 'Estudiante eliminado correctamente',
                valid: 'Estudiante borrado correctamente',
                error: 'No se ha podido borrar al estudiante'
            }
            addTooltip(res, elements, messages)
        }).catch((err) => {
            tooltip.classList = 'tooltip error'
            tooltip.innerHTML = 'No se ha podido borrar al estudiante, error'
            loading.classList += ' hidden'
        })
}

const checkEmail = () => {
    if (checkForm === null || checkForm === 'undefined') return false
    checkForm.addEventListener('submit', submitCheckForm)
    deleteForm.addEventListener('submit', submitDeleteForm)
}

export const setCheck = checkEmail;