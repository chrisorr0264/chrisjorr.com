function populate(){
    populatePub();
    populateExp();
}

async function populatePub() {

    const requestURL = 'https://chrisjorr.com/js/json/publications.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const pubs = await response.json();

    populateArticles(pubs);
}

async function populatePres(){
    const requestURL2 = 'https://chrisjorr.com/js/json/presentations.json';
    const request2 = new Request(requestURL2);

    const response2 = await fetch(request2);
    const presentations = await response2.json();
}

async function populateExp(){
    const requestURL3 = 'https://chrisjorr.com/js/json/experience.json';
    const request3 = new Request(requestURL3);

    const response3 = await fetch(request3);
    const experiences = await response3.json();


    populateExperience(experiences);

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

function populateTalks(obj) {
    const section = document.querySelector("#talk-sections");

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

function populateExperience(obj) {
    const section = document.querySelector("#expSections");

    for (const experience of obj.experiences) {
        if(experience.show == "main" || experience.show == "yes"){
            const myExperience = document.createElement('div');
            myExperience.classList.add("media", "stream-item", "exp-box");
           
            const myMedia = document.createElement('div');
            myMedia.classList.add("media-body");
            myExperience.appendChild(myMedia);
            
            const myDiv = document.createElement('div');
            myDiv.classList.add("section-subheading", "article-title", "mb-0", "mt-0")
            myExperience.appendChild(myDiv);

            const myExperienceTitle = document.createElement('a');
            myExperienceTitle.href = experience.link;
            myExperienceTitle.innerText = experience.title + " ";
            myExperience.appendChild(myExperienceTitle);

            const myExperienceCompany = document.createElement('div');
            myExperienceCompany.classList.add("article-style");
            myExperienceCompany.textContent = experience.company;
            const myExperienceLocation = document.createElement('p');
            myExperienceLocation.textContent = experience.location;
            myExperienceCompany.appendChild(myExperienceLocation);
            myExperience.appendChild(myExperienceCompany);

            const myExperienceText = document.createElement('div');
            myExperienceText.classList.add("article-style");
            myExperienceText.textContent = experience.text;
            myExperience.appendChild(myExperienceText);

            const myExperienceDate = document.createElement('div');
            myExperienceDate.classList.add("stream-meta", "article-metadata");
            myExperienceDate.textContent = experience.date;
            const myExperienceCity = document.createElement('span');
            myExperienceCity.classList.add("middot-divider");
            myExperienceCity.textContent = experience.city;
            myExperience.appendChild(myExperienceDate);


            section.appendChild(myExperience);
        }   
    }
}