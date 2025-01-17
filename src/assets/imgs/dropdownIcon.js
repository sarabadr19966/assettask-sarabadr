const DropdownIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
    >
      <rect x="0" fill="none" width="24" height="24" />

      <g>
        <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
      </g>
    </svg>
  );
};

export default DropdownIcon;
