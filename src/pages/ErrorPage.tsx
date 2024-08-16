import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-950 gap-10">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        Oops!
      </h1>
      <p className="text-xl text-zinc-800 dark:text-zinc-100">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
