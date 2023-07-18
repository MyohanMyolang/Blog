import PostEntity from "../entity/PostEntity";

export default interface PostRepositoryInter {
  getRecentryPost(): number[]; // 카테고리에 상관 없이 모든 Post에서 가져온다.

  getPost(): (type: string) => PostEntity[]; // 생성자 또는 init에서 이 method를 부른다.
}
