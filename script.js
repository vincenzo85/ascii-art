document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal');
  const speedControl = document.getElementById('speed-control');

  const asciiArt1 = `
           +-----------------------------+
           | Apprendimento a lungo termine|
           +---------------+-------------+
                           |
              +------------+------------+
              |                         |
  +-----------+-----------+  +----------+-----------+
  | Apprendimento attivo  |  | Revisione regolare   |
  +-----------------------+  +----------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Prendere appunti          |    | Revisione ogni pochi    |
| durante l'apprendimento   |    | giorni o settimane      |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Tecniche di sintesi       |    | Spaced Repetition       |
|                           |    | (Ripetizione dilazionata)|
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Mappe concettuali         |    | Quiz e Auto-Verifica    |
|                           |    |                         |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Studio attivo con domande  |    | Collaborazione con       |
| (self-explanation)         |    | compagni di studio       |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Applicazione pratica      |    | Insegnare ad altri       |
| (learning by doing)       |    | (teaching)               |
+---------------------------+    +-------------------------+
  `;

  function typeWriterEffect(text, delay) {
    terminal.textContent = '';
    let index = 0;

    function writeChar() {
      if (index < text.length) {
        terminal.textContent += text[index++];
        setTimeout(writeChar, delay);
      }
    }

    writeChar();
  }

  // Get initial delay from the speed control slider
  let delay = parseInt(speedControl.value, 10);

  // Update delay whenever the slider value changes
  speedControl.addEventListener('input', (event) => {
    delay = parseInt(event.target.value, 10);
  });

  // Function to start typing with the current delay
  function startTyping() {
    typeWriterEffect(asciiArt1, delay);
  }

  // Start typing initially
  startTyping();

  // Restart typing with updated delay every time the slider changes
  speedControl.addEventListener('change', startTyping);
});
