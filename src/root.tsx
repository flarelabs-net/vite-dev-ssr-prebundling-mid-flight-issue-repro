import { useEffect } from "react";

export default function Root() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>This is a non-hydrated Server Side Rendered React page</h1>
    </div>
  );
}
