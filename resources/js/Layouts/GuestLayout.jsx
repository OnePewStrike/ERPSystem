import ApplicationLogo from "@/Components/Custom/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="absolute top-5 left-5">
                <Link href="/" className="flex items-center gap-1">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    <span className="text-xl font-semibold text-green-700 mt-2">
                        GreenSeer
                    </span>
                </Link>
            </div>

            <div className="w-11/12 sm:w-[28em] px-6 py-10 mx-0 bg-white shadow-md rounded-2xl">
                {children}
            </div>
        </div>
    );
}
