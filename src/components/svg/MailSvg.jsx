import React from "react";

const MailSvg = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 3.75H5C2.92906 3.75 1.25 5.42906 1.25 7.5V22.5C1.25 24.5709 2.92906 26.25 5 26.25H25C27.0709 26.25 28.75 24.5709 28.75 22.5V7.5C28.75 5.42906 27.0709 3.75 25 3.75ZM25 6.25C25.1444 6.25 25.2831 6.27437 25.4119 6.31969L15 14.6494L4.58812 6.31969C4.71688 6.27437 4.85562 6.25 5 6.25H25ZM25 23.75H5C4.30969 23.75 3.75 23.1903 3.75 22.5V8.85063L14.2191 17.2259C14.4472 17.4088 14.7234 17.5 15 17.5C15.2766 17.5 15.5528 17.4088 15.7809 17.2259L26.25 8.85063V22.5C26.25 23.1903 25.6903 23.75 25 23.75Z"
        fill="white"
      />
    </svg>
  );
};

export default MailSvg;
