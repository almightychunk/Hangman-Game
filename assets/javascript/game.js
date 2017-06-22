var availableLetters = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];

  var options = ["cowboys","giants", "eagles", "redskins"];
  function randWord() {
      var random = options[Math.floor(Math.random()*options.length)];
      console.log(random);
      var targetDiv = document.getElementById("randWord");
      targetDiv.innerHTML = random;
  };
randWord();
