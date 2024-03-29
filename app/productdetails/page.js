"use client";
import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import ProductDetail from "./ProductDetail";

const Page = () => {
  return (
    <div className="sub-container">
      <Suspense fallback={<CircularProgress />}>
        <ProductDetail />
      </Suspense>
    </div>
  );
};

export default Page;
