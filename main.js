window.addEventListener("load", () => {
  (() => {
    class Key {
      constructor() {
        this.isKeydown = false;
      }

      keydown(key) {
        if (!this.isKeydown) {
          document.getElementById(key).style.color = "cyan";
          this.isKeydown = true;
        }
      }

      keyup(key) {
        if (this.isKeydown) {
          document.getElementById(key).style.color = "black";
          this.isKeydown = false;
        }
      }
    }

    let keys = new Map([
      ["1", new Key()],
      ["2", new Key()],
      ["3", new Key()],
      ["4", new Key()],
      ["5", new Key()],
      ["6", new Key()],
      ["7", new Key()],
      ["8", new Key()],
      ["9", new Key()],
      ["0", new Key()],

      ["q", new Key()],
      ["w", new Key()],
      ["e", new Key()],
      ["r", new Key()],
      ["t", new Key()],
      ["y", new Key()],
      ["u", new Key()],
      ["i", new Key()],
      ["o", new Key()],
      ["p", new Key()],

      ["a", new Key()],
      ["s", new Key()],
      ["d", new Key()],
      ["f", new Key()],
      ["g", new Key()],
      ["h", new Key()],
      ["j", new Key()],
      ["k", new Key()],
      ["l", new Key()],

      ["z", new Key()],
      ["x", new Key()],
      ["c", new Key()],
      ["v", new Key()],
      ["b", new Key()],
      ["n", new Key()],
      ["m", new Key()],
    ]);

    const body = document.querySelector("body");

    body.addEventListener("keydown", event => {
      if (event.isComposing || event.repeat || event.keyCode === 229) {
        return;
      }

      const key = event.key;
      if (keys.has(key)) {
        keys.get(key).keydown(key);
      }
    });

    body.addEventListener("keyup", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }

      const key = event.key;
      if (keys.has(key)) {
        keys.get(key).keyup(key);
      }
    });
  })();
});
