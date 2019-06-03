import * as elasticsearch from 'elasticsearch'

class ElasticSearchService {

  public createClient(): Promise<elasticsearch.Client> {
    return new Promise((resolve, reject) => {
      try {
        const client = new elasticsearch.Client({
          host: 'http://localhost:9200'
        })
        resolve(client)
      } catch(error) {
        reject(error)
      }
    })
  }
}

export const elasticSearch = new ElasticSearchService()