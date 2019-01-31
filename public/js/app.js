class App {
  constructor() {}

  //this enables the card editor
  _handle_create_card(event) {}

  //handles create pixel art
  __handle_create_pixel(event) {
    console.log("create pixel art");
  }

  onSuccess(response) {
    response.text().then(text => {
      console.log(text);
    });
  }

  onError(error) {}
}

const app = new App();
