import * as express from 'express'
import { router } from '../router/router'
import { environment } from '../common/environment'
import { elasticSearch } from '../services/elasticsearch.service'

export class Server {

  public application: express.Application

  private initConfig(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express();
        router.applyRoutes(this.application)

        this.application.listen(environment.server.port, () => {
          resolve(this.application)
        })
      } catch(error) {
        reject(error)
      }
    })
  }

  public bootstrap(): Promise<Server> {
    return elasticSearch.createClient().then(client => {
      // client.indices.create({
      //   index: 'teste'
      // },(err, resp, status) => {
      //   if(err) {
      //     console.log(err);
      //   }
      //   else {
      //     console.log(status)
      //     console.log("create",resp);
      //   }
      // })
      return this.initConfig().then(() => this)
    })
      
    
  }

}