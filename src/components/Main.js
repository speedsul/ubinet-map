export default function Main(props) {
  return (
    <div className="w-3/4 bg-gray-100 shadow-lg z-20 -m-10 rounded-lg p-5">
      <div>{props.children}</div>
    </div>
  );
}
