import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <div className="text-center">
        <Button title={"Try again"} onClick={resetErrorBoundary} />
      </div>
    </div>
  );
}

export default ErrorFallback;
