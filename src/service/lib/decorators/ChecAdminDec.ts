import { cookies } from "next/headers";
import "server-only";

export default function CheckAdminDec() {
  return function (target: any, prop: string, des: PropertyDescriptor) {
    let originMethod = des.value;

    des.value = function (...args: any) {
      if (cookies().has("token" /** && Token 검증 */)) {
        console.log("it's admin");
        return originMethod.apply(this, args);
      }
      console.log("it's not admin");
    };
  };
}
