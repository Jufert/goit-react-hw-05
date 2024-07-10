import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>Sorry, this page is not found!</h1>
    </div>
  );
}
export default NotFoundPage;