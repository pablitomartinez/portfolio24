import Figma from "./icons/Figma.js";
import JSSvg from "./icons/JS.js";
import NodeJsSVG from "./icons/NodeJs.js";
import PhpSVG from "./icons/PhpSVG.js";
import ReactSVG from "./icons/React.js";

export default function Skill() {

   return (
     <div className="flex flex-col md:flex-row space-x-4">
       {/* Columna del párrafo */}
       <div className="space-y-8 md:w-[80%]">
         <p className="text-[18px]">
           Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
           demostraciones de tipografías o de borradores de diseño para probar
           el diseño visual antes de insertar el texto final.
         </p>
         <div>
           <ul className="space-y-4">
             <li>
               <span>JAVASCRIPT</span>
               <p>Henry</p>
               <span>certficite</span>
             </li>
             <li>
               <span>JAVASCRIPT</span>
               <p>Henry</p>
               <span>certficite</span>
             </li>
             <li>
               <span>JAVASCRIPT</span>
               <p>Henry</p>
               <span>certficite</span>
             </li>
             <li>
               <span>JAVASCRIPT</span>
               <p>Henry</p>
               <span>certficite</span>
             </li>
           </ul>
         </div>
       </div>

       {/* Columna de íconos SVG */}
       <div className=" md:w-[20%] overflow-hidden ">
         <div className="flex flex-row md:flex-col items-center justify-around animate-scroll md:space-y-8">
           <JSSvg className="w-16 h-16" />
           <Figma className="w-16 h-16" />
           <ReactSVG className="w-16 h-16" />
           <NodeJsSVG className="w-16 h-16" />
           <PhpSVG className="w-16 h-16" />

           {/* Agrega más íconos aquí */}
         </div>
       </div>
     </div>
   );
}
