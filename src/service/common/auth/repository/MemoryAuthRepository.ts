import { injectable } from "inversify";
import AuthRepository from "./AuthRepository";

const user: Object & UserType = {
  id: "a@b.c",
  pw: "asdf",
};

@injectable()
export default class MemoryAuthRepository implements AuthRepository {
  constructor() {}

  public checkUser(userInfo: UserType): boolean {
    if (user.id === userInfo.id && user.pw === userInfo.pw) return true;

    return false;
  }
}
