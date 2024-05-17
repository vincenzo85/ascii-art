document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal');

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

  function getRandomChar() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function typeWriterEffect(text, delay = 100, errorChance = 0.05, retypeDelay = 500) {
    terminal.textContent = '';
    let index = 0;
    let typing = true;
    let error = false;

    function writeChar() {
      if (index < text.length) {
        if (!error && Math.random() < errorChance) {
          // Introduce an error
          const randomChar = getRandomChar();
          terminal.textContent += randomChar;
          index++;
          error = true;
          setTimeout(() => {
            terminal.textContent = terminal.textContent.slice(0, -1);
            index--;
            error = false;
            setTimeout(writeChar, retypeDelay);
          }, retypeDelay);
        } else {
          terminal.textContent += text[index++];
          setTimeout(writeChar, delay);
        }
      }
    }

    writeChar();
  }

  typeWriterEffect(asciiArt1, 100, 0.1, 500);
});
