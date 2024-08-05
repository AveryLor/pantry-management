import Link from "next/link";

export default function LoginForm() {
    return <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl front-bold my-4">
                Enter the details
            </h1>
            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Password"/>
                <button className="bg-green-600 cursor-pointer text-white px-6 py-2 rounded-s">
                    Login
                </button>
                <div className="bg-red-500 w-fit text-white text-sm py-1 px-3 rounded-md mt-2">
                    Error Message
                </div>
                <Link className="text-sm mt-3 text-right" href={"/register"}>
                    Don't have an account? <span className="underline">Register</span>
                </Link>
            </form>
        </div>
    </div>;
}