# File Operations with Node.js

This project demonstrates basic file system operations using Node.js, including creating, reading, renaming, and deleting files and folders.

## Prerequisites

Make sure you have Node.js installed on your system. You can download and install it from [Node.js official website](https://nodejs.org/).

## Project Structure

```
project-folder/
│-- index.js
│-- README.md
```

## File System Operations

The following operations are implemented in `index.js`:

### 1. Write/Create a File
Creates a file named `example.html` and writes `<h1>Hello World!</h1>` to it.
```javascript
async function writeFileSync(){
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>')
    console.log('Successfully written')
}
```

### 2. Read a File
Reads the content of `TODO.txt` and prints it to the console.
```javascript
async function readFileSync(){
    const data = await fs.readFileSync('TODO.txt','utf8')
    console.log(data);
}
```

### 3. Rename a File
Renames `example.html` to `new.html`.
```javascript
async function renameFileSync(){
    await fs.renameSync('example.html','new.html')
    console.log('Rename successfully.')
}
```

### 4. Delete a File
Deletes `new.html`.
```javascript
async function deleteFileSync(){
    await fs.unlinkSync('new.html')
    console.log('Deleted successfully.')
}
```

### 5. Create a Folder
Creates a folder named `new`.
```javascript
async function createFolderSync() {
    await fs.mkdirSync('new')
    console.log('Created folder successfully.')
}
```

### 6. Delete a Folder
Deletes the `new` folder.
```javascript
async function deleteFolderSync() {
    await fs.rmdirSync('new')
    console.log('Delete folder successfully.')
}
```

### 7. Rename a Folder
Renames the `new` folder to `new2`.
```javascript
async function renameFolderSync() {
    await fs.renameSync('new','new2')
    console.log('Renamed folder successfully.')
}
```

## Running the Code

1. Clone this repository or create a new folder and add `index.js`.
2. Open a terminal and navigate to the project folder.
3. Run the script using:
   ```sh
   node index.js
   ```

## Notes
- Ensure `TODO.txt` exists before running the `readFileSync` function to avoid errors.
- Use `fs.promises` instead of `fs` for a more modern async/await approach.

## License
This project is for practice purposes and is open for modification and learning.

# File Operations with Node.js

This project demonstrates basic file system operations using Node.js, including creating, reading, renaming, and deleting files and folders.

## Prerequisites

Make sure you have Node.js installed on your system. You can download and install it from [Node.js official website](https://nodejs.org/).

## Project Structure

```
project-folder/
│-- index.js
│-- README.md
│-- package.json
```

## File System Operations

The following operations are implemented in `index.js`:

### 1. Write/Create a File
Creates a file named `example.html` and writes `<h1>Hello World!</h1>` to it.
```javascript
async function writeFileSync(){
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>')
    console.log('Successfully written')
}
```

### 2. Read a File
Reads the content of `TODO.txt` and prints it to the console.
```javascript
async function readFileSync(){
    const data = await fs.readFileSync('TODO.txt','utf8')
    console.log(data);
}
```

### 3. Rename a File
Renames `example.html` to `new.html`.
```javascript
async function renameFileSync(){
    await fs.renameSync('example.html','new.html')
    console.log('Rename successfully.')
}
```

### 4. Delete a File
Deletes `new.html`.
```javascript
async function deleteFileSync(){
    await fs.unlinkSync('new.html')
    console.log('Deleted successfully.')
}
```

### 5. Create a Folder
Creates a folder named `new`.
```javascript
async function createFolderSync() {
    await fs.mkdirSync('new')
    console.log('Created folder successfully.')
}
```

### 6. Delete a Folder
Deletes the `new` folder.
```javascript
async function deleteFolderSync() {
    await fs.rmdirSync('new')
    console.log('Delete folder successfully.')
}
```

### 7. Rename a Folder
Renames the `new` folder to `new2`, creating it first if necessary.
```javascript
async function renameFolderSync() {
    if (fs.existsSync('new')) {
        await fs.renameSync('new', 'new2');
        console.log('Renamed folder successfully.');
    } else {
        console.log("Folder 'new' does not exist. Creating it first...");
        await fs.mkdirSync('new');
        await fs.renameSync('new', 'new2');
        console.log("Folder 'new' was created and renamed to 'new2'.");
    }
}
```

## Running the Code

1. Clone this repository or create a new folder and add `index.js` and `package.json`.
2. Open a terminal and navigate to the project folder.
3. Install dependencies (if any) using:
   ```sh
   npm install
   ```
4. Run the script using:
   ```sh
   npm start
   ```

## Notes
- Ensure `TODO.txt` exists before running the `readFileSync` function to avoid errors.
- The `renameFolderSync` function now ensures the folder exists before renaming it.
- Use `fs.promises` instead of `fs` for a more modern async/await approach.

## License
This project is for practice purposes and is open for modification and learning.

