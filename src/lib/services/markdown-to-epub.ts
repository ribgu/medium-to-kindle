import { marked } from 'marked'
async function markdownToEpub(mdArticle: string): Promise<Blob> {
    const htmlContent = marked(mdArticle)

    const options = {
        title: 'Medium to Kindle',
        author: 'Jina AI',
        output: 'epub',
        content: [
            {
                title: 'Medium to Kindle',
                data: mdArticle
            }
        ]
    }

    const metadata = {
        id: Date.now().toString(),
        title: 'Medium to Kindle',
        author: 'Jina AI',
        cover: 'cover.jpg',
        files: []
    }

    const epub = nodepub.document(metadata)

    epub.addSection('medium', htmlContent, false, false)

    const epubFile = await epub.writeEPUB(options)

    return epubFile

}