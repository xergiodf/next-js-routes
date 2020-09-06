import React from "react";
import { useRouter } from "next/router";

const Programs = () => {
  const { query } = useRouter();
  return (
    <div>
      I'm the <b>{query.sponsorTag || "Admin"}</b> Programs
    </div>
  );
};

export default Programs;
