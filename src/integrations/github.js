'use strict';

clockifyButton.render('#partial-discussion-sidebar:not(.clockify)', {observe: true}, (elem) => {
    var div, link, description,
        numElem = $('.gh-header-number'),
        titleElem = $('.js-issue-title'),
        projectElem = $('h1.public strong a, h1.private strong a'),
        existingTag = $('.discussion-sidebar-item.clockify');

    // Check for existing tag, create a new one if one doesn't exist or is not the first one
    // We want button to be the first one because it looks different from the other sidebar items
    // and looks very weird between them.

    if (existingTag) {
        if (existingTag.parentNode.firstChild.classList.contains('clockify')) {
            return;
        }
        existingTag.parentNode.removeChild(existingTag);
    }

    description = titleElem.textContent;
    if (numElem !== null) {
        description = numElem.textContent + " " + description.trim();
    }

    div = document.createElement("div");
    div.classList.add("discussion-sidebar-item", "clockify");

    link = clockifyButton.createButton(description);

    div.appendChild(link);
    elem.prepend(div);
});
