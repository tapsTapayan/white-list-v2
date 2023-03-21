import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);
  return <div>Error 404: Not Found</div>;
}

export default Error;
