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

const createSpinner = () => {
  let div = document.createElement('div')
  div.classList = 'bowlG'
  div.innerHTML = `
                  	<div id="bowl_ringG">
                  		<div class="ball_holderG">
                  			<div class="ballG">
                  			</div>
                  		</div>
                  	</div>`
  return div
}

const createTooltip = (message, typeClass) => {
  let div = document.createElement('div')
  div.classList = `tooltip ${typeClass}`
  div.innerHTML = `
    ${message} 
  `
  return div
}
const submitCheckForm = (e) => {
    e.preventDefault()
    let config = {
        url: `https://swrest.herokuapp.com/api/check`,
        method: 'POST',
        body: `correo=${inputCheckForm.value}`
    }
    let loading = createSpinner()
    checkForm.appendChild(loading)
    ajax(config)
        .then((res) => {
            res = JSON.parse(res)
            if (res.message === 'Correo válido') {
              loading.classList += ' hidden'
              checkForm.appendChild(createTooltip(res.message, 'valid'))
            }
        })
        .catch((res) => {
            console.log(res);
        })
}

const submitDeleteForm = (e) => {
    e.preventDefault()
    let config = {
        url: `https://swrest.herokuapp.com/api/delete`,
        method: 'DELETE',
        body: `correo=${inputDelete.value}`
    }
    ajax(config)
        .then((res) => {

        })
}

const checkEmail = () => {
    if (checkForm === null || checkForm === 'undefined') return false
    checkForm.addEventListener('submit', submitCheckForm)
    deleteForm.addEventListener('submit', submitDeleteForm)
}

export const setCheck = checkEmail;
