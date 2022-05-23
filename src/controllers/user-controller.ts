import { Get, Post, Route, Body } from 'tsoa'
import { UserModel, getAll, addUser } from '../services/user-service'

@Route('User')
export default class UserController {
  @Get()
  public async GetAll (): Promise<UserModel[]> {
    return getAll()
  }

  @Post()
  public async Add (@Body() user: UserModel): Promise<void> {
    addUser(user)
  }
}
