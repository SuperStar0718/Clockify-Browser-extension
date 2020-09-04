// Tasks listing page in project
clockifyButton.render(
  'div.taskRHS:not(.clockify), div.row-rightElements:not(.clockify)',
  { observe: true },
  function (elem) {
    let desc;
    let isTKO = false;
    const className = 'huh';
    let container = $('.taskIcons', elem);
    const project = $('.w-header-titles__project-name a').textContent.trim();

    if (container === null) {
      // check if TKO container is there
      container = $('.task-options', elem);
      isTKO = true;
      if (container === null) {
        // remove class so we re-check after async data is loaded
        elem.classList.remove('clockify');
        return;
      }
    }

    if ($('.taskName', elem) === null) {
      // check if TKO element is there
      if ($('p.task-name a', elem.parentElement) !== null) {
        desc = $('p.task-name a', elem.parentElement).textContent;
      } else {
        return;
      }
    } else {
      desc = $('.taskName', elem).textContent;
    }

    const link = clockifyButton.createButton({
      description: desc,
      projectName: project
    });

    if (isTKO) {
      // different behaviour in TKO
      link.classList.add('option');
    } else {
      link.classList.add(className);
      link.addEventListener('click', function () {
        // Run through and hide all others
        let i;
        let len;
        const elems = document.querySelectorAll('#clockifyButton');
        for (i = 0, len = elems.length; i < len; i += 1) {
          elems[i].classList.add('huh');
        }

        if (link.classList.contains(className)) {
          link.classList.remove(className);
        } else {
          link.classList.add(className);
        }
      });
    }

    const spanTag = document.createElement('span');
    spanTag.classList.add('clockify-span');
    link.style.width = 'auto';
    if (isTKO) {
      // different styling due to different layout in TKO
      link.style.paddingLeft = '25px';
      link.style.transform = 'scale(1)';
      link.style.fontSize = '13px';
      link.style.marginRight = '10px';
    } else {
      link.style.paddingLeft = '20px';
    }
    link.setAttribute('title', 'Clockify Timer');
    spanTag.appendChild(link);
    if (isTKO) {
      // need to use parent, some <a>'s can be nested e.g. HubSpot integration,
      // can't just use "unused icons" container as the layout has changed
      container.insertBefore(
        spanTag,
        container.parentElement.querySelector('.task-options > a:not(.active)')
      );
    } else {
      container.insertBefore(spanTag, container.lastChild);
    }
  }
);

// Teamwork Desk
clockifyButton.render(
  'section.inbox--body header.ticket--header:not(.clockify)',
  { observe: true },
  function (elem) {
    // ticket view
    const container = $('.title-label', elem);
    const id = $('.id-hold', elem).textContent;
    const description = $('a', elem).textContent;

    const descFunc = function () {
      return id.trim() + ' ' + description.trim();
    };

    const link = clockifyButton.createButton({
      small: true,
      description: descFunc
    });

    container.appendChild(link);
  }
);

// Teamwork Desk - new design 2019
clockifyButton.render(
  '.ticket-view-page__main-content:not(.clockify)',
  { observe: true },
  function (elem) {
    // ticket view
    const container = $('.title', elem);
    const id = $('.ticket-id', elem).textContent;
    const description = $('.title__subject', elem).textContent;

    const descFunc = function () {
      return id.trim() + ' ' + description.trim();
    };

    const link = clockifyButton.createButton({
      small: true,
      description: descFunc
    });

    link.style.margin = '3px 0 0 7px';

    container.appendChild(link);
  }
);

// Teamwork (July 2020)
clockifyButton.render(
  '.task-groupHold-wrapper .task-row .row-content-holder:not(.clockify), .s-project-task__tasklist .row-content-holder:not(.clockify)',
  { observe: true },
  function (root) {
    const getNameHolder = () => root.querySelector('.w-task-row__name > a');

    if (!getNameHolder()) { return; }

    const link = clockifyButton.createButton({
      small: true,
      description: () => getNameHolder().textContent.trim(),
      projectName: () => {
        const nameElement = $('.w-header-titles__project-name a');
        return nameElement ? nameElement.textContent.trim() : '';
      }
    });

    Object.assign(link.style, {
      backgroundSize: '16px',
    });

    link.setAttribute('data-content', 'Clockify Timer');

    link.classList.add(
      'w-task-row__option',
      'integration--hide',
      'tipped-delegate',
      'show-on-mouseenter');

    root.appendChild(link);
  }
);