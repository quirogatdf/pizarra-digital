export interface JwtResponse {
  login: boolean
  dataUser:{
    id: number,
    username: string,
    password: string,
    accessToken: string,
    expiresIn: string
  }

}