"use client";
import DOMPurify from "isomorphic-dompurify";
import React from "react";
import "./pageContentStyles.css";

export const PageContent = ({ contentHtml }: { contentHtml: string }) => {
  const sanitizedHtml = DOMPurify.sanitize(contentHtml);

  return (
    <div
      className="page-content w-full"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    ></div>
  );
};
