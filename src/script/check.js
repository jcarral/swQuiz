//UI elements
const checkForm = document.getElementById('checkForm')
const inputCheckForm = document.getElementById('checkMail')
const deleteForm = document.getElementById('deleteStudent')
const inputDelete = document.getElementById('inputDelete')

/**
 * Funcion para realizar peticiones AJAX
 * @param  {
 *            method: String,
 *            url: String,
 *            body: String | Object [OPTIONAL]
 *          }
 * @return none
 */
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

/**
 * Funcion auxiliar para ocultar los tooltips
 */
const hideTooltips = () => {
  let tooltips = document.getElementsByClassName('tooltip')
  Array.prototype.forEach.call(tooltips, (item)=>{
    item.classList = 'hidden'
  })
}

const addTooltip = (res, elements, messages) => {
  hideTooltips()
    if (res.message === messages.validMessage) {
        elements.tooltip.classList = 'tooltip valid left'
        elements.tooltip.innerHTML = messages.valid
    } else {
        elements.tooltip.classList = 'tooltip error left'
        elements.tooltip.innerHTML = messages.error
    }
    elements.loading.classList += ' hidden'
}

/**
 * Función para gestionar la comprobación del correo
 */
const submitCheckForm = (e) => {
    e.preventDefault()
    let config = {
        url: `https://swrest.herokuapp.com/api/check/${inputCheckForm.value}`,
        method: 'GET',
    }
    let loading = document.getElementById('spinnerCheck')
    let tooltip = document.getElementById('tooltipCheck')

    //Se oculta el tooltip y se muestra el spinner
    tooltip.classList += 'hidden'
    loading.classList = 'bowlG'

    ajax(config)
        .then((res) => {
          //Si la respuesta es correcta se muestra el tooltip
          //dependiendo de si el correo es correcto o no
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
            console.error(res);
        })
}

/**
 * Función para gestionar el borrado de usuarios
 */
const submitDeleteForm = (e) => {
    e.preventDefault()
    let config = {
        url: `https://swrest.herokuapp.com/api/delete`,
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

/**
 * Función que se exporta y que pone a escuchar a los formularios
 */
const checkEmail = () => {
    if (checkForm === null || checkForm === 'undefined') return false
    checkForm.addEventListener('submit', submitCheckForm)
    deleteForm.addEventListener('submit', submitDeleteForm)
}

export const setCheck = checkEmail;
