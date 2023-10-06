import { NextResponse } from "next/server";

type ErrorProps = {
  status: number;
  msg: string;
  options?: {
    object?: Object;
  };
};

export function routeError(props: ErrorProps) {
  return NextResponse.json(
    {
      failure: true,
      errMsg: props.msg,
      object: props.options?.object,
    },
    { status: props.status }
  );
}
