(function () {
  var PAGE = 12;
  var lang = localStorage.getItem('bellarulox-lang') === 'en' ? 'en' : 'es';
  var state = { where: 'all', contact: 'all', pay: 'all', language: 'all', query: '', page: 1 };
  var items = [];

  var copy = {
    es: {
      where: 'Dónde', all: 'Todas', remote: 'Remoto', place: 'Presencial o híbrido',
      contact: 'Contacto', dm: 'Pide mensaje directo', post: 'Solo el post',
      pay: 'Remuneración', yes: 'Mencionada', no: 'No mencionada',
      language: 'Idioma', es: 'Español', en: 'Inglés',
      search: 'Buscar por resumen, remuneración o autor',
      of: 'de', clear: 'Quitar filtros', empty: 'Nada coincide con este filtro.',
      original: 'Publicación original', threads: 'Ver en Threads',
      updated: 'Última actualización', prev: 'Anterior', next: 'Siguiente',
      message: 'Pide mensaje'
    },
    en: {
      where: 'Where', all: 'All', remote: 'Remote', place: 'On-site or hybrid',
      contact: 'Contact', dm: 'Asks for a direct message', post: 'Post only',
      pay: 'Pay', yes: 'Mentioned', no: 'Not mentioned',
      language: 'Language', es: 'Spanish', en: 'English',
      search: 'Search by summary, pay or author',
      of: 'of', clear: 'Clear filters', empty: 'Nothing matches this filter.',
      original: 'Original post', threads: 'View on Threads',
      updated: 'Last update', prev: 'Previous', next: 'Next',
      message: 'Asks for a message'
    }
  };

  function t(key) { return copy[lang][key]; }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-es]').forEach(function (node) {
      node.textContent = node.getAttribute(lang === 'en' ? 'data-en' : 'data-es');
    });
    document.getElementById('lang-es').setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
    document.getElementById('lang-en').setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    document.getElementById('q').placeholder = t('search');
    localStorage.setItem('bellarulox-lang', lang);
    render();
  }

  function setLang(next) {
    lang = next;
    applyLang();
  }

  function formatDate(value) {
    var parts = value.split('-').map(Number);
    if (!parts[0]) return value;
    return new Intl.DateTimeFormat(lang === 'en' ? 'en' : 'es', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(parts[0], parts[1] - 1, parts[2]));
  }

  function matches(item) {
    if (state.where === 'remote' && !item.remote) return false;
    if (state.where === 'place' && item.remote) return false;
    if (state.contact === 'dm' && !item.dm) return false;
    if (state.contact === 'post' && item.dm) return false;
    var mentioned = (item.pay || '').trim().length > 0;
    if (state.pay === 'yes' && !mentioned) return false;
    if (state.pay === 'no' && mentioned) return false;
    if (state.language !== 'all' && item.language !== state.language) return false;
    var needle = state.query.trim().toLowerCase();
    if (!needle) return true;
    return (item.title + ' ' + item.original + ' ' + (item.bullets || []).join(' ') + ' ' + item.pay + ' ' + item.author).toLowerCase().indexOf(needle) !== -1;
  }

  function chip(label, active, onClick) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip' + (active ? ' on' : '');
    button.textContent = label;
    button.addEventListener('click', onClick);
    return button;
  }

  function group(id, label, options, key) {
    var row = document.getElementById(id);
    row.innerHTML = '';
    var name = document.createElement('span');
    name.className = 'label';
    name.textContent = label;
    row.appendChild(name);
    options.forEach(function (option) {
      row.appendChild(chip(option.label, state[key] === option.value, function () {
        state[key] = option.value;
        state.page = 1;
        render();
      }));
    });
  }

  function escape(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function render() {
    var visible = items.filter(matches);
    var languages = [];
    items.forEach(function (item) {
      if (languages.indexOf(item.language) === -1) languages.push(item.language);
    });
    group('where', t('where'), [
      { value: 'all', label: t('all') },
      { value: 'remote', label: t('remote') },
      { value: 'place', label: t('place') }
    ], 'where');
    group('contact', t('contact'), [
      { value: 'all', label: t('all') },
      { value: 'dm', label: t('dm') },
      { value: 'post', label: t('post') }
    ], 'contact');
    group('pay', t('pay'), [
      { value: 'all', label: t('all') },
      { value: 'yes', label: t('yes') },
      { value: 'no', label: t('no') }
    ], 'pay');
    group('language', t('language'), [{ value: 'all', label: t('all') }].concat(languages.map(function (code) {
      return { value: code, label: t(code) || code };
    })), 'language');

    var latest = items.reduce(function (max, item) { return item.date > max ? item.date : max; }, items[0] ? items[0].date : '');
    document.getElementById('updated').textContent = latest ? t('updated') + ': ' + formatDate(latest) : '';
    document.getElementById('count').textContent = visible.length + ' ' + t('of') + ' ' + items.length;
    var filtersOn = state.where !== 'all' || state.contact !== 'all' || state.pay !== 'all' || state.language !== 'all' || state.query.trim() !== '';
    var clear = document.getElementById('clear');
    clear.hidden = !filtersOn;
    clear.textContent = t('clear');

    var pages = Math.max(1, Math.ceil(visible.length / PAGE));
    if (state.page > pages) state.page = pages;
    var shown = visible.slice((state.page - 1) * PAGE, state.page * PAGE);
    var list = document.getElementById('lista');
    if (!visible.length) {
      list.innerHTML = '<article class="card empty"><h2>' + escape(t('empty')) + '</h2><button type="button" class="clear" id="clear-empty">' + escape(t('clear')) + '</button></article>';
      var emptyClear = document.getElementById('clear-empty');
      if (emptyClear) emptyClear.addEventListener('click', reset);
    } else {
      list.innerHTML = shown.map(function (item) {
        var bullets = (item.bullets || []).join(' ') === item.title ? [] : (item.bullets || []);
        return '<article class="card job">' +
          '<div class="tags"><span class="tag-soft">' + escape(t(item.language) || item.language) + '</span>' +
          '<span class="' + (item.remote ? 'tag-aqua' : 'tag-gray') + '">' + escape(item.remote ? t('remote') : t('place')) + '</span>' +
          (item.dm ? '<span class="tag-gray">' + escape(t('message')) + '</span>' : '') +
          '</div><h2>' + escape(item.title) + '</h2>' +
          (item.pay ? '<p class="pay">' + escape(item.pay) + '</p>' : '') +
          (bullets.length ? '<ul>' + bullets.map(function (line) { return '<li>' + escape(line) + '</li>'; }).join('') + '</ul>' : '') +
          '<div class="original"><span class="label">' + escape(t('original')) + '</span><p>' + escape(item.original) + '</p></div>' +
          '<p class="meta">@' + escape(item.author) + ' · ' + escape(formatDate(item.date)) + '</p>' +
          '<a class="btn btn-fuchsia btn-sm" href="' + escape(item.url) + '" target="_blank" rel="noopener noreferrer">' + escape(t('threads')) + '</a>' +
          '</article>';
      }).join('');
    }

    var nav = document.getElementById('pages');
    nav.innerHTML = '';
    nav.hidden = visible.length === 0;
    if (!visible.length) return;
    nav.appendChild(pageButton(t('prev'), state.page === 1, function () { go(state.page - 1); }));
    for (var number = 1; number <= pages; number++) {
      nav.appendChild(pageButton(String(number), false, function (value) { return function () { go(value); }; }(number), number === state.page));
    }
    nav.appendChild(pageButton(t('next'), state.page === pages, function () { go(state.page + 1); }));
  }

  function pageButton(label, disabled, onClick, current) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.disabled = disabled;
    if (current) button.setAttribute('aria-current', 'page');
    button.addEventListener('click', onClick);
    return button;
  }

  function go(next) {
    state.page = next;
    render();
    document.getElementById('lista').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function reset() {
    state.where = 'all';
    state.contact = 'all';
    state.pay = 'all';
    state.language = 'all';
    state.query = '';
    state.page = 1;
    document.getElementById('q').value = '';
    render();
  }

  document.getElementById('lang-es').addEventListener('click', function () { setLang('es'); });
  document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });
  document.getElementById('clear').addEventListener('click', reset);
  document.getElementById('q').addEventListener('input', function (event) {
    state.query = event.target.value;
    state.page = 1;
    render();
  });
  document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('open');
  });

  fetch('/hiring/ofertas.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      var blocked = ['kelvin716421', 'dinosaur.26504284', 'ria_4653371', 'cheetah.28049471', 'sandk1233', 'kevin8184431', 'alex5382552', 'd12138262', 'jerry.59938014', 'panda.37331008', 'lindas56499', 'baddgalmimi97__', 'mathew85839', 'recruiter67643'];
      items = data.filter(function (item) { return ['ms', 'vi', 'id'].indexOf(item.language) === -1 && blocked.indexOf(item.author) === -1; });
      applyLang();
    });
})();
