type OrnamentDiamondProps = {
  className?: string;
};

export default function OrnamentDiamond({ className }: OrnamentDiamondProps) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <polygon points="4,0 8,4 4,8 0,4" />
    </svg>
  );
}

