setTimeout(() => {
    clockifyButton.render('.SingleTaskPane:not(.clockify)', {observe: true}, (elem) => {
        var link,
            container = $('.SingleTaskPaneToolbar-leftItems', elem),
            description = $('.SingleTaskPane-titleRowInput > div > textarea', elem) ?
                $('.SingleTaskPane-titleRowInput > div > textarea', elem).textContent : "",
            projectElements = document.getElementsByClassName('TaskProjectPill-pill'),
            project = projectElements && projectElements.length > 0 ?
                projectElements[0].textContent : "";
        link = clockifyButton.createButton(description, project);
        link.style.marginLeft = "10px";
        container.appendChild(link);

    });
}, 1000);

// New task pane list detail modal
setTimeout(() => {
    clockifyButton.render('.SingleTaskPaneSpreadsheet:not(.clockify)', {observe: true}, (elem) => {
        var link,
            container = $('.SingleTaskPaneToolbarAnimation-row', elem),
            description = $('[aria-label="Task Name"]', elem) ?
                $('[aria-label="Task Name"]', elem).textContent : "",
            projectElements = document.getElementsByClassName('PotTokenizerPill-name'),
            project = projectElements && projectElements.length > 0 ?
                projectElements[0].textContent : "";
        link = clockifyButton.createButton(description, project);
        link.style.marginLeft = "10px";
        container.appendChild(link);

    });
},100);

// // New UI v1
// clockifyButton.render('#right_pane__contents .SingleTaskPane:not(.clockify)', {observe: true}, (elem) => {
//     var link, descFunc, projectFunc,
//         container = $('.SingleTaskTitleRow', elem),
//         description = $('.SingleTaskTitleRow .simpleTextarea', elem),
//         project = $('.TaskProjectPill-projectName div', elem);
//
//     if (!container) {
//         return;
//     }
//
//     descFunc = function () {
//         return !!description ? description.value : "";
//     };
//
//     projectFunc = function () {
//         return (project && project.textContent) || ($('.TaskAncestry-ancestorProjects', elem) && $('.TaskAncestry-ancestorProjects', elem).textContent) || "";
//     };
//
//     link = clockifyButton.createButton(descFunc, projectFunc);
//     container.after(link);
// });
//
// // New UI v2
// clockifyButton.render('#right_pane__contents .SingleTaskPane-body:not(.clockify)', {observe: true}, (elem) => {
//     var link, descFunc, projectFunc,
//         container = $('.TaskPaneAssigneeDueDateRowStructure', elem),
//         description = $('.SingleTaskPane-titleRow .simpleTextarea', elem),
//         project = $('.TaskProjectPill-projectName div', elem);
//
//     descFunc = function () {
//         return !!description ? description.value : "";
//     };
//
//     projectFunc = function () {
//         return (project && project.textContent) || ($('.TaskAncestry-ancestorProjects', elem) && $('.TaskAncestry-ancestorProjects', elem).textContent) || "";
//     };
//
//     link = clockifyButton.createButton(descFunc, projectFunc);
//     container.appendChild(link);
// });
//
// // New UI Board view v1 and v2
// clockifyButton.render('.BoardColumnCardsContainer-item:not(.clockify)', {observe: true}, (elem) => {
//     if (!!$('.clockify-button-active', elem) || !!$('.clockify-button-inactive', elem)) {
//         return;
//     }
//     var link,
//         container = $('.BoardCardWithCustomProperties-assigneeAndDueDate', elem),
//         description = $('.BoardCardWithCustomProperties-name', elem).textContent;
//
//     link = clockifyButton.createButton(description);
//     container.appendChild(link);
// });

// // New UI Board task detail view v1
// clockifyButton.render('.SingleTaskPane-titleRowInput:not(.clockify)', {observe: true}, (elem) => {
//     if (!!$('.clockify-button-active', elem) || !!$('.clockify-button-inactive', elem)) {
//         return;
//     }
//     let link,
//         container = $('.SingleTaskPaneToolbar-leftItems', elem.parentNode),
//         description = $('.SingleTaskPane-titleRow .simpleTextarea', elem.parentNode).textContent,
//         projectList =
//             $('.SingleTaskPane-projects .TaskProjects-projectList', elem.parentNode),
//         project = "";
//     if (projectList && projectList.childNodes.length > 0) {
//         setTimeout(() => {
//             project = projectList.childNodes[0].firstChild.textContent;
//             link = clockifyButton.createButton(description, project);
//             link.style.marginLeft = '20px';
//             container.appendChild(link);
//         }, 1000);
//     } else {
//         link = clockifyButton.createButton(description);
//         link.style.marginLeft = '20px';
//         container.appendChild(link);
//     }
// });

// // New UI Board task detail view v2
// clockifyButton.render('.SingleTaskPane-titleRow:not(.clockify)', {observe: true}, (elem) => {
//     if (!!$('.clockify-button-active', elem) || !!$('.clockify-button-inactive', elem)) {
//         return;
//     }
//     var link,
//         container = $('.SingleTaskPaneToolbar-leftItems', elem.parentNode),
//         description = $('.SingleTaskPane-titleRow .simpleTextarea', elem.parentNode).textContent,
//         project =
//             $('.ProjectPageHeader-projectName').textContent;
//
//
//     link = clockifyButton.createButton(description, project);
//     link.style.marginLeft = '20px';
//     container.appendChild(link);
// });
