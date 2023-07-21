import {
  IDENTIFIER_TYPE,
  appendIdentifier,
  getIdentifier,
} from "../../src/inversify/Types";

describe("Inversify Identifier Test", () => {
  it("Set And Get", () => {
    const testIden = { test: Symbol("test") };
    appendIdentifier(testIden);
    const iden = getIdentifier();
    expect(testIden).toEqual(iden);

    const testIden2 = { test1: Symbol("test1") };
    appendIdentifier(testIden2);
    const Iden = getIdentifier();
    let Identi = {
      ...testIden,
      ...testIden2,
    };
    expect(Identi).toEqual(Iden);
    console.log("Identi : ", Identi);
  });
});
