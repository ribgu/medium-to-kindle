import axios, { AxiosInstance } from 'axios'

export class ReaderClient {
    private readonly axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://r.jina.ai/'
        })
    }

    async getMarkdownContent(url: string): Promise<string> {
        const response = await this.axiosInstance.get(url)
        return response.data
    }
}