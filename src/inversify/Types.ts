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
type InversifyManagerErrorType = {
  errorCode: number;
  errorMsg: string;
  param?: Object;
};

export class InversifyManagerError extends Error {
  constructor(ErrorObject: InversifyManagerErrorType) {
    super(ErrorObject.errorMsg);
  }
}

class InversifyManager {
  private _IDENTIFIER: IDENTIFIER_TYPE = {};
  private _Container = new Container();

  public constructor() {}

  public appendType(identifier: IDENTIFIER_TYPE) {
    try {
      Object.keys(identifier).forEach((key, idx) => {
        if (this._IDENTIFIER.hasOwnProperty(key))
          throw new Error("중복되는 키가 존재합니다.");
      });
      this._IDENTIFIER = {
        ...this._IDENTIFIER,
        ...identifier,
      };
    } catch (error) {
      if (error instanceof InversifyManagerError) {
        console.error(error.message);

        console.info("중복되는 Key값이 있습니다.");
        process.exit(1);
      }
    }
  }

  /**
   *
   * @param setter Inversify Container Setting
   */
  public setContainer(setter: (container: Container) => void) {
    setter(this._Container);
  }
}

const InverManager = new InversifyManager();

export default InverManager;

/**
 * 여러 Configuration을 한 곳에서 관리하고, 등록 시킨다면 복잡하지 않을 거라 생각하였지만 오히려 더 복잡해질 것 같아 일시 중단.
 */
