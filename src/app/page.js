// export default function Home() {
//   return (
//     <main className="flex flex-col space-y-6 h-screen items-center lg:items-start lg:justify-center">
//       <h1 className="text-center lg:text-left text-[32px] lg:w-[70%] lg:text-[44px] ">
//         IM FRONT-END DEVELOPR FROM JUJUY, ARGENTINA
//       </h1>
//       <p className="text-center text-[14px] md:w-[70%] lg:w-[70%] lg:text-[16px] lg:text-left ">
//         Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
//         demostraciones de tipografías o de borradores de diseño para probar el
//         diseño visual antes de insertar el texto final.{" "}
//       </p>
//       <button className="lg:text-left px-[9px] py-[16px] lg:text-[16px]">
//         HIRE ME
//       </button>
//     </main>
//   );
// }


export default function Home() {
  return (
    <main className="flex flex-col space-y-6 h-screen items-center lg:items-start lg:justify-center bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <h1 className="text-center lg:text-left text-[32px] lg:w-[70%] lg:text-[44px] text-primary dark:text-primaryDark">
        I'M A FRONT-END DEVELOPER FROM JUJUY, ARGENTINA
      </h1>
      <p className="text-center text-[14px] md:w-[70%] lg:w-[70%] lg:text-[16px] lg:text-left">
        Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
        demostraciones de tipografías o de borradores de diseño para probar el
        diseño visual antes de insertar el texto final.
      </p>
      <button className="bg-secondary dark:bg-secondaryDark text-lightText dark:text-darkText lg:text-left px-[9px] py-[16px] lg:text-[16px] rounded-md">
        HIRE ME
      </button>
    </main>
  );
}
