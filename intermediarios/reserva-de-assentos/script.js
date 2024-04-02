const poltronas = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
];

const poltronasVIP = [1, 2, 3, 4];
const poltronasEconomicas = [13, 14, 15, 16, 18, 19];
const poltronasDeficientes = [17, 20];

function criarTabelaPoltronas() {
    const table = document.querySelector("#poltronas");

    poltronas.forEach((linha) => {
        const tr = document.createElement("tr");
        linha.forEach((numeroAssento) => {
            const td = document.createElement("td");
            td.textContent = numeroAssento;
            td.setAttribute("data-assento", numeroAssento);

            // Verifica se a poltrona corresponde a uma das categorias especificas
            if(poltronasVIP.includes(numeroAssento)) {
                td.classList.add("poltrona-vip");
            } else if (poltronasEconomicas.includes(numeroAssento)){
                td.classList.add("poltrona-economica");
            } else if (poltronasDeficientes.includes(numeroAssento)) {
                td.classList.add("poltrona-deficiente");
            }

            const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"/></svg>';
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("class", "seat-svg");
            svg.setAttribute("viewBox", "0 0 640 512");
            svg.innerHTML = svgCode;
            td.appendChild(svg);
            tr.appendChild(td);

            td.addEventListener("click", function() {
                if (this.classList.contains("selected")) {
                    this.classList.remove("selected");
                } else {
                    this.classList.add("selected");
                }

                const numeroPoltronaselecionada = this.getAttribute("data-assento");
            });
        });
        table.appendChild(tr);
    });
}

criarTabelaPoltronas();