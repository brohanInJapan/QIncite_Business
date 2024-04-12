/* eslint-disable react/prop-types */
const LinkedInIcon = ({
  fill = "var(--foreground)",
  size = "32",
  className,
}) => {
  return (
    <svg
      id="LinkedInIcon"
      viewBox="0 0 35.9 35.9"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={size}
      height={size}
      className={className}
    >
      <path d="m17.95,35.73v-.17c-4.87,0-9.27-1.97-12.46-5.16C2.3,27.22.33,22.81.33,17.95s1.97-9.27,5.16-12.46C8.68,2.3,13.08.33,17.95.33c4.87,0,9.27,1.97,12.46,5.16,3.19,3.19,5.16,7.59,5.16,12.46s-1.97,9.27-5.16,12.46c-3.19,3.19-7.59,5.16-12.46,5.16v.33c9.91,0,17.95-8.04,17.95-17.95S27.86,0,17.95,0,0,8.04,0,17.95s8.04,17.95,17.95,17.95v-.17Z" />
      <path d="m11.98,13.04c1.07,0,1.93-.87,1.93-1.95s-.86-1.95-1.93-1.95-1.93.87-1.93,1.95.86,1.95,1.93,1.95Z" />
      <path d="m18.84,19.43c0-1.48.68-2.37,1.99-2.37,1.2,0,1.78.85,1.78,2.37v5.53h3.25v-6.68c0-2.82-1.6-4.19-3.84-4.19s-3.18,1.74-3.18,1.74v-1.42h-3.13v10.54h3.13v-5.53Z" />
      <rect height="10.54" width="3.26" x="10.36" y="14.42" />
    </svg>
  );
};

export default LinkedInIcon;