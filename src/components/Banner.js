import backgroundImg from "../images/cour_assises.jpg";

export function Banner() {
  return (
    <>
      <div className="background">
        <img
          src={backgroundImg}
          alt="portrait de Maître Sylvain Dubray"
        ></img>
      </div>
    </>
  );
}
