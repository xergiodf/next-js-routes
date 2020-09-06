import React from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { query } = useRouter();
  return (
    <div>
      I'm the <b>{query.sponsorTag || "Admin"}</b> dashboard
    </div>
  );
};

export default Dashboard;
