import React from "react";

const SectionTitle = ({
  align = "left",
  pretitle,
  title,
  className,
  children,
  isLight = true,
}: {
  align?: string;
  pretitle?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
  isLight?: boolean;
}) => {
  return (
    <div
      className={`flex w-full flex-col ${className ? className : ""} ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {pretitle && (
        <div
          className={`text-lg font-extrabold ${isLight ? "text-primary-500" : "text-primary-300"} uppercase`}
        >
          {pretitle}
        </div>
      )}

      {title && (
        <h2
          className={`max-w-2xl text-3xl font-semibold leading-tight ${isLight ? "text-darkTheme" : "text-gray-300"} lg:text-4xl`}
        >
          {title}
        </h2>
      )}

      {children && (
        <p
          className={`max-w-2xl py-4 text-lg leading-normal ${isLight ? "" : "text-gray-300"} lg:text-xl xl:text-xl`}
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
