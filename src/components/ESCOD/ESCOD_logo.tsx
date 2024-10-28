import {SVGProps, useContext} from "react";
import {color, motion} from "framer-motion";
import {ThemeContext} from "../../context/ThemeContext.tsx";

interface EscodLogoProps extends SVGProps<SVGSVGElement> {
  animate?: boolean;
}

// https://color.adobe.com/es/create/color-wheel (Paleta de colores)
const EscodLogo = ({animate = false, ...props}: EscodLogoProps) => {
  const {colors, theme} = useContext(ThemeContext);
  const colorsDark = [
    "#56dac1",
    "#41c7af",
    "#2bb59e",
    "#16a28c",
    "#008f7a",
  ]
  const colorsLight = [
    "#a8d4f9",
    "#96c2e6",
    "#84b0d3",
    "#719dc0",
    "#5f8bad",
  ]
  const {fill} = props;
  const MotionSvg = animate ? motion.svg : 'svg';
  return (
    <MotionSvg
      xmlns="http://www.w3.org/2000/svg"
      width={200.613}
      height={220.676}
      viewBox="0 0 53.079 58.387"
      {...props}
    >
      {/*SVG ORGINAL*/}
      <motion.path
        d="m90.743 97.409-23.803.004.004-19.877 36.29-.013s4 .523 8.846 5.101c4.847 4.579 6.368 10.196 6.368 10.196l-5.163.001s-.54-3.2-4.047-6.237c-3.507-3.038-5.722-3.903-5.722-3.903l-31.869.002.005 10.139 19.09-.002zM84.527 98.645l-17.586.002.005 26.015 11.247 11.248 24.199-.001s2.618-.445 8.677-5.067c6.059-4.622 7.837-11.19 7.837-11.19l-5.901.02s.197 2.812-4.629 6.878c-4.826 4.066-7.644 4.295-7.644 4.295l-20.825.002-8.259-8.27.001-11.77 19.096.003v-4.497l-19.098.006.003-3.647 15.806.003s.109-2.745-2.929-4.03z"
        style={{
          display: "inline",
          opacity: 1,
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeWidth: 0.264583,
          strokeLinecap: "square",
          strokeLinejoin: "round",
          paintOrder: "fill markers stroke",
        }}
        fill={fill as string}
        transform="translate(-66.94 -77.523)"
      />
      <motion.path
        d="M103.23 102.675v-4.03l-6.284.003s-1.74-.158-3.555 1.882c0 0-.467.353-1.457 2.145-.007.58 0 8.136 0 8.136h4.711l-.082-6.688s.237-1.444 1.597-1.45c1.36-.006 5.07.002 5.07.002z"
        style={{
          display: "inline",
          opacity: 1,
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeWidth: 1.264583,
          strokeLinecap: "square",
          strokeLinejoin: "round",
          paintOrder: "fill markers stroke",
        }}
        fill={fill as string}
        transform="translate(-66.94 -77.523)"
      />
      <motion.path
        d="m104.649 98.645 9.212.003s2.28-.112 3.946 1.74c1.666 1.85 2.21 3.606 2.21 3.606l.001 8.33s-.055 2.393-1.813 3.695-4.055 2.167-4.055 2.167l-17.588-.002s-2.801-1.007-4.635-4.467l22.028.028s1.703-.106 1.706-1.488c.003-1.383 0-7.16 0-7.16s.033-2.42-2.645-2.424c-1.92-.004-8.37.002-8.37.002z"
        style={{
          display: "inline",
          opacity: 1,
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeWidth: 0.264583,
          strokeLinecap: "square",
          strokeLinejoin: "round",
          paintOrder: "fill markers stroke",
        }}
        fill={fill as string}
        transform="translate(-66.94 -77.523)"
      />

      {/*LOGO SOLO BORDE*/}
      <motion.path
        d="m90.743 97.409-23.803.004.004-19.877 36.29-.013s4 .523 8.846 5.101c4.847 4.579 6.368 10.196 6.368 10.196l-5.163.001s-.54-3.2-4.047-6.237c-3.507-3.038-5.722-3.903-5.722-3.903l-31.869.002.005 10.139 19.09-.002z"
        style={{
          fill: "none",
          strokeWidth: 0.38,
        }}
        // stroke={colors.accent100}
        // initial={{strokeDasharray: 300, strokeDashoffset: 300}}
        animate={{
          strokeDashoffset: 0,
          stroke: theme === "light" ? colorsLight : colorsDark,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        transform="translate(-66.94 -77.523)"
      />
      <motion.path
        d="M84.527 98.645l-17.586.002.005 26.015 11.247 11.248 24.199-.001s2.618-.445 8.677-5.067c6.059-4.622 7.837-11.19 7.837-11.19l-5.901.02s.197 2.812-4.629 6.878c-4.826 4.066-7.644 4.295-7.644 4.295l-20.825.002-8.259-8.27.001-11.77 19.096.003v-4.497l-19.098.006.003-3.647 15.806.003s.109-2.745-2.929-4.03z"
        style={{
          fill: "none",
          strokeWidth: 0.38,
        }}
        stroke={fill as string}
        initial={{strokeDasharray: 300, strokeDashoffset: 300}}
        animate={{
          strokeDashoffset: 0,
          stroke: theme === "light" ? colorsLight : colorsDark, // Cambia el color progresivamente
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        transform="translate(-66.94 -77.523)"
      />
      <motion.path
        d="M103.23 102.675v-4.03l-6.284.003s-1.74-.158-3.555 1.882c0 0-.467.353-1.457 2.145-.007.58 0 8.136 0 8.136h4.711l-.082-6.688s.237-1.444 1.597-1.45c1.36-.006 5.07.002 5.07.002z"
        style={{
          fill: "none",
          strokeWidth: 0.35,
        }}
        stroke={fill as string}
        initial={{strokeDasharray: 300, strokeDashoffset: 300}}
        animate={{
          strokeDashoffset: 0,
          stroke: theme === "light" ? colorsLight : colorsDark, // Cambia el color progresivamente
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        transform="translate(-66.94 -77.523)"
      />
      <motion.path
        d="m104.649 98.645 9.212.003s2.28-.112 3.946 1.74c1.666 1.85 2.21 3.606 2.21 3.606l.001 8.33s-.055 2.393-1.813 3.695-4.055 2.167-4.055 2.167l-17.588-.002s-2.801-1.007-4.635-4.467l22.028.028s1.703-.106 1.706-1.488c.003-1.383 0-7.16 0-7.16s.033-2.42-2.645-2.424c-1.92-.004-8.37.002-8.37.002z"
        style={{
          fill: "none",
          strokeWidth: 0.35,
        }}
        stroke={fill as string}
        initial={{strokeDasharray: 300, strokeDashoffset: 300}}
        animate={{
          strokeDashoffset: 0,
          stroke: theme === "light" ? colorsLight : colorsDark, // Cambia el color progresivamente
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        transform="translate(-66.94 -77.523)"
      />
    </MotionSvg>);
};
export default EscodLogo;