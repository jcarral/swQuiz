//UI elements
const table = document.getElementById('table-quiz')

const addRow = (data) => {
    let row = ''
    data.forEach((value, i) => {
        row += (i === 2) ? `<div class="cell cell-answer">${value}</div>` : `<div class="cell">${value}</div>`
    })
    return row;
}

const getJSONPost = () => {
    return new Promise((resolve, reject) => {
        let http = new XMLHttpRequest();
        let url = "/api/questions";
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = () => {
            if (http.readyState == 4 && http.status == 200) {
                resolve(http.responseText)
            }
        }
        http.send()
    })
}

const fillTable = (data) => {
    data = JSON.parse(data)
    let questions = data.assessmentItems.assessmentItem
    for (let question of questions) {
        let row = document.createElement('div')
        row.classList += ' row'
        let data = [question['itemBody']['p'], question['-complexity'], question['correctResponse']['value'], question['-subject']]
        row.innerHTML = addRow(data)
        table.appendChild(row)
    }
}

const addTable = () => {
    if (table === null || typeof table === 'undefined') return false //Para que se siga ejecutando si no es la pagina
    getJSONPost()
        .then((data) => {
            fillTable(data)
        })
}


export const setTable = addTable;
