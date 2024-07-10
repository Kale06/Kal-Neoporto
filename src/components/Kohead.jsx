import kohead from "../assets/ko-head.png";

export function Kohead() {

  return (
    <div
    className="kohead-div"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <img
        className="kohead"
        style={{
          minWidth: "280px",
          width: "26%",
        }}
        src={kohead}
        alt="Kohead"
      />
    </div>
  );
}
