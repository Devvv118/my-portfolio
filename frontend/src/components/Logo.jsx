// export default function Logo({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 40 32"
//       className={className}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-label="Dev Arun — home"
//     >
//       <path d="M6 2 L6 30 L14 30 C19 30 22 24 22 16 C22 8 19 2 14 2 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
//       <path d="M26 2 L34 16 L26 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
//     </svg>
//   );
// }
export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dev Arun — home"
    >
      <path d="M6 2 L6 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 2 L22 16 L14 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="miter" />
      <path d="M26 2 L34 16 L26 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="miter" opacity="0.45" />
    </svg>
  );
}