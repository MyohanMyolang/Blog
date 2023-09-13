/**
 * @author MyohanMyolang
 */
import { Container, interfaces } from "inversify";

type identifireType = string | symbol;

type inversifyType<I> = {
  identifier: identifireType;
  target: new (...args: never[]) => I;
};
class InversifyManager {
  public constructor() {}

  private _Container = new Container();
  private _isInit = false;

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

  public configuration(config: (() => void)[]) {
    if (!this._isInit) {
      config.forEach((item) => item());
      this._isInit = !this._isInit;
    }
  }
}

console.log("is it call always when refresh page?");

const InverManager = new InversifyManager();

export default InverManager;
