let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)


let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')

let dogImg = document.createElement('img')
dogImg.setAttribute('class', 'dog-image')
dogImg.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImg)

let detail = document.createElement('div')
detail.setAttribute('class', 'dog-details')
let description = document.createElement('h3')
description.textContent = 'Description:'
let paragraph = document.createElement('p')
paragraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called." +
"She always acts as though any stranger she meets will harm her," + "and dislikes other animals."

detail.append(description)
detail.append(paragraph)
dogContent.append(detail)

let time = document.createElement('h3')
time.textContent = 'Feeding Times: '

let list = document.createElement('ul')
let time1 = document.createElement('li')
let time2 = document.createElement('li')
let time3 = document.createElement('li')

time1.textContent = '9:00 am'
time2.textContent = '12:00 pm'
time3.textContent = '5:00 pm'

list.append(time1)
list.append(time2)
list.append(time3)

detail.append(time)
detail.append(list)
dogContent.append(detail)
content.append(dogContent)