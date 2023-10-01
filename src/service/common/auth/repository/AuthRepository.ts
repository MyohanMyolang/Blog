export default interface AuthRepository {
  checkUser(userInfo: UserType): boolean;
}
