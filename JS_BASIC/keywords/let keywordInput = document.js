 let keywordInput = document.querySelector("#keyword-form");
        let searchButton = document.querySelector("#search-button");
        let paragraphs = document.querySelectorAll(".text-box p");
        let result = document.querySelector(".results");

        function searchKeyword() {
            let keyword = keywordInput.value;
            let matchedKeywords = [];
            
            paragraphs.forEach(paragraph => {
                let matchesInParagraph = paragraph.textContent.match(new RegExp(keyword, 'gi'));
                if (matchesInParagraph) {
                    matchedKeywords = matchedKeywords.concat(matchesInParagraph);
                }
            });

            showResult(matchedKeywords);
            console.log(matchedKeywords);
        }

        function showResult(matchedKeywords) {
            result.textContent = `A busca retornou ${matchedKeywords.length} resultados`;
        }

        

        // _____________________________________



        let keywordInput = document.querySelector("#keyword-form");
        let searchButton = document.querySelector("#search-button");
        let paragraphs = document.querySelectorAll(".text-box p");
        let result = document.querySelector(".results");

        function searchKeyword() {
            let keyword = keywordInput.value.toLowerCase(); // torna a pesquisa sem diferenciação entre maiúsculas e minúsculas

            paragraphs.forEach(paragraph => {
                let paragraphText = paragraph.textContent.toLowerCase();

                if (paragraphText.includes(keyword)) {
                    let words = paragraphText.split(/\s+/); // divide o parágrafo em palavras
                    let highlightedText = words.map(word => (word.includes(keyword) ? `<span class="highlight">${word}</span>` : word));
                    paragraph.innerHTML = highlightedText.join(' ');
                }
            });

            // Exibir resultado
            showResult();
        }

        function showResult() {
            result.textContent = `Busca concluída. As palavras foram destacadas nos parágrafos.`;
        }