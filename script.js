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

  const asciiArt2 = `
           +-----------------------------+
           | Updated Learning Path       |
           +---------------+-------------+
                           |
              +------------+------------+
              |                         |
  +-----------+-----------+  +----------+-----------+
  | Active Learning Process |  | Regular Review    |
  +-----------------------+  +----------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Taking Notes             |    | Review Every Few Days   |
| during Learning          |    | or Weeks                |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Synthesis Techniques       |    | Spaced Repetition       |
|                            |    |                         |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Concept Mapping            |    | Quizzes and Self-Testing|
|                            |    |                         |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Active Study with Questions |  | Collaboration with      |
| (Self-explanation)          |  | Study Peers             |
+---------------------------+    +-------------------------+
              |                         |
+-------------+-------------+    +------+-----------+------+
| Practical Application      |    | Teaching Others          |
| (Learning by Doing)        |    |                         |
+---------------------------+    +-------------------------+
  `;

  function displayAsciiArt(text, delay = 50) {
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

  displayAsciiArt(asciiArt1);

  setTimeout(() => {
    displayAsciiArt(asciiArt2);
  }, 5000);
});
