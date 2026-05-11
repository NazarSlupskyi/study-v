import Image from "next/image";

export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Default App Name";
  const secretKey = process.env.SECRET_API_KEY ? "Loaded (hidden)" : "Not Loaded";

  return (
    <div className="grid grid-rows-[20px_1_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to {appName}!</h1>
        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
          DEV MODE
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Environment Variables Test:</h2>
          <ul className="space-y-2">
            <li>
              <strong>NEXT_PUBLIC_APP_NAME:</strong>{" "}
              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                {appName}
              </code>
            </li>
            <li>
              <strong>SECRET_API_KEY:</strong>{" "}
              <code className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded">
                {secretKey}
              </code>
              <p className="text-xs text-gray-500 mt-1">
                (Note: Secret keys are only visible during server-side rendering or in API routes)
              </p>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
        </div>
      </main>
    </div>
  );
}
