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

  function typeWriterEffect(text, delay = 100, deleteChance = 0.05, retypeDelay = 200) {
    terminal.textContent = '';
    let index = 0;
    let typing = true;

    function writeChar() {
      if (index < text.length) {
        // Randomly decide whether to delete a character
        if (Math.random() < deleteChance && typing) {
          terminal.textContent = terminal.textContent.slice(0, -1);
          index--;
          typing = false;
          setTimeout(writeChar, retypeDelay);
        } else {
          terminal.textContent += text[index++];
          typing = true;
          setTimeout(writeChar, delay);
        }
      }
    }

    writeChar();
  }

  typeWriterEffect(asciiArt1, 100, 0.1, 200);

  setTimeout(() => {
    typeWriterEffect(asciiArt2, 100, 0.1, 200);
  }, 10000);
});
