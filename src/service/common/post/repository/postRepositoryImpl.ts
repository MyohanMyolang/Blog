import { Container, Service } from "typedi";
import PostRepositoryInter from "./postRepositoryInter";

@Service()
class MemoryRepository implements PostRepositoryInter {
  getRecentryPost(): number {
    throw new Error("Method not implemented.");
  }
}

@Service()
class PostRepository {
  constructor(public Repository: MemoryRepository) {}

  public getPost() {}
}
