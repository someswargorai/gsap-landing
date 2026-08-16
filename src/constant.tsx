function star(props: React.SVGProps<SVGSVGElement>, className: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}
    className={className}
    style={{
        width:"20px",
        height:"20px"
    }}
    >
      <polygon
        points="50,5 61,38 95,38 67,58 78,92 50,72 22,92 33,58 5,38 39,38"
        fill="black"
      />
    </svg>
  );
}

export { star };
