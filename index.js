// created new parameters
function newImage(imageURL, left, bottom) {
//change name to object to simplify things  
let obj = document.createElement('img')
obj.src = imageURL
obj.style.position = 'fixed'
obj.style.left = left + 'px'
obj.style.bottom = bottom + 'px'
document.body.append(obj)
}

//let obj = document.createElement('img')
//obj.src = 'assets/green-character.gif'
//obj.style.position = 'fixed'
//obj.style.left = '100px'
//obj.style.bottom = '100px'
//document.body.append(obj)

//copied code and changed it to a pine tree
//let obj = document.createElement('img')
//obj.src = 'assets/pine-tree.png'
//obj.style.position = 'fixed'
//obj.style.left = '450px'
//obj.style.bottom = '200px'
//document.body.append(obj)

// added my images in the right place
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//copied code from above to get same outcome 
function newItem(imageURL, left, bottom){
let obj = newImage(imageURL, left, bottom)
obj.addEventListener('dbclick', function(){
    obj.remove()
})
}

//added my new items with new function
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
