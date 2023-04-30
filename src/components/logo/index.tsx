import { CSSProperties } from '@mui/material/styles/createTypography';

const Logo = () => {
  const svgStyle: CSSProperties = { mixBlendMode: 'normal' };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 256 256"
      width="35px"
      height="35px"
      fillRule="nonzero"
    >
      <g
        fill="#00acc1"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={svgStyle}
      >
        <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
      </g>
      <g
        fill="#B9F181"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={svgStyle}
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M24.5,45.161l-17.5,-10.341v-20.64l17.5,-10.341l17.5,10.341v20.64zM9,33.68l15.5,9.159l15.5,-9.159v-18.36l-15.5,-9.159l-15.5,9.159z"></path>
          <circle cx="24.5" cy="5.5" r="3.5"></circle>
          <circle cx="24.5" cy="43.5" r="3.5"></circle>
          <circle cx="8.5" cy="33.5" r="3.5"></circle>
          <circle cx="40.5" cy="33.5" r="3.5"></circle>
          <circle cx="8.5" cy="15.5" r="3.5"></circle>
          <circle cx="40.5" cy="15.5" r="3.5"></circle>
          <path d="M42.72,35h-36.44l18.22,-32.022zM9.72,33h29.56l-14.78,-25.978z"></path>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
