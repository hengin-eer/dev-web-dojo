const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/contents")
let postlist = []

const getPost = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i);
                    }
                    return acc;
                }
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1,
                            metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj;
                    }
                }
                const parseContent = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1,
                            lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\r\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])

                const metadata = parseMetadata({ lines, metadataIndices })
                const content = parseContent({ lines, metadataIndices })
                post = {
                    id: metadata.id,
                    title: file.replace(".md", ""),
                    author: metadata.author ? metadata.author : "No author",
                    date: metadata.date ? metadata.date : "No date",
                    category: metadata.category ? metadata.category : "No category",
                    slug: file.replace(".md", ""),
                    content: content ? content : "No content",
                }
                postlist.push(post)
                let sortedlist = postlist.sort((a, b) => {
                    return (a.id < b.id) ? -1 : 1;
                })
                console.log(postlist)
                let data = JSON.stringify(sortedlist)
                fs.writeFileSync("src/posts.json", data)
            })
        })
        
    })
    return
}

getPost();