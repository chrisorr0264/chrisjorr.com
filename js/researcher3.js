function populate(){
    populatePub();
    populateExp();
    populatePresentations();
    populateRecognitions();
    populateDetails();
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

async function populateDetails(){
    const requestURL5 = 'https://chrisjorr.com/js/json/details.json';
    const request5 = new Request(requestURL5);

    const response5 = await fetch(request5);
    const details = await response5.json();


    populateInts(details);
    populateValues(details);
    populateEducation(details);
    populateEmployment(details);

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
            myMidDot.classList.add("fa-solid", "fa-ellipsis");
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
    const sectionKudo = document.querySelector("#kudoSections");

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
            mySpan.classList.add("fa-solid", "fa-ellipsis-vertical");
            myKudoBody.appendChild(mySpan);
            
            const myDate = document.createElement('span');
            myDate.innerText = " " + kudo.date;
            myKudoBody.appendChild(myDate);

            myCard.appendChild(myKudoBody);


            sectionKudo.appendChild(myCard);
        }   
    }
}


function populateInts(obj) {
    const sectionInterests = document.querySelector("#interestSections");

    for (const interest of obj[0].interests) {

        const myInterest = document.createElement('div');
        myInterest.classList.add("col-12", "col-sm-4", "pb-5", "mx-auto");
        
        const myFigure = document.createElement('figure');
        myFigure.classList.add("interests-card");
        
        const img = document.createElement('img');
        img.src = "";
        img.alt = "";
        img.classList.add("interests-card_image");

        myFigure.appendChild(img);

        const caption = document.createElement('figcaption');
        caption.classList.add("interests-card_body");

        const myH3 = document.createElement('h3');
        myH3.classList.add("interestes-card_title");
        myH3.innerText = interest.title;
        caption.appendChild(myH3);

        const myP = document.createElement('p');
        myP.classList.add("interests-card_description");
        caption.appendChild(myP);

        myFigure.appendChild(caption);
        myInterest.appendChild(myFigure);

        sectionInterests.appendChild(myInterest);
 
    }
}

function populateValues(obj) {
    const sectionValues = document.querySelector("#valueSections");

    for (const value of obj[1].values) {

        const myValue = document.createElement('div');
        myValue.classList.add("col-12", "col-sm-4", "pb-5", "mx-auto");
        
        const myFeaturette = document.createElement('div');
        myFeaturette.classList.add("featurette-icon");
        
        const myIcon = document.createElement('i');
        myIcon.classList.add("fa-solid");
        myIcon.classList.add(value.icon);

        myFeaturette.appendChild(myIcon);
        myValue.appendChild(myFeaturette);

        const myH3 = document.createElement('h3');
        myH3.innerText = value.title;
        myValue.appendChild(myH3);

        sectionValues.appendChild(myValue);
 
    }
}

function populateEducation(obj) {
    const sectionEducation = document.querySelector("#schoolCards");

    for (const school of obj[2].schools) {

        const myEducation = document.createElement('div');
        myEducation.classList.add("row", "experience");
        
        const mySidePanel = document.createElement('div');
        mySidePanel.classList.add("col-auto", "text-center", "flex-column", "d-none", "d-sm-flex");
        
        const mySpacing = document.createElement('div');
        mySpacing.classList.add("row", "h-50");

        const myIconArea = document.createElement('div');
        myIconArea.classList.add("featurette-icon")

        const myIcon = document.createElement('i');
        myIcon.classList.add("fa-solid", "fa-user-graduate");
        myIconArea.appendChild(myIcon);

        const mySpacing2 = document.createElement('div');
        mySpacing2.classList.add("row", "h-50");

        mySidePanel.appendChild(mySpacing);
        mySidePanel.appendChild(myIconArea);
        mySidePanel.appendChild(mySpacing2);


        const myDegrees = document.createElement('div');
        myDegrees.classList.add("col", "py-2");

        const myCard = document.createElement('div');
        myCard.classList.add('card');

        const myCardBody = document.createElement('div');
        myCardBody.classList.add('card-body');

        const myTitle = document.createElement('div');
        myTitle.classList.add("section-subheading", "card-title", "exp-title", "text-muted", "my-0");
        myTitle.innerText = school.degree;

        const myLoc = document.createElement('div');
        myLoc.classList.add("section-subheading", "card-title", "exp-company", "text-muted", "my-0");
        myLoc.innerText = school.facility

        const myDate = document.createElement('div');
        myDate.classList.add("text-muted", "exp-meta");
        myDate.innerText = school.date;

        const mySpan = document.createElement('span');
        mySpan.classList.add("middot-divider");

        const myCity = document.createElement('span');
        myCity.innerText = school.city;

        myDate.appendChild(mySpan);
        myDate.appendChild(myCity);

        const myDesc = document.createElement('div');
        myDesc.classList.add("card-text");
        myDesc.innerText = school.text;

        myCardBody.appendChild(myTitle);
        myCardBody.appendChild(myLoc);
        myCardBody.appendChild(myDate);
        myCardBody.appendChild(myDesc);

        myCard.appendChild(myCardBody);
        myDegrees.appendChild(myCard);

        myEducation.appendChild(mySidePanel);
        myEducation.appendChild(myDegrees);

        sectionEducation.appendChild(myEducation);
 
    }
}

function populateEmployment(obj) {
    const sectionEmployment = document.querySelector("#employmentCards");

    var count = 0;
    for (const employer of obj[3].employers) {

        const myEmployment = document.createElement('div');
        myEducation.classList.add("row", "experience");
        
        /* create reusable constants */ 
        const myBlank = document.createElement('div');
        myBlank.classList.add("col");
        myBlank.innerText = "&nbsp;";

        const myLine = document.createElement('div');
        myLine.classList.add("col", "border-right");
        myLine.innerText = "&nbsp;";

        const myFilledIcon = document.createElement('span');
        myFilledIcon.classList.add("badge", "badge-pill", "border", "exp-fill");
        myFilledIcon.innerText = "&nbsp;";

        const myEmptyIcon = document.createElement('span');
        myEmptyIcon.classList.add("badge", "badge-pill", "border");
        myEmptyIcon.innerText = "&nbsp;";
        
        /* determine what sidebar to use */
        if (count == 0){
        /* case: first employment (active) */

        const mySidePanel = document.createElement('div');
        mySidePanel.classList.add("col-auto", "text-center", "flex-column", "d-none", "d-sm-flex");
        
        const mySpacingTop = document.createElement('div');
        mySpacingTop.classList.add("row", "h-50");
        mySpacingTop.append (myBlank.cloneNode(true), myBlank.cloneNode(true));

        const myIconArea = document.createElement('div');
        myIconArea.classList.add("m-2");
        myIconArea.appendChild(myFilledIcon.cloneNode(true));

        const mySpacingBottom = document.createElement('div');
        mySpacingBottom.classList.add("row", "h-50");
        mySpacingBottom.append (myBlankLine.cloneNode(true), myBlank.cloneNode(true));

        mySidePanel.append(mySpacingTop, myIconArea, mySpacingBottom);


        } else if (count == obj[3].length) {
        /* case: last employment */

        const mySidePanel = document.createElement('div');
        mySidePanel.classList.add("col-auto", "text-center", "flex-column", "d-none", "d-sm-flex");
        
        const mySpacingTop = document.createElement('div');
        mySpacingTop.classList.add(myLine.cloneNode(true), myBlank.cloneNode(true));

        const myIconArea = document.createElement('div');
        myIconArea.classList.add("m-2");
        myIconArea.appendChild(myEmptyIcon.cloneNode(true));

        const mySpacingBottom = document.createElement('div');
        mySpacingBottom.classList.add("row", "h-50");
        mySpacingBottom.append (myBlank.cloneNode(true), myBlank.cloneNode(true));

        mySidePanel.append(mySpacingTop, myIconArea, mySpacingBottom);

        } else {
        /* all other employments */

        const mySidePanel = document.createElement('div');
        mySidePanel.classList.add("col-auto", "text-center", "flex-column", "d-none", "d-sm-flex");
        
        const mySpacingTop = document.createElement('div');
        mySpacingTop.classList.add(myLine.cloneNode(true), myBlank.cloneNode(true));

        const myIconArea = document.createElement('div');
        myIconArea.classList.add("m-2");
        myIconArea.appendChild(myEmptyIcon.cloneNode(true));

        const mySpacingBottom = document.createElement('div');
        mySpacingBottom.classList.add("row", "h-50");
        mySpacingBottom.append (myLine.cloneNode(true), myBlank.cloneNode(true));

        mySidePanel.append(mySpacingTop, myIconArea, mySpacingBottom);

        }

        const myMainSection = document.createElement('div');
        myMainSection.classList.add("col", "py-2");

        const myCard = document.createElement('div');
        myCard.classList.add('card');

        const myCardBody = document.createElement('div');
        myCardBody.classList.add("card-body", "d-flex", "align-content-start", "exp-title", "text-muted", "my-0");

        const myCardSection = document.createElement('div');

        const myTitle = document.createElement('div');
        myTitle.classList.add("section-subheading", "card-title", "exp-title", "text-muted", "my-0");
        myTitle.innerText = employment.title;

        const myCompany = document.createElement('div');
        myCompany.classList.add("section-subheading", "card-title", "exp-company", "text-muted", "my-0");
        myCompany.innerText = employment.company;

        const myLoc = document.createElement('div');
        myLoc.classList.add("section-subheading", "card-title", "exp-company", "text-muted", "my-0");
        myLoc.innerText = employment.location;

        const myDate = document.createElement('div');
        myDate.classList.add("text-muted", "exp-meta");
        myDate.innerText = employment.date;

        const mySpan = document.createElement('span');
        mySpan.classList.add("middot-divider");

        const myCity = document.createElement('span');
        myCity.innerText = employment.city;

        myDate.append(mySpan, myCity);

        myCardSection.append(myTitle, myCompany, myLoc, myDate);

        myCardBody.appendChild(mySection);

        myCard.appendChild(myCardBody);
        myMainSection.appendChild(myCard);

        
        myEducation.appendChild(mySidePanel);
        myEducation.appendChild(myMainSection);

        sectionEducation.appendChild(myEducation);
 
    }
}

/* Smooth Scrolling */
window.onload=function(){
    document.getElementById('navigation').addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        if (target.classList.contains('nav-link')) {
            const id = target.getAttribute('href').slice(1);
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }
    });
}