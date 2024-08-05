import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-extrabold">Oops!</h1>
      <br />
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="font-extralight text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go back</Link>
    </div>
  );
}
