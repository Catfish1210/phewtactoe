var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(e) {
      if (e.target.textContent === "") {
        var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.setAttributeNS(null, "viewBox", "0 0 100 100");
        icon.setAttributeNS(null, "class", "x-icon");
        var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttributeNS(null, "d", "M 10 10 L 90 90");
        path1.setAttributeNS(null, "stroke", "cyan");
        path1.setAttributeNS(null, "stroke-width", "20");
        var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttributeNS(null, "d", "M 10 90 L 90 10");
        path2.setAttributeNS(null, "stroke", "cyan");
        path2.setAttributeNS(null, "stroke-width", "20");
        icon.appendChild(path1);
        icon.appendChild(path2);
        e.target.appendChild(icon);
      }
    });
}
