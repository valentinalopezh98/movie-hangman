export default function MovieTitle({ progress }) {
  return (
    <div>
      {progress.map((char, i) => {
        if (/^[a-zA-Z0-9]$/.test(char)) {
          return <span key={i}> _ </span>;
        } else {
          return <span key={i}> {char === " " ? "\u00A0" : char}</span>;
        }
      })}
    </div>
  );
}
