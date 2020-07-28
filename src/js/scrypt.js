const tabs = document.querySelectorAll('.delivery_tab')
const tabsWrap = document.querySelector('.delivery__tabs')
const deliveryForm = document.querySelector('.delivery__form')
const deliveryPlaces = document.querySelector('.delivery__places')
const telInput = document.querySelector('#tel')
const nameInput = document.querySelector('#name')

//Переключение табов и блоков под ними
tabsWrap.addEventListener('click', (event) => {
    let classList = event.target.classList

    if (!classList.contains('active_tab')) {
        tabs.forEach(item => {
            item.classList.remove('active_tab')
        })
        classList.add('active_tab')

        if (classList.contains('delivery')) {
            deliveryPlaces.style.display = 'none'
            deliveryForm.style.display = 'flex'
        } else {
            deliveryForm.style.display = 'none'
            deliveryPlaces.style.display = 'flex'

        }
    }
})

const validate = (event, regular) => {
    let contralArr = event.target.value
    let childNodes = event.target.parentNode.childNodes

    event.target.value = event.target.value.replace(regular, '')

    if (contralArr == event.target.value) {
        childNodes[1].style.display = 'none'
        childNodes[5].style.display = 'none'
    } else {
        childNodes[1].style.display = 'block'
        childNodes[5].style.display = 'block'
    }
   
}

//Валидация фио
nameInput.addEventListener('input', (event) => {
    validate(event, /[^а-яёА-ЯЁ\s-]+$/i)
})
//Валидация телефона
telInput.addEventListener('input', (event) => {
    validate(event, /[^0-9+-\s,()]/)
})


deliveryForm.addEventListener('submit', (event) => {
    event.preventDefault()
        deliveryForm.childNodes[8].disabled = true 
})


