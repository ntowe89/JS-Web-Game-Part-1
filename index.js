function newImage(imageName, imgLocation, leftPosition, bottomPosition){
    imageName = document.createElement('img')
    imageName.src = imgLocation
    imageName.style.position = 'fixed'
    imageName.style.left = leftPosition
    imageName.style.bottom = bottomPosition
    document.body.append(imageName)
}

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('tree', 'assets/tree.png', '200px', '300px')
newImage('pillar', 'assets/pillar.png', '350px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png', '500px', '425px')


function newItem(itemName, imgLocation, leftPosition, bottomPosition){
    itemName = document.createElement('img')
    itemName.src = imgLocation
    itemName.position = 'fixed'
    itemName.left = leftPosition
    itemName.bottom = bottomPosition
    document.body.append(itemName)

    itemName.addEventListener('dblclick', function(){
        itemName.remove()
    })
}
newItem('sword', 'assets/sword.png', '500px', '405px')
newItem('shield', 'assets/shield.png', '165px', '185px')
newItem('sword', 'assets/staff.png', '600px', '100px')


