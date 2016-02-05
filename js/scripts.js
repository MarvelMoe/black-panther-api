function getInfo () {

var user = document.getElementById("inputHere").value
var comment = document.getElementById("inputHere2").value

var newUser = document.createTextNode("Username: " + user)
var newComment = document.createTextNode("Comment: " + comment)

var newList = document.createElement("li")
newList.className = "coolclass"

var newScreenName = document.createElement('p')
newScreenName.appendChild(newUser)

var newScreenComment = document.createElement("p")
newScreenComment.appendChild(newComment)

newList.appendChild(newScreenName)
newList.appendChild(newScreenComment)


document.getElementById("sweetlist").appendChild(newList)

}

function deleteInfo () {
	var remover = document.getElementById('sweetlist')
		remover.removeChild(remover.childNodes[0]);
	}


function getDate() {
var today = new Date()
var newPost = today.toDateString()
var newScreenDate = document.createTextNode(newPost)


document.getElementById("sweetlist").appendChild(newScreenDate)

}