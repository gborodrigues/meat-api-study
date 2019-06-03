import * as request from 'request'
import { environment } from '../common/environment'

class Users {

  public getUsers(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      request.get(environment.endPointUsers.url, 
        { json: true }, 
        (error, res, body) => {
          if (error) reject(error)
          resolve(body)
      })
    })
  }
}

export const users = new Users()