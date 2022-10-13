setTimeout(() => {
    clockifyButton.render('.window-sidebar:not(.clockify)', {observe: true}, (elem) => {
        const root = $('div[id="trello-root"]');
        const container = elem.lastChild.childNodes[1];
        const htmlTag = createTag('div', 'button-link');
        const htmlTagInput = createTag('div', 'button-link input-button-link');
        const projectElem = $('.board-header-btn-text', root).textContent.trim();
        const desc = $('div[class="window-title"] > h2', root).textContent.trim();
        htmlTagInput.style.padding = "0px";

        const inputForm = clockifyButton.createInput({
            description: desc,
            projectName: projectElem
        });
        htmlTagInput.appendChild(inputForm);
        container.prepend(htmlTagInput);

        const link = clockifyButton.createButton(desc, projectElem);
        htmlTag.appendChild(link);
        container.prepend(htmlTag);
        $('.clockify-input').style.width = "100%";
        $('.clockify-input').style.boxShadow = "none";
        $('.clockify-input').style.border = "1px solid #eaecf0";
        $('.clockify-input').style.backgroundColor = "#eaecf0";

    });

    /* List cards */
    clockifyButton.render('.list-cards .list-card:not(.clockify)', {observe: true}, (elem) => {
        elem.style.minHeight = '60px';
        elem.style.paddingRight = '15px';
        const root = $('div[id="trello-root"]');

        const projectElem = $('.board-header-btn-text', root).textContent.trim();
        const link = clockifyButton.createButton({description: () => $('.list-card-title', elem).innerText.trim(), projectName: projectElem, small: true});
        link.style.position = 'absolute';
        link.style.right = '2px';
        link.style.bottom = '8px';
        link.style.zIndex = '9999';
        elem.prepend(link);
    });

    /* Checklist buttons */
    clockifyButton.render('.checklist-item-details:not(.clockify)', {observe: true}, (elem) => {
        const root = $('div[id="trello-root"]');
        //const project= $('.board-header-btn > span').textContent.trim();
        const projectElem = $('.board-header-btn-text', root); //.textContent.trim();

        const desc = $('div[class="window-title"] > h2', root).textContent;
        const task = $('.checklist-item-details-text', elem).textContent;

        const link = clockifyButton.createButton({
            description: task + " - " + desc,
            projectName: projectElem ? projectElem.textContent.trim() : null,
            small: true
        });
        link.classList.add('checklist-item-button');
        $('.checklist-item-controls', elem).prepend(link);
    });
}, 1000);
