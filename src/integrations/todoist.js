// projects
clockifyButton.render('.project_editor_instance [data-action-hint="task-root"]:not(.clockify)', {observe: true}, function (elem) {
  description = $('.markdown_content.task_content', elem).textContent;
  project = $('.view_header__content h1').textContent;
  var tags = () => Array.from($$(".task_list_item__info_tags__label", elem)).map(e => e.innerText);

  link = clockifyButton.createButton({
      description: description,
      projectName: project,
      small: true,
      tagNames: tags
  });
  link.style.paddingRight = "10px";
  link.style.marginTop = "12px";
  link.style.height = "fit-content";
  elem.prepend(link);
});

// 

// // task modal
clockifyButton.render('.detail_modal:not(.clockify)', {observe: true}, function (elem) {
  description = () => $(".item_detail .task_content").innerText;
  project = () => $(".item_detail_parent_name").innerText;
  var tags = () => Array.from($$(".item_overview_sub > a", elem)).map(e => e.innerText);

  link = clockifyButton.createButton({
      description,
      projectName: project,
      tagNames: tags
  });
  link.style.padding = "20px 25px 0px";
  elem.insertBefore(link, elem.firstChild);
});

// // filters
clockifyButton.render('#agenda_view [data-action-hint="task-root"]:not(.clockify)', {observe: true}, function (elem) {
  description = $('.markdown_content.task_content', elem).textContent;
  project = $('.task_list_item__project', elem).textContent;

  var tags = () => Array.from($$(".task_list_item__info_tags__label", elem)).map(e => e.innerText);

  link = clockifyButton.createButton({
      description: description,
      projectName: project,
      small: true,
      tagNames: tags
  });
  link.style.paddingRight = "10px";
  link.style.marginTop = "12px";
  link.style.height = "fit-content";
  elem.prepend(link);
});

// // calendar
clockifyButton.render('.upcoming_view__list [data-action-hint="task-root"]:not(.clockify)', {observe: true}, function (elem) {
  description = $('.markdown_content.task_content', elem).textContent;
  project = $('.task_list_item__project', elem).textContent;
  var tags = () => Array.from($$(".task_list_item__info_tags__label", elem)).map(e => e.innerText);

  link = clockifyButton.createButton({
      description: description,
      projectName: project,
      small: true,
      tagNames: tags
  });
  link.style.paddingRight = "10px";
  link.style.marginTop = "12px";
  link.style.height = "fit-content";
  elem.prepend(link);
});

// filters
clockifyButton.render('.filter_view .task_list_item__body:not(.clockify)', {observe: true}, function (elem) {
  description = $('.markdown_content.task_content', elem).textContent;
  project = $('.task_list_item__project', elem).textContent;
  var tags = () => Array.from($$(".task_list_item__info_tags__label", elem)).map(e => e.innerText);

  link = clockifyButton.createButton({
      description: description,
      projectName: project,
      small: true,
      tagNames: tags
  });
  link.style.paddingRight = "10px";
  link.style.marginTop = "12px";
  link.style.height = "fit-content";
  elem.prepend(link);
});

clockifyButton.render('[data-testid="task-details-sidebar"] > div:not(.clockify)', {observe: true}, function (elem) {
  description = $('.task-overview-header > div > div.markdown_content.task_content').textContent;
  project = $('.task-overview-header > div > div.markdown_content.task_content').textContent;
  // var tags = () => Array.from($$(".task_list_item__info_tags__label")).map(e => e.innerText);

  link = clockifyButton.createButton({
      description: description,
      projectName: project,
      small: true,
      //tagNames: tags
  });

  const inputForm = clockifyButton.createInput({
    description: description,
    projectName: project
  });

  link.style.paddingRight = "10px";
  link.style.marginRight = "10px";
  link.style.height = "fit-content";
  elem.append(link);
  elem.append(inputForm);
});