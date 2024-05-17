document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal');
  
  const asciiArt = `
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


  function typeWriterEffect(text, delay = 10) {
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

  // Set the typing speed delay to 10ms for a very fast typing effect
  typeWriterEffect(asciiArt, 10);
});


