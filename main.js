const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const rub = document.querySelector('#rub')
const convert = (elem, target, target2, ) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(e =>{
                target2 === 'som'?
                    e.value = (elem .value / response [e.id]).toFixed(2)
                    : e === som ?
                    e.value = (elem.value * response[elem.id]).toFixed(2)
                    :e.value = ((elem.value * response[elem.id])/ response[e.id]).toFixed(2)
            } )
            elem.value === '' && (target.forEach(e => e.value = ''))
        }
        request.onerror = () => {
            console.error("Запрос не удалось выполнить.")
        }
    }
}
convert(som,[usd , rub], 'som')
convert(usd ,[som,rub] )
convert(rub,[som,usd])