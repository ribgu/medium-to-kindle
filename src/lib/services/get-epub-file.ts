import { ReaderClient } from '../clients/ReaderClient'
import { marked } from 'marked'
import * as nodepub from 'nodepub'

interface EpubOptions {
    title: string
    author: string
    output: string
    coverImage?: string
}

export function getEpubFile(url: string): Promise<Blob> {
    const client = new ReaderClient()
    const mdArticle = client.getMarkdownContent(url)
}

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