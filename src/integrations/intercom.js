clockifyButton.render('.conversation__card__content-expanded__controls .inbox__conversation-controls__pane-selector:not(.clockify)', { observe: true }, function (elem) {
  if (elem.querySelector('.clockify-button')) {
    return;
  }

  const root = elem.closest('.card.conversation__card');
  const descriptionSelector = () => {
    const description = $('.inbox__card__header__title', root);
    return description ? description.textContent.trim().replace(/ +/g, ' ') : '';
  };

  const link = clockifyButton.createButton(descriptionSelector);
  link.style.paddingRight = '15px';

  link.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  elem.appendChild(link);
});

clockifyButton.render('.articles__editor__header-text:not(.clockify)', { observe: true }, function (elem) {
  const descriptionSelector = () => {
    const description = elem.textContent;
    return description ? description.trim() : '';
  };

  const link = clockifyButton.createSmallButton(descriptionSelector);
  link.style.margin = '3px 15px';

  elem.appendChild(link);
});