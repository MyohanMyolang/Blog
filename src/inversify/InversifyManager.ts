/**
 * @author MyohanMyolang
 */

import MemoryPostRepository from "@/service/common/post/repository/MemoryPostRepository";
import { PostService } from "@/service/common/post/service/PostService";
import { Container, interfaces } from "inversify";

const ErrorCode = {
  AlreadyHasSymbolKey: { code: 101, message: "AlreadyHasSymbolKey" },
} as const;

type ErrorObject = (typeof ErrorCode)[keyof typeof ErrorCode];

class InversifyManagerError extends Error {
  constructor({
    ErrorObject,
    ErrorParam,
  }: {
    ErrorObject: ErrorObject;
    ErrorParam?: Object;
  }) {
    super(ErrorObject.message);
  }
}
type identifireType = string | symbol;

type inversifyType<I> = {
  identifier: identifireType;
  target: new (...args: never[]) => I;
};

/**
 * If you want Send Custom Paramater You should Make Custom Method And
 *  Setting in InversifyManagerError's CustomMethod
 *
 * 커스텀 Paramater를 전달하여 내부에서 사용하고 싶은 경우
 *  InversifyManagerError의 CustomMethod를 이용하여 등록 시킨다.
 */

class InversifyManager {
  public constructor() {}

  private _Container = new Container();

  /*
  본래는 Symbol Type만으로 가져올 수 있게 할 예정이었지만, 마땅한 방법이 없어 보여 폐기

  private _IDENTIFIER = new Map<symbol, Object>();
  private appendType(identifier: symbol, value: ClassType) {
    try {
      if (this._IDENTIFIER.has(identifier))
        throw new InversifyManagerError({
          ErrorObject: ErrorCode.AlreadyHasSymbolKey,
        });

      this._IDENTIFIER.set(identifier, MemoryPostRepository);
    } catch (error) {
      if (error instanceof InversifyManagerError) {
        console.error(error.message);
        process.exit(1);
      }
    }
  }
  */

  /**
   * @param I Input InterFace Or Class. | InterFace 또는 Class를 넣어주십시오.
   * @param identifier Input The Identifier, String Or Symbol Type | Identifier를 넣어주십시오, String 또는 Symbol Type
   * @param target Input target Class Constructor | 넣을 대상의 생성자를 넣어주십시오.
   * @example
   * bindDefendency<SomeInterface>({
   *  identifier : "SomeClass",
   *  target: SomeClass
   * })
   */
  public bindDfendency<I>({ identifier, target }: inversifyType<I>): void {
    this._Container.bind<I>(identifier).to(target);
  }

  public getDependencyByType<T>(type: identifireType): T {
    return this._Container.get<T>(type);
  }
}

const InverManager = new InversifyManager();

export default InverManager;
