document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal');
  const speedControl = document.getElementById('speed-control');

  const asciiArt1 = `
           +--------------------------------+
           | Apprendimento a lungo termine  |
           +---------------+----------------+
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
+-------------+-------------+    +------+-----------+--------+
| Studio attivo con domande  |    | Collaborazione con       |
| (self-explanation)         |    | compagni di studio       |
+---------------------------+    +---------------------------+
              |                         |
+-------------+-------------+    +------+-----------+--------+
| Applicazione pratica      |    | Insegnare ad altri        |
| (learning by doing)       |    | (teaching)                |
+---------------------------+    +---------------------------+
  `;

  let typingInterval;
  let delay = parseInt(speedControl.value, 10);

  function typeWriterEffect(text, delay) {
    clearInterval(typingInterval);
    terminal.textContent = '';
    let index = 0;

    function writeChar() {
      if (index < text.length) {
        terminal.textContent += text[index++];
      } else {
        clearInterval(typingInterval);
      }
    }

    typingInterval = setInterval(writeChar, delay);
  }

  speedControl.addEventListener('input', (event) => {
    delay = parseInt(event.target.value, 10);
    typeWriterEffect(asciiArt, delay);
  });

  // Initial typing effect
  typeWriterEffect(asciiArt, delay);
