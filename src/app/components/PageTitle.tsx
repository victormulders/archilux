import React from "react";

const PageTitle = ({
  align = "left",
  pretitle,
  title,
  className,
  children,
  isLight = true,
  containsPadding = true,
}: {
  align?: string;
  pretitle?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
  isLight?: boolean;
  containsPadding?: boolean;
}) => {
  return (
    <div
      className={`flex w-full flex-col ${className ? className : ""} ${
        align === "left" ? "" : "items-center justify-center text-center"
      } ${containsPadding && "py-24 px-12 md:p-32 xl:p-48 gap-12"}`}
    >
      {pretitle && (
        <div
          className={`text-lg font-extrabold ${isLight ? "text-primary-500" : "text-primary-200"} uppercase`}
        >
          {pretitle}
        </div>
      )}

      {title && (
        <h1
          className={`text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extralight ${isLight ? "text-darkTheme" : "text-gray-100"}`}
        >
          {title}
        </h1>
      )}

      {children && (
        <p
          className={`max-w-3xl py-4 text-xl leading-normal ${isLight ? "" : "text-gray-300"} lg:text-2xl xl:text-3xl`}
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
