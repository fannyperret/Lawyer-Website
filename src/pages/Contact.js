export function Contact() {
  return (
    <>
      <div className="main">
        <div className="container-home">
          <h1 className="h1-second-size">Contact</h1>
        </div>

        <div className="container-contact">
          <form>
            <div className="container-input">
              <label htmlFor="name">Votre nom et prénom : </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="container-input">
              <label htmlFor="email">Votre email : </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="container-input">
              <label htmlFor="message">Votre message : </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                cols="40"
              ></textarea>
            </div>
            <button>
              <i>Icon</i>Envoyer
            </button>
          </form>
          <div>Google Map</div>
        </div>
      </div>
    </>
  );
}
