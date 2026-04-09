function generateTable() {
      const num = document.getElementById("number").value;
      const container = document.getElementById("container");
      container.innerHTML = "";


      let table = "<table>";
      for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${num} x ${i}</td><td>${num * i}</td></tr>`;
      }
      table += "</table>";
      container.innerHTML = table;
    }