export function Contact() {
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>

      <form>
        <div>
          <label for="name">Votre nom et prénom : </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label for="email">Votre email : </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for="message">Votre message : </label>
          <textarea id="message" name="message" rows="5" cols="33"></textarea>
        </div>
        <button>
          <i>Icon</i>Envoyer
        </button>
      </form>
    </>
  );
}
