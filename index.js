const fs = require('fs')



// Write/Create A File
async function writeFileSync(){
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>')
    console.log('Successfully written')
}



// File Read
async function readFileSync(){
    const data = await fs.readFileSync('TODO.txt','utf8')
    console.log(data);
}


// File Rename
async function renameFileSync(){
    await fs.renameSync('example.html','new.html')
    console.log('Rename successfully.')
}



// Delete File
async function deleteFileSync(){
    await fs.unlinkSync('new.html')
    console.log('Deleted successfully.')
}




// Create A Folder
async function createFolderSync() {
    await fs.mkdirSync('new')
    console.log('Created folder successfully.')
}


// Delete A Folder
async function deleteFolderSync() {
    await fs.rmdirSync('new')
    console.log('Delete folder successfully.')
}


async function renameFolderSync() {
    await fs.renameSync('new','new2')
    console.log('Renamed folder successfully.')
}


(async ()=>{
    await renameFolderSync()
})()







