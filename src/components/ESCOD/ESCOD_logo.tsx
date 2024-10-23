import {SVGProps} from "react";
import {motion} from "framer-motion";

interface EscodLogoProps extends SVGProps<SVGSVGElement> {
  animate?: boolean;
}

const EscodLogo = ({animate = true, ...props}: EscodLogoProps) => {
  const {fill} = props;

  const MotionSvg = animate ? motion.svg : 'svg';

  return (
    <MotionSvg
      xmlns="http://www.w3.org/2000/svg"
      width={769.864}
      height={847.913}
      viewBox="0 0 203.693 224.344"
      {...props}
      {...(animate && {
        initial: {opacity: 0},
        animate: {opacity: 1},
        transition: {duration: 1},
        whileHover: {scale: 1.1, rotate: 10},
      })}
    >
      <g
        style={{
          fill: fill,
          fillOpacity: 1,
        }}
      >
        <path
          d="m120.7 77.505-6.285.003s-1.74-.158-3.555 1.882c0 0-.467.352-1.456 2.144-.007.581-.001 8.136-.001 8.136h4.712l-.083-6.688s.237-1.444 1.597-1.45c1.36-.006 5.07.002 5.07.002zm1.418 0-.003 4.03s6.45-.007 8.37-.003c2.678.003 2.644 2.425 2.644 2.425s.004 5.777.001 7.16c-.003 1.382-1.706 1.488-1.706 1.488l-22.028-.029c1.834 3.46 4.635 4.468 4.635 4.468l17.588.002s2.297-.866 4.055-2.168c1.759-1.301 1.814-3.693 1.814-3.693l-.001-8.332s-.544-1.755-2.21-3.606c-1.668-1.851-3.947-1.74-3.947-1.74z"
          style={{
            display: "inline",
            opacity: 1,
            fill: fill,
            fillOpacity: 1,
            fillRule: "nonzero",
            strokeWidth: 0.264583,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            paintOrder: "fill markers stroke",
          }}
          transform="matrix(3.83756 0 0 3.84688 -323.925 -216.897)"
        />
        <path
          d="m120.703 56.382-36.29.014-.004 19.877 23.804-.004v-4.59l-19.091.003-.005-10.139 31.869-.002s2.215.865 5.722 3.902c3.507 3.038 4.047 6.238 4.047 6.238l5.162-.001s-1.52-5.617-6.367-10.196c-4.847-4.578-8.846-5.101-8.846-5.101zm-18.707 21.122-17.586.003.004 19.769v2.866l.002.043-.002.022v3.315l.003.002 11.245 11.246h14.143l6.112-.001h3.944s2.619-.446 8.677-5.068c6.059-4.622 7.836-11.19 7.836-11.19l-5.9.02s.196 2.812-4.63 6.878c-3.426 2.887-5.814 3.826-6.926 4.136v-4.157a3 3 0 0 0 1.5-2.578 3 3 0 0 0-6 0 3 3 0 0 0 1.5 2.579v4.315l-6.093.001.029-7.173a2.446 2.446 0 0 0 1.23-2.063 2.445 2.445 0 0 0-2.435-2.456l.002-.001a2.444 2.444 0 0 0-2.455 2.436 2.443 2.443 0 0 0 1.215 2.072l-.03 7.185h-7.02v-4.317a3 3 0 0 0 1.5-2.578 3 3 0 0 0-6 0 3 3 0 0 0 1.5 2.579v4.3l-8.243-8.253V89.667l19.096.002v-4.497l-19.097.006.002-3.646 15.807.003s.108-2.745-2.93-4.03zm6.65 21.73a1.223 1.223 0 0 1 1.21 1.15l.007.001v.079a1.222 1.222 0 0 1-2.445-.009l-.001-.002v-.002l.001-.076h.02a1.223 1.223 0 0 1 1.207-1.14zm-9.786 2.077a1.5 1.5 0 0 1 1.495 1.404 1.5 1.5 0 1 1-2.995.096v-.096h.015a1.5 1.5 0 0 1 1.484-1.405zm18.557 0a1.5 1.5 0 1 1-1.5 1.5v-.096h.016a1.5 1.5 0 0 1 1.485-1.405z"
          style={{
            display: "inline",
            opacity: 1,
            fill: fill,
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 0.340592,
            strokeLinecap: "square",
            strokeLinejoin: "round",
            paintOrder: "fill markers stroke",
          }}
          transform="matrix(3.83756 0 0 3.84688 -323.925 -216.897)"
        />
      </g>
    </MotionSvg>
  );
};

export default EscodLogo;