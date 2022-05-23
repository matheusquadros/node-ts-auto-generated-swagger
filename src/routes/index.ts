import { Router, Request, Response } from 'express'
import { UserModel } from '../services/user-service'
import UserController from '../controllers/user-controller'

const router = Router()

router.get('/user', async (req: Request, res: Response) => {
  const controller = new UserController()
  const response = await controller.GetAll()
  return res.send(response)
})

router.post('/user', async (req: Request, res: Response) => {
  const user: UserModel = req.body
  const controller = new UserController()
  await controller.Add(user)
  return res.status(201).send()
})

export default router
