import * as express from 'express'
import { users } from '../users/users'
import { services } from '../services/services'

class Router {
  private getAllWebsites = (req: express.Request, res: express.Response) => {
    users.getUsers().then(users => {
      res.json({web_sites: services.filterWebSites(users)})
    }).catch(error => console.error(error))
  }

  private getUsersInOrder = (req: express.Request, res: express.Response) => {
    users.getUsers().then(users => {
      res.json({users: services.filterUsersInOrder(users)})
    }).catch(error => console.error(error))
  }

  private getUsersSuite = (req: express.Request, res: express.Response) => {
    users.getUsers().then(users => {
      res.json({users: services.filterSuiteAddress(users)})
    }).catch(error => console.error(error))
  }

  public applyRoutes(application: express.Application) {
    application.get('/listAllWebSites', this.getAllWebsites)
    application.get('/listUsersInOrder', this.getUsersInOrder)
    application.get('/listUsersSuite', this.getUsersSuite)
  }
}

export const router =  new Router()