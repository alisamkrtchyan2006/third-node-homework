const fs = require('fs')

// Task 1

// const fileDescriptorWrite = fs.openSync("data.txt", "w")

// fs.writeSync(fileDescriptorWrite, "Hello, this is the first line.\n")
// fs.writeSync(fileDescriptorWrite, "This is the second line.\n")

// fs.closeSync(fileDescriptorWrite)



// Task 2

// const fileDescriptorRead = fs.openSync("data.txt", "r")
// const buffer = Buffer.alloc(64)
// const readFile = fs.readSync(fileDescriptorRead, buffer)
// console.log("File content:", buffer.toString('utf8', 0, readFile))

// fs.closeSync(fileDescriptorRead)




// Task 3

// const sourceFile = fs.openSync("data.txt", "r")
// const newWriteFile = fs.openSync("copy.txt", "w")
// const bufferCopy = Buffer.alloc(16)

// let bytesCopy
// while((bytesCopy = fs.readSync(sourceFile, bufferCopy)) > 0) {
//     fs.writeSync(newWriteFile, bufferCopy, 0 , bufferCopy)
// }

// fs.closeSync(sourceFile)
// fs.closeSync(newWriteFile)




// Task 4

// const writeFile = fs.openSync('data.txt', 'w')
// fs.writeSync(writeFile, 'Hello, this is the first line.\n')
// const fileDescriptorAppend = fs.openSync('data.txt', 'a') 
// fs.writeSync(fileDescriptorAppend, 'This is the second line.\n')

// fs.closeSync(writeFile)
// fs.closeSync(fileDescriptorAppend)





// Task 5

// const fileDescriptor = fs.openSync('example.txt', 'w+')

// fs.writeSync(fileDescriptor, "0123456789")
// fs.writeSync(fileDescriptor, "AB", 4, "AB".length)
// fs.closeSync(fileDescriptor)

// const fileDescriptorRead = fs.openSync('example.txt', 'r')
// const buffer = Buffer.alloc(10)

// fs.readSync(fileDescriptorRead, buffer)

// console.log("File content:", buffer.toString('utf8'))

// fs.closeSync(fileDescriptorRead)





// Task 6

// const fileDescriptor = fs.openSync('data.txt', 'r')
// const fileStats = fs.fstatSync(fileDescriptor)
// const fileLength = fileStats.size

// console.log("File length (in bytes):", fileLength)

// const middlePosition = Math.floor(fileLength / 2)

// fs.readSync(fileDescriptor, Buffer.alloc(0), 0, 0, middlePosition)

// const buffer = Buffer.alloc(10)
// const bytesRead = fs.readSync(fileDescriptor, buffer, 0, buffer.length, middlePosition)

// console.log("Next 10 bytes from the middle of the file:", buffer.toString('utf8', 0, bytesRead))


// fs.closeSync(fileDescriptor)




// Task 7

// fs.writeFileSync('file1.txt', 'Content of the first file.\n')
// fs.writeFileSync('file2.txt', 'Content of the second file.\n')

// const mergedFile = 'merged.txt'

// const file1Content = fs.readFileSync('file1.txt')
// const file2Content = fs.readFileSync('file2.txt')

// const combinedContent = Buffer.concat([file1Content, file2Content])

// fs.writeFileSync(mergedFile, combinedContent)

// console.log('Files merged successfully into merged.txt!')





// // Task 8

// try {
//     const filePath = 'message.txt'
//     fs.writeFileSync(filePath, 'Hello World!')

//     const fileContent = fs.readFileSync(filePath)
//     const insertPosition = fileContent.indexOf('Hello') + 'Hello'.length
    
//     const newContent = Buffer.concat([
//         fileContent.slice(0, insertPosition),
//         Buffer.from(' Awesome'),
//         fileContent.slice(insertPosition) 
//     ])

//     fs.writeFileSync(filePath, newContent);

//     console.log('Updated File Content:', newContent.toString())

// } catch (error) {
//     console.error('Error inserting content:', error.message)
// }