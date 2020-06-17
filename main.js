let bodyElement = document.querySelector ('body')

let newButton = document.createElement ('Button')
newButton.append('Remove')
bodyElement.append(newButton)

let newMain = document.createElement ('Main')
bodyElement.append(newMain)

let classImg = document.createElement('img')
classImg.src = 'http://www.xclusivetouch.co.uk/wp-content/uploads/2014/06/the-it-crowd-funny-computer-gif.gif'
classImg.className = 'img'
newMain.append(classImg)
bodyElement.append(newMain)

let classAnchor = document.createElement('a')
classAnchor.href = 'https://www.imdb.com/title/tt0487831/'
classAnchor.append("See more IT Crowd")
classAnchor.className = 'link'
newMain.append(classAnchor)
bodyElement.append(newMain)

newButton.addEventListener("click", function(){
 newMain.remove()
})

let newInput = document.createElement ('Input')
newInput.type = 'text'
newInput.id = 'textbox'
newInput.placeholder = 'Can you relate?'
bodyElement.append(newInput)

let bodyButton = document.createElement ('Button')
bodyButton.append('Click to add comment')
bodyElement.append(bodyButton)



bodyButton.addEventListener("click", function(){
   let newDiv = document.createElement ('Div')
    newDiv.append(newInput)
    bodyElement.append(newDiv)
    
})






