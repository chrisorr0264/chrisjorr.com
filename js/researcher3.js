async function populate() {

    const requestURL = 'https://chrisjorr.com/js/json/publications.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const pubs = await response.json();


    populateArticles(pubs);

    }

    function populateArticles(obj) {
        const section = document.querySelector("#pubCards");
    
        for (const pub of obj.pubs) {
            if(pub.show == "main" || pub.show == "yes"){
                const myArticle = document.createElement('div');
                myArticle.classList.add("pub-list-item");
                
                const myI = document.createElement('i');
                myI.classList.add("far", "fa-file-alt", "pub-icon");
                myArticle.appendChild(myI);

                const mySpanClass = document.createElement('span');
                mySpanClass.classList.add("article-metadata", "li-cite-author");
                myArticle.appendChild(mySpanClass);

                    var count = 0;
                    const maxCount = pub.authors.length;
                
                    for(const author of pub.authors){
                        
                        count++;
                        const mySpan = document.createElement('span');
                        var boldName = author.name;

                        if(count == maxCount){
                            boldName = boldName + ".";
                        } else {
                            boldName = boldName + "; ";
                        }
                        if (boldName.includes("Orr")){
                            const myBold = document.createElement('b');
                            myBold.textContent = boldName;
                            myArticle.appendChild(myBold);
                        } else {
                            mySpan.textContent = boldName;
                        }
                        

                        myArticle.appendChild(mySpan);
                    }
                const myYear = document.createElement('a');
                myYear.textContent = " (" + pub.year + "). ";
                myArticle.appendChild(myYear);

                const myPub = document.createElement('a');
                myPub.href = pub.article_link;
                myPub.innerText = pub.article + " ";
                myArticle.appendChild(myPub);

                const myNewEm = document.createElement('em');
                myNewEm.textContent = pub.journal;
                myArticle.appendChild(myNewEm);

                const myPara = document.createElement('p');
                const myCite = myPara.appendChild(document.createElement('a'));
                myCite.href = '#';
                myCite.classList.add("btn", "btn-outline-primary", "btn-page-header", "btn-sm", "js-cite-modal");
                myCite.setAttribute("data-filename",pub.cite_link);
                myCite.innerText = "Cite";
                myPara.appendChild(myCite);
                myArticle.appendChild(myPara);

                section.appendChild(myArticle);
            }   
        }
    }

