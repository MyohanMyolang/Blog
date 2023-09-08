import MemoryPostRepository from "@/service/common/post/repository/MemoryPostRepository";
import { Container } from "inversify";

export type IDENTIFIER_TYPE = Object & {
  [key: string]: symbol;
};

/**
 * If you want Send Custom Paramater You should Make Custom Method And
 *  Setting in InversifyManagerError's CustomMethod
 *
 * 커스텀 Paramater를 전달하여 내부에서 사용하고 싶은 경우
 *  InversifyManagerError의 CustomMethod를 이용하여 등록 시킨다.
 */

type inversifyType<T, U> = {
  identifier: symbol;
  target: new () => T extends U ? T : null;
};

const ErrorCode = {
  AlreadyHasSymbolKey: { code: 101, message: "AlreadyHasSymbolKey" },
} as const;

type ErrorObject = (typeof ErrorCode)[keyof typeof ErrorCode];

class InversifyManagerError extends Error {
  constructor(ErrorObject: ErrorObject) {
    super(ErrorObject.message);
  }
}

class InversifyManager {
  //private _IDENTIFIER: IDENTIFIER_TYPE = {};
  private _Container = new Container();

  private _IDENTIFIER = new Map<symbol, new () => {}>();

  public constructor() {}

  private appendType(identifier: symbol, value: new () => {}) {
    try {
      if (this._IDENTIFIER.has(identifier))
        throw new InversifyManagerError(ErrorCode.AlreadyHasSymbolKey);

      this._IDENTIFIER.set(identifier, MemoryPostRepository);
    } catch (error) {
      if (error instanceof InversifyManagerError) {
        console.error(error.message);
        process.exit(1);
      }
    }
  }

  public bindDfendency<T, U>({
    identifier,
    target,
  }: inversifyType<T, U>): void {
    if (target !== null) {
      this.appendType(identifier, target as never);
      this._Container.bind<T>(identifier).to(target as never);
    }
  }

  public getDependencyByType(type: symbol) {
    const target = this._IDENTIFIER.get(type);
    this._Container.get<InstanceType<typeof target>>(type);
  }
}

const InverManager = new InversifyManager();

export default InverManager;
