import React from "react";
import { useRouter } from "next/router";

const ProgramDetail = () => {
  const { query } = useRouter();
  return (
    <div>
      I'm the <b>{query.sponsorTag || "Admin"}</b> Program Detail Page with ID{" "}
      {query.id}
    </div>
  );
};

export default ProgramDetail;
