/* HITech-AI 主题切换器 */
(function(){
  var THEMES = [
    { id: '',          name: '朱砂', color: '#cc785c' },
    { id: 'dai-blue',  name: '黛蓝', color: '#4a6fa5' },
    { id: 'tao-pink',  name: '桃夭', color: '#d4728a' },
    { id: 'qing-sky',  name: '天青', color: '#5a9eb5' },
    { id: 'zhu-green', name: '竹青', color: '#6b9e6b' },
    { id: 'qing-lotus',name: '青莲', color: '#8b6fb5' },
    { id: 'anber-amber',name: '琥珀', color: '#c48a3a' }
  ];

  function getTheme(){
    return localStorage.getItem('hitech-theme') || '';
  }

  function applyTheme(id){
    if (id) {
      document.documentElement.setAttribute('data-theme', id);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('hitech-theme', id);
    updateDotColor(id);
  }

  function updateDotColor(id){
    var t = THEMES.find(function(x){ return x.id === id; }) || THEMES[0];
    var dot = document.querySelector('.theme-dot');
    if (dot) dot.style.background = t.color;
  }

  function buildPanel(){
    var switcher = document.querySelector('.theme-switcher');
    if (!switcher) return;

    var panel = document.createElement('div');
    panel.className = 'theme-panel';
    panel.innerHTML = '<div class="tp-label">主题色</div><div class="tp-grid"></div>';

    var grid = panel.querySelector('.tp-grid');
    THEMES.forEach(function(t){
      var item = document.createElement('div');
      item.className = 'tp-item';
      item.setAttribute('data-theme-id', t.id);
      item.innerHTML = '<div class="tp-swatch" style="background:'+t.color+'"></div><div class="tp-name">'+t.name+'</div>';
      item.addEventListener('click', function(e){
        e.stopPropagation();
        applyTheme(t.id);
        panel.classList.remove('open');
      });
      grid.appendChild(item);
    });

    switcher.appendChild(panel);

    var dot = switcher.querySelector('.theme-dot');
    dot.addEventListener('click', function(e){
      e.stopPropagation();
      panel.classList.toggle('open');
    });

    document.addEventListener('click', function(){
      panel.classList.remove('open');
    });
  }

  function markActive(){
    var current = getTheme();
    document.querySelectorAll('.tp-item').forEach(function(item){
      if (item.getAttribute('data-theme-id') === current) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // 初始化
  var saved = getTheme();
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
  buildPanel();
  markActive();
  updateDotColor(saved);
})();
