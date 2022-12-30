import { useNavigate } from "react-router-dom"

function ErrorFallback({ error }: { error: Error }) {
  const nav = useNavigate()
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={() => nav("/")}>Try again</button>
    </div>
  )
}
export default ErrorFallback
