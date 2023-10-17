import { omit } from "lodash";
import { cookies } from "next/headers";
import "server-only";

export default function CheckAdminDec() {
  return function (target: any, prop: string, des: PropertyDescriptor) {
    let originMethod = des.value;

    des.value = function (...args: any) {
      if (cookies().has("token" /** && Token 검증 */)) {
        return originMethod.apply(this, args);
      }
    };
  };
}

export function ConvPostToPC() {
  return function (target: any, prop: string, des: PropertyDescriptor) {
    let originMethod = des.value;

    des.value = function (...args: any) {
      const posts: PostType[] = originMethod.apply(this, args);
      return posts.map((item) => omit(item, ["featured", "RCate", "des"]));
    };
  };
}
