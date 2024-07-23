import { Grandstander, Manrope, Work_Sans } from "next/font/google";
import localFont from 'next/font/local'

const manrope = Manrope({
  style: "normal",
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"]
});
const work_Sans = Work_Sans({ subsets: ["latin"] });
const grandstander = Grandstander({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"]
});

const zain = localFont({ src: "./Zain-Regular.ttf" });
console.log(zain);

export { manrope, work_Sans, grandstander, zain };