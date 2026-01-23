type LogoProps = {
  isLogin: boolean;
  isFooter?: boolean;
};

export default function Logo({ isLogin, isFooter }: LogoProps) {
  return (
    <div className="flex items-center gap-3.5 lg:gap-3.75">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-10 h-10 xl:w-10.5 xl:h-10.5 ${isLogin ? "text-primary-100" : "text-white"}`}
      >
        <g clipPath="url(#clip0_43981_6264)">
          <mask
            id="mask0_43981_6264"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="40"
            height="40"
          >
            <path d="M40 0H0V40H40V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_43981_6264)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.4286 0H18.5714V12.6506L13.8324 0.921164L11.1833 1.99147L16.0451 14.0248L6.86802 4.8477L4.84772 6.86802L13.6435 15.6638L2.24482 10.6836L1.10092 13.3018L13.1621 18.5714H0V21.4286H13.1621L1.10092 26.6982L2.24482 29.3164L13.6435 24.3362L4.84772 33.132L6.86802 35.1522L16.0451 25.9752L11.1833 38.0086L13.8324 39.0788L18.5714 27.3494V40H21.4286V27.3494L26.1676 39.0788L28.8166 38.0086L23.955 25.9752L33.132 35.1522L35.1522 33.132L26.3564 24.3362L37.7552 29.3164L38.899 26.6982L26.838 21.4286H40V18.5714H26.8378L38.899 13.3018L37.7552 10.6836L26.3564 15.6638L35.1522 6.868L33.132 4.8477L23.955 14.0248L28.8166 1.99147L26.1676 0.921164L21.4286 12.6506V0Z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_43981_6264">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span
        className={`font-extrabold text-displaysm lg:text-displaymd lg:leading-displaymd ${!isFooter ? "hidden sm:inline-block" : "inline"} sm:inline-block  ${isLogin && !isFooter ? "text-neutral-950" : "text-neutral-25"}`}
      >
        Foody
      </span>
    </div>
  );
}
