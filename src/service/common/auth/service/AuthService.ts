import { inject, injectable } from "inversify";
import Auth_Identifier from "../inversify/AuthIdentifier";
import type AuthRepository from "../repository/AuthRepository";

@injectable()
export default class AuthService {
  private _authRepository: AuthRepository;

  constructor(
    @inject(Auth_Identifier.AuthRepository) authRepository: AuthRepository
  ) {
    this._authRepository = authRepository;
  }

  public getUser(user: UserType): string | null {
    if (this._authRepository.checkUser(user)) {
      // return jwt Token
      return "testToken";
    }
    return null;
  }
}
