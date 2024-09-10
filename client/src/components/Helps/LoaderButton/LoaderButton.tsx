import "./LoaderButton.scss";

interface LoaderButtonProps {
  size: number;
  color: string;
}

function LoaderButton({ size, color }: LoaderButtonProps) {
  return (
    <div className="sk-chase" style={{ width: size, height: size }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="sk-chase-dot"
          style={{ width: size, height: size }}
        >
          {/* The `before` pseudo-element styling will be handled in the CSS */}
          <div
            className="sk-chase-dot-inner"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default LoaderButton;
