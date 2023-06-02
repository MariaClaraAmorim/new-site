// import css from "./style.module.css";

// function Header() {
//   return (
//     <>
//       <div className={css.menu}>
//         <div className={css.details}>
//           <button className={css.button1}></button>
//           <button className={css.button2}></button>
//           <button className={css.button3}></button>
//         </div>
//         <div>
//           <span>Maria</span>
//         </div>
//         <div>
//           <span>span</span>
//         </div>
//       </div>
//     </>
//   );
// }

// export { Header };


'use client'
import { useOpenFiles } from "@/hooks/useOpenFiles"

export function Header() {
  const { currentOpenFile } = useOpenFiles()

  const openFileName = currentOpenFile()

  return (
    <div className="flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <button type="button" className="w-3 h-3 bg-[#ED6A5E] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#F4BF4F] rounded-full" />
        <button type="button" className="w-3 h-3 bg-[#61C554] rounded-full" />
      </div>
      <span className="text-[#908caa] text-sm">
        {openFileName && `${openFileName.title} — `}Maria
      </span>
      <div className="w-14">&nbsp;</div>
    </div>
  );
}