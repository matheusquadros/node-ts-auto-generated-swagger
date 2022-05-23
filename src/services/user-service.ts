export interface UserModel {
  id: number
  name: string
}

const users: UserModel[] = []

export function getAll (): UserModel[] {
  return users
}
export function addUser (user: UserModel): void {
  users.push(user)
}
