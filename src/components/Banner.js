import backgroundImg from "../images/cour_assises.JPG";

export function Banner() {
  return (
    <>
      <div className="test">
        <img
          className="portrait-img"
          src={backgroundImg}
          alt="portrait de Maître Sylvain Dubray"
        ></img>
      </div>
    </>
  );
}
