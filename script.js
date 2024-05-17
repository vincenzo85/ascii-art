document.addEventListener('DOMContentLoaded', () => {
  const Terminal = window.Terminal.Terminal;
  const FitAddon = window.FitAddon.FitAddon;

  const terminal = new Terminal();
  const fitAddon = new FitAddon();
  terminal.loadAddon(fitAddon);

  terminal.open(document.getElementById('terminal'));
  fitAddon.fit();

  const asciiArt = `
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

  function displayAsciiArt() {
    terminal.clear();
    terminal.write(asciiArt);
  }

  displayAsciiArt();

  setTimeout(() => {
    const updatedAsciiArt = `
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
    terminal.clear();
    terminal.write(updatedAsciiArt);
  }, 5000);
});
