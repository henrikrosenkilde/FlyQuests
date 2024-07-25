import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Rosenkilde 🚀
            <div className="spinner">
              {/*<div className="spinner__image" />*/}
            </div>
          </h1>
          <p className="intro__scroll">Scroll for å lære mer om bjørn, tiger og krokodille</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Lær mer
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Håper flyturen gikk fint, og at du lærte litt mer om dyrene!</p>
      </div>
    </div>
  );
};
