let bodyElement = document.querySelector ('body')

let newButton = document.createElement ('Button')
newButton.append('Remove')
bodyElement.append(newButton)

let newMain = document.createElement ('Main')
newMain.className = 'classImg'
bodyElement.append(newMain)

let classImg = document.createElement('img')
classImg.src = 'http://www.xclusivetouch.co.uk/wp-content/uploads/2014/06/the-it-crowd-funny-computer-gif.gif'
newMain.append(classImg)
bodyElement.append(newMain)

let classAnchor = document.createElement('a')
classAnchor.href = 'https://www.imdb.com/title/tt0487831/'
classAnchor.append("See more IT Crowd")
newMain.append(classAnchor)
bodyElement.append(newMain)





newButton.addEventListener("click", function(){
 newMain.remove()
})
