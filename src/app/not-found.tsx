import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center bg-white">
      <h1 className="text-9xl font-bold text-[#FF5A5F]">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-[#FF5A5F] text-white rounded-full font-medium hover:bg-[#e04e52] transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
