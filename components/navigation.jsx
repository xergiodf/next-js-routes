import React from "react";
import Link from "next/link";

const Navigation = () => (
  <div className="navigation">
    <ul>
      <li>
        <Link href="/">
          <a>Admin Dashboard</a>
        </Link>
      </li>
      <li>
        <Link href="/psu-osa">
          <a>PSU - OSA Dashboard</a>
        </Link>
      </li>
      <li>
        <Link href="/programs">
          <a>Admin Programs</a>
        </Link>
      </li>
      <li>
        <Link href="/psu-osa/programs">
          <a>PSU - OSA Programs</a>
        </Link>
      </li>
      <li>
        <Link href="/programs/123456">
          <a>Admin Programs Detail</a>
        </Link>
      </li>
      <li>
        <Link href="/psu-osa/programs/123456">
          <a>PSU - OSA Programs Detail</a>
        </Link>
      </li>
      <li>
        <Link href="/sign-in">
          <a>Global Sign In Page</a>
        </Link>
      </li>
      <li>
        <Link href="/callback">
          <a>Global Callback Page</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
