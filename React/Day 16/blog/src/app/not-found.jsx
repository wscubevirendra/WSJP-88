import Link from "next/link";
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
}
