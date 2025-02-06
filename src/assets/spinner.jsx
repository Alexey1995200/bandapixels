export const Spinner = ({width, height, margin}) => {
  return (
    <div style={{display:"flex", justifyContent:"center", }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : 64}
        height={height ? height : 64}
        viewBox="0 0 200 200"
        fill="none"
        color="#ffd600"
        style={{
          position: 'fixed',
          top: '50%',
        }}
      >

        <defs>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor"/>
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor"/>
          </linearGradient>
          <linearGradient id="spinner-secondHalf">
            <stop offset="25%" stopOpacity="0" stopColor="currentColor"/>
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor"/>
          </linearGradient>
        </defs>

        <g strokeWidth="8">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />
          <path
            stroke="url(#Gradient)"
            strokeLinecap="round"
            d="M 4 100 A 96 96 0 0 1 4 98"
          />
        </g>

        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1300ms"
        />
      </svg>
    </div>
  );
};
