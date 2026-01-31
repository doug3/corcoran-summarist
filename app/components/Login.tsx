"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import Link from "next/link";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import { IconFidgetSpinner } from "@tabler/icons-react";

export default function Login({
  handleShowModal,
}: {
  handleShowModal: () => void;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUser] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const onSubmitCreate = async () => {
    await createUser(email, password);
    await sendEmailVerification();
  };

  const onSubmitLogin = async () => {
    await createUser(email, password);
    await sendEmailVerification();
  };
  return (
    <div
      className="w-full h-full absolute top-0 backdrop-filter backdrop-brightness-75 backdrop-blur-md flex justify-center items-center"
      onClick={handleShowModal}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div
          className="relative bg-white rounded-lg shadow border-20 border-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-0 right-0 text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
            onClick={handleShowModal}
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8"
              fill="#505050"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>

          <div className="w-full h-full">&nbsp;</div>

          <div className="w-full h-full">
            <h3 className="text-2xl mb-0.5 font-medium"></h3>
            <p className="mb-4 text-sm font-normal text-gray-800"></p>

            <div className="text-center items-end h-16">
              <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                Log In to Summarist
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-6">
              <button
                id="guest-login"
                className="inline-flex h-12 w-full text-white justify-center items-center text-center bg-blue-700 hover:bg-blue-900 rounded border border-slate-300 p-2 text-lg font-medium outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaUserLarge className="absolute left-2 h-8 w-8" />
                Login as a Guest
              </button>

              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-600"></div>
                or
                <div className="h-px w-full bg-slate-600 "></div>
              </div>

              <button
                id="google-login"
                className="inline-flex h-12 w-full items-center justify-center bg-blue-500 hover:bg-blue-700 rounded p-2 text-lg font-medium text-white outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="absolute h-10 w-10 rounded-md bg-white left-2 border-white border-5"
                />
                Login with Google
              </button>
              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-600"></div>
                or
                <div className="h-px w-full bg-slate-600"></div>
              </div>
              <div className="mb-4 text-center text-sm text-gray-500"></div>
            </div>

            <form className="w-full">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 outline-green-400 mb-4"
                placeholder="Email Address"
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1! shadow-sm placeholder:text-gray-400 outline-green-400"
                placeholder="Password"
              />

              <button
                id="email-login"
                type="submit"
                onSubmit={onSubmitCreate}
                className="inline-flex w-50 items-center justify-center rounded-lg bg-fuchsia-300 p-2 py-3 mt-4! mr-2 text-xl font-medium text-black outline-none  disabled:bg-gray-400"
              >
                Create New Account
              </button>

              <button
                id="email-login"
                type="submit"
                onSubmit={onSubmitLogin}
                className="inline-flex w-50 items-center justify-center rounded-lg bg-green-400 p-2 py-3 mt-4! text-xl font-medium text-black outline-none  disabled:bg-gray-400"
              >
                Login
              </button>
            </form>

            <p className="mb-3! mt-4! text-lg text-gray-500 text-center">
              <Link
                href="/forgot-password"
                className="text-blue-800 hover:text-blue-600"
              >
                Forgot your password?
              </Link>
            </p>

            <div className="mt-6! text-center text-lg text-blue-800 hover:text-blue-500 bg-slate-300">
              <Link href="/signup" className="font-medium">
                Don&apos;t have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
