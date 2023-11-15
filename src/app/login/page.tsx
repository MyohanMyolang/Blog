"use client";

import React from "react";
import { loginAction, loginResType } from "./actions";
import { redirect } from "next/navigation";
import FormSubmitBtn from "@/components/csr/FormSubmitBtn";
import CheckAdmin from "@/lib/CheckAdmin";
import Link from "next/link";
import { useFormState } from "react-dom";

type Props = {};

const initValue: loginResType = {
  code: undefined,
  msg: undefined,
};

export default function LoginPage({}: Props) {
  const [state, formAction] = useFormState<loginResType, FormData>(
    loginAction,
    initValue
  );

  return (
    <div className="fixed top-0 flex flex-col items-center justify-center w-screen mx-auto md:h-screen lg:py-0 bg-gray-50 dark:bg-gray-800 z-100">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        Myolang
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-600">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Admin Login
          </h1>
          <form className="space-y-4 md:space-y-6" action={formAction}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@eeemail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <h3 className="text-red-600 text-shadow-[0px_0px_10px_#FF1010]">
              {state.msg && state.msg}
            </h3>
            <FormSubmitBtn className="w-full text-3xl h-[60px] bg-cyan-400 rounded-full">
              Login
            </FormSubmitBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
