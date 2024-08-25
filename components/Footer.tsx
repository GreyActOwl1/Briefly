import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="Logo"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Nextly</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
  Nextly is a free landing page &amp; marketing website template for
  startups and indie projects. It&apos;s built with Next.js &amp; TailwindCSS.
  And it&apos;s completely open-source.
</div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://web3templates.com/" target="_blank" rel="noreferrer">
            Web3Templates.
          </a>{" "}
          Illustrations from{" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noreferrer">
            Glazestock
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.56-1.25 4.84 4.84 0 0 0 1.3-3.58V7.02a4.83 4.83 0 0 0-1.3-3.53 5 5 0 0 0-3.56-1.25zm-3.91 4.39a4.19 4.19 0 1 0 0 8.37 4.19 4.19 0 0 0 0-8.37zm0 1.56a2.66 2.66 0 1 1 0 5.32 2.66 2.66 0 0 1 0-5.32zm4.4-3.7a.95.95 0 0 1 .96-.95c.55 0 .96.44.96.95s-.41.95-.96.95a.94.94 0 0 1-.96-.95z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23.994 24h-5.6v-8.2c0-1.95-.037-4.46-2.712-4.46-2.71 0-3.12 2.12-3.12 4.31v8.38h-5.6v-16h5.4v2.2h.08c.75-1.41 2.6-2.9 5.4-2.9 5.79 0 6.85 3.84 6.85 8.83v8.87zM3.28 8.2c-1.51 0-2.76 1.24-2.76 2.75s1.24 2.76 2.76 2.76 2.76-1.24 2.76-2.76-1.24-2.75-2.76-2.75zm-2.78 15.8h5.6v-16h-5.6v16zm14.71-16c-1.43 0-2.76.53-3.76 1.48-1.1-.93-2.41-1.48-3.77-1.48-3.18 0-5.78 2.6-5.78 5.8v16h5.6v-8.72c0-2.27.48-4.5 3.12-4.5 2.66 0 2.94 2.37 2.94 4.3v8.9h5.6v-8.91c0-5.19-3.05-9.29-7.05-9.29z" />
  </svg>
);

const Backlink = () => (
  <a
    href="https://github.com/niqz/web3-templates"
    target="_blank"
    rel="noreferrer"
    className="absolute bottom-5 right-5 text-gray-400 dark:text-gray-500"
  >
    <span className="sr-only">Backlink</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.29 15.5a.749.749 0 0 0 0 1.06l2.84 2.85a3.99 3.99 0 0 0 5.65 0 3.96 3.96 0 0 0 0-5.65l-2.83-2.85a.75.75 0 0 0-1.06 1.06l2.82 2.83a2.46 2.46 0 0 1 0 3.47 2.49 2.49 0 0 1-3.53 0l-2.83-2.84a.749.749 0 0 0-1.06 0zM12 3.5a3.96 3.96 0 0 0-5.65 0 3.99 3.99 0 0 0 0 5.65l2.85 2.83a.75.75 0 0 0 1.06-1.06l-2.84-2.85a2.49 2.49 0 0 1 0-3.53 2.46 2.46 0 0 1 3.47 0l2.83 2.85a.75.75 0 0 0 1.06-1.06l-2.83-2.83a3.96 3.96 0 0 0-2.12-.59z" />
    </svg>
  </a>
);


// import Link from "next/link";
// import Image from "next/image";
// import React from "react";
// import { Container } from "@/components/Container";

// export function Footer() {
//   const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
//   const legal = ["Terms", "Privacy", "Legal"];
//   return (
//     <div className="relative">
//       <Container>
//         <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
//           <div className="lg:col-span-2">
//             <div>
//               {" "}
//               <Link
//                 href="/"
//                 className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
//               >
//                 <Image
//                   src="/img/logo.svg"
//                   alt="N"
//                   width="32"
//                   height="32"
//                   className="w-8"
//                 />
//                 <span>Nextly</span>
//               </Link>
//             </div>

//             <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
//               Nextly is a free landing page & marketing website template for
//               startups and indie projects. Its built with Next.js & TailwindCSS.
//               And its completely open-source.
//             </div>

//             <div className="mt-5">
//               <a
//                 href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="relative block w-44"
//               >
//                 <Image
//                   src="/img/vercel.svg"
//                   alt="Powered by Vercel"
//                   width="212"
//                   height="44"
//                 />
//               </a>
//             </div>
//           </div>

//           <div>
//             <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
//               {navigation.map((item, index) => (
//                 <Link
//                   key={index}
//                   href="/"
//                   className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div>
//             <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
//               {legal.map((item, index) => (
//                 <Link
//                   key={index}
//                   href="/"
//                   className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="">
//             <div>Follow us</div>
//             <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
//               <a
//                 href="https://twitter.com/web3templates"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <span className="sr-only">Twitter</span>
//                 <Twitter />
//               </a>
//               <a
//                 href="https://facebook.com/web3templates"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <span className="sr-only">Facebook</span>
//                 <Facebook />
//               </a>
//               <a
//                 href="https://instagram.com/web3templates"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <span className="sr-only">Instagram</span>
//                 <Instagram />
//               </a>
//               <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
//                 <span className="sr-only">Linkedin</span>
//                 <Linkedin />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
//           Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
//           <a href="https://web3templates.com/" target="_blank" rel="noreferrer">
//             Web3Templates.
//           </a>{" "}
//           Illustrations from{" "}
//           <a href="https://www.glazestock.com/" target="_blank" rel="noreferrer">
//             Glazestock
//           </a>
//         </div>
//       </Container>
//       {/* Do not remove this */}
//       <Backlink />
//     </div>
//   );
// }

// const Twitter = ({ size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
//   </svg>
// );

// const Facebook = ({ size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
//   </svg>
// );
// const Instagram = ({ size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
//   </svg>
// );

// const Linkedin = ({ size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
//   </svg>
// );

// const Backlink = () => {
//   return (
//     <a
//       href="https://web3templates.com"
//       target="_blank"
//       rel="noreferrer"
//       className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
//     >
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 30 30"
//         fill="none"
//         className="w-4 h-4"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
//         <path
//           d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
//           fill="#F7FAFC"
//         />
//       </svg>

//       <span>Web3Templates</span>
//     </a>
//   );
// };