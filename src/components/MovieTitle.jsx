export default function MovieTitle({ progress }) {
  return (
    <div>
      {progress.map((char, i) => <span key={i}> {char === " " ? "\u00A0" : char} </span>
       
      )}
    </div>
  );
}
