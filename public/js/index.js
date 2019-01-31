
function startBlinkingTextWrapper(){

  var typing_simulators = (() => {
      var typing_simulator_node_list = document.querySelectorAll(".typing-simulator");
      var selves = [];

      Array.prototype.forEach.call(typing_simulator_node_list, self => {
          var next_character_index = 0;
          var added_characters = [];
          var removed_characters = [];
          var erasure_options = null;

          var name = (function () {
              var is_name_token = token => /^typing-simulator--name-/.test(token);
              var tokens = Array.prototype.filter.call(self.classList, is_name_token);
              var names = tokens.map(token => token.slice(23));
              return names[0];
          })();

          var text = ((typing_simulator) => {
              var selector = `.typing-simulator--name-${name}`;
              selector += " .typing-simulator__text";
              var self = document.querySelector(selector);
              self.addCharacter = function (character) {
                  var typing_simulator_character = document.createElement("div");
                  typing_simulator_character.classList.add("typing-simulator__character");
                  typing_simulator_character.innerHTML = character;
                  self.appendChild(typing_simulator_character);
              };
              self.removeCharacter = function () {
                  var removed_character = null;
                  if (!self.lastChild) return null;
                  removed_character = self.lastChild;
                  self.lastChild.remove();
                  removed_characters.unshift(removed_character);
                  return removed_character;
              };
              self.lastNCharacters = function (n) {
                  return Array.prototype.slice.call(self.children, self.childElementCount - n);
              };
              self.lastNCharactersToString = function (n) {
                  var last_n_characters = self.lastNCharacters(n);
                  var str = "";
                  last_n_characters.forEach(character => {
                      if (character.innerHTML === "&nbsp;") {
                          str += " ";
                      }
                      else {
                          str += character.innerHTML;
                      }
                  });
                  return str;
              };
              self.endsWithString = function (str) {
                  console.log(`${self.lastNCharactersToString(str.length)} == ${str}`);
                  return self.lastNCharactersToString(str.length) === str;
              }
              return self;
          })(self);

          self.cursor = (() => {
              var selector = `.typing-simulator--name-${name}`;
              selector += " .typing-simulator__cursor";
              var self = document.querySelector(selector);
              self.blinkInterval = 600;

              simulate_blinking();

              function simulate_blinking() {
                  setInterval(toggle_visibility, self.blinkInterval);
              };

              function toggle_visibility() {
                  self.classList.toggle("typing-simulator__cursor--inactive");
                  self.classList.toggle("typing-simulator__cursor--active");
              }

              return self;
          })(self);

          simulate_typing();
          self.name = name;
          selves.push(self);

          function simulate_typing() {
              var options = {
                  rawText: simple_text,
                  characterDelay: 25
              };

              var { rawText, characterDelay } = options;

              function callback() {
                  var next_character = rawText.charAt(next_character_index);
                  if (next_character) {
                      next_character_index < rawText.length && ++next_character_index;
                      var new_character = next_character === " " && "&nbsp;" || next_character;
                      text.addCharacter(new_character);
                      added_characters.push(new_character);
                      poll_erasure_signal();
                      simulate_erasure(simulate_typing);
                  }
              }
              setTimeout(callback, characterDelay);
          };

          /*
          *  Define the behaviour of the typing simulation here.
          *  To define a behaviour:
          *  1. Create an IIFE
          *  2. Write an if condition evaluating "true" using methods on the typing-simlator "text" object.
          *  3. Place assign a new options object to predeclared "erasure_options" variable.
          *  That's it!
          */
          function poll_erasure_signal() {
              var character_delay = 100;

              (() => {
                  var str = head;
                  if (text.endsWithString(str)) {
                      erasure_options = {
                          numCharacters: str.length,
                          characterDelay: character_delay
                      };
                  }
              })();

              (() => {
                  var str = des1;
                  if (text.endsWithString(str)) {
                      erasure_options = {
                          numCharacters: str.length,
                          characterDelay: character_delay
                      };
                  }
              })();

              (() => {
                  var str = des2;
                  if (text.endsWithString(str)) {
                      erasure_options = {
                          numCharacters: str.length,
                          characterDelay: character_delay
                      };
                  }
              })();

              (() => {
                  var str = des3;
                  if (text.endsWithString(str)) {
                      erasure_options = {
                          numCharacters: str.length,
                          characterDelay: character_delay
                      };
                  }
              })();

              (() => {
                  var str = des4;
                  if (text.endsWithString(str)) {
                      erasure_options = {
                          numCharacters: str.length,
                          characterDelay: character_delay
                      };
                  }
              })();
          }

          function simulate_erasure(callback) {
              if (erasure_options) {
                  var { numCharacters, characterDelay } = erasure_options;
                  setTimeout(remove_characters, characterDelay);
              }
              else {
                  callback();
              }


              function remove_characters() {
                  var invalidNumCharacters = numCharacters >= text.length;
                  if (!invalidNumCharacters && !(removed_characters.length === numCharacters)) {
                      text.removeCharacter();
                      simulate_erasure(callback);
                  }
                  else {
                      erasure_options = null;
                      removed_characters = [];
                      callback();
                  }
              }
          }
      });

      return selves;
  })();
}

startBlinkingText();

setInterval(startBlinkingText, 20000);
