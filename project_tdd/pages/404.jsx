import Link from "next/link";
import React from "react";
const ErrorPage = () => {
  return (
    <div>
      <h1>Хуудас олдсонгүй</h1>
      <div>
        <p>та дараа дахин оролдоно уу?</p>
        <Link href="/">Go to HomePage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
