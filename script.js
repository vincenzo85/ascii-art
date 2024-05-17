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

  function typeWriterEffect(text, delay = 100) {
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

  typeWriterEffect(asciiArt1, 100);
});
