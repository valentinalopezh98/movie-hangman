
function PlayBtn(props) {
  return <button onClick={props.onClick} className="bg-red-400 w-72 py-2 rounded-full">{props.children}</button>;
}

export default PlayBtn;
