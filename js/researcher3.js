function populate(){
    populatePub();
    populateExp();
    populatePresentations();
    populateRecognitions();
}

async function populatePub() {

    const requestURL = 'https://chrisjorr.com/js/json/publications.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const pubs = await response.json();

    populateArticles(pubs);
}

async function populatePresentations(){
    const requestURL2 = 'https://chrisjorr.com/js/json/presentations.json';
    const request2 = new Request(requestURL2);

    const response2 = await fetch(request2);
    const talks = await response2.json();

    populateTalks(talks);
}

async function populateExp(){
    const requestURL3 = 'https://chrisjorr.com/js/json/experience.json';
    const request3 = new Request(requestURL3);

    const response3 = await fetch(request3);
    const experiences = await response3.json();


    populateExperience(experiences);

}

async function populateRecognitions(){
    const requestURL4 = 'https://chrisjorr.com/js/json/recognitions.json';
    const request4 = new Request(requestURL4);

    const response4 = await fetch(request4);
    const kudos = await response4.json();


    populateKudos(kudos);

}

function populateArticles(obj) {
    const sectionPub = document.querySelector("#pubCards");
    /* alert(document.title); */
    for (const pub of obj.pubs) {
        if((!document.title.includes("Publications") && pub.show=="main") || (document.title.includes("Publications") && (pub.show=="main" || pub.show=="yes"))){
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
                        boldName = boldName + " ";
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

            sectionPub.appendChild(myArticle);
        }   
    }
}

function populateTalks(obj) {
    const sectionTalk = document.querySelector("#talks");
    
    for (const talk of obj.talks) {
        if((!document.title.includes("Presentations") && talk.show=="main") || (document.title.includes("Presentations") && (talk.show=="main" || talk.show=="yes"))){
            const myTalk = document.createElement('div');
            myTalk.classList.add("pub-list-item");

            const myTitleRow = document.createElement('div');
            myTitleRow.classList.add("row");

            
            const myTitle = document.createElement('a');
            myTitle.href = talk.link;
            myTitle.innerText = talk.conference;
            myTitleRow.appendChild(myTitle);
            myTalk.appendChild(myTitleRow);
            
            const myRow = document.createElement('div');
            myRow.classList.add("row");

            const myDescCol = document.createElement('div');
            myDescCol.classList.add('col-8');

            const myTypeSpan = document.createElement('span');
            myTypeSpan.style = "font-weight: bold";
            myTypeSpan.innerText = talk.type + " Presentation.";
            myDescCol.appendChild(myTypeSpan);

            const myTypePara = document.createElement('p');
            myTypePara.innerText = talk.title;
            myDescCol.appendChild(myTypePara);
            myRow.appendChild(myDescCol);

            const myLocCol = document.createElement('div');
            myLocCol.classList.add('col-4', 'text-center');

            const myDate = document.createElement('p');
            myDate.classList.add("mb-0")
            myDate.innerText = talk.date;

            myLocCol.appendChild(myDate);

            const myMidDot = document.createElement('i');
            myMidDot.classList.add("fa-brands", "fa-galactic-republic");
            myLocCol.appendChild(myMidDot);
            
            const myLoc = document.createElement('p');
            myLoc.innerText = talk.location;
            
            myLocCol.appendChild(myLoc);

            myRow.appendChild(myLocCol);
            
            myTalk.appendChild(myRow);

            sectionTalk.appendChild(myTalk);
        }
    }
}

function populateExperience(obj) {
    const sectionExp = document.querySelector("#expSections");

    for (const experience of obj.experiences) {
        if((!document.title.includes("Experience") && experience.show=="main") || (document.title.includes("Experience") && (experience.show=="main" || experience.show=="yes"))){
            const myExperience = document.createElement('div');
            myExperience.classList.add("media", "stream-item", "exp-box");
           
            const myMedia = document.createElement('div');
            myMedia.classList.add("media-body");
            
            
            const myDiv = document.createElement('div');
            myDiv.classList.add("section-subheading", "article-title", "mb-0", "mt-0")
            myMedia.appendChild(myDiv);


            const myExperienceTitle = document.createElement('a');
            myExperienceTitle.href = experience.link;
            myExperienceTitle.innerText = experience.title + " ";
            myMedia.appendChild(myExperienceTitle);

            const myExpDate = document.createElement('span');
            myExpDate.style = "float: right", "font-size: .8rem";
            myExpDate.innerText = experience.date + " | " + experience.city
            myMedia.appendChild(myExpDate);

            const myExperienceCompany = document.createElement('div');
            myExperienceCompany.classList.add("article-style");
            myExperienceCompany.textContent = experience.company;
            const myExperienceLocation = document.createElement('p');
            myExperienceLocation.textContent = experience.location;
            myExperienceCompany.appendChild(myExperienceLocation);
            myMedia.appendChild(myExperienceCompany);

            const myExperienceText = document.createElement('div');
            myExperienceText.classList.add("article-style");
            myExperienceText.textContent = experience.text;
            myMedia.appendChild(myExperienceText);



            myExperience.appendChild(myMedia);


            sectionExp.appendChild(myExperience);
        }   
    }
}

function populateKudos(obj) {
    const sectionKudo = document.querySelector("#KudoSections");

    for (const kudo of obj.kudos) {
        if((!document.title.includes("Recognitions") && kudo.show=="main") || (document.title.includes("Recognitions") && (kudo.show=="main" || kudo.show=="yes"))){
            const myKudo = document.createElement('div');
            myKudo.classList.add("card", "experience", "course");
           
            const myCard = document.createElement('div');
            myCard.classList.add("card-body");
            
            
            const myDiv = document.createElement('div');
            myDiv.classList.add("section-subheading", "card-title", "exp-title", "text-muted", "mt-0")
            myDiv.innerText = kudo.title;
            myCard.appendChild(myDiv);


            const myKudoBody = document.createElement('div');
            myKudoBody.classList.add("card-subtitle", "my-0", "article-metadata");

            const myKudoOrg = document.createElement('a');
            myKudoOrg.href = kudo.kudo_link;
            myKudoOrg.innerText = kudo.organization + " ";
            myKudoBody.appendChild(myKudoOrg);

            const mySpan = document.createElement('span');
            mySpan.classList.add("middot-divider");
            mySpan.innerText = kudo.date;
            myKudoBody.appendChild(mySpan);
            

            myCard.appendChild(myKudoBody);


            sectionKudo.appendChild(myCard);
        }   
    }
}