/* HITech-AI 主题切换器：风格 + 配色 */
(function(){
  var STYLES = [
    { id: '',         name: '莫兰迪', preview: 'linear-gradient(135deg,#faf9f5 60%,#cc785c 60%)' },
    { id: 'swiss',    name: '瑞士极简', preview: 'linear-gradient(135deg,#ffffff 60%,#111 60%)' },
    { id: 'terminal', name: '终端极客', preview: 'linear-gradient(135deg,#0d1117 60%,#3fb950 60%)' },
    { id: 'dark',     name: '暗黑模式', preview: 'linear-gradient(135deg,#181715 60%,#cc785c 60%)' }
  ];

  var COLORS = [
    { id: '',          name: '朱砂', color: '#cc785c' },
    { id: 'dai-blue',  name: '黛蓝', color: '#4a6fa5' },
    { id: 'tao-pink',  name: '桃夭', color: '#d4728a' },
    { id: 'qing-sky',  name: '天青', color: '#5a9eb5' },
    { id: 'zhu-green', name: '竹青', color: '#6b9e6b' },
    { id: 'qing-lotus',name: '青莲', color: '#8b6fb5' },
    { id: 'anber-amber',name: '琥珀', color: '#c48a3a' }
  ];

  function getStyle(){ return localStorage.getItem('hitech-style') || ''; }
  function getColor(){ return localStorage.getItem('hitech-theme') || ''; }

  function applyStyle(id){
    if (id) {
      document.documentElement.setAttribute('data-style', id);
    } else {
      document.documentElement.removeAttribute('data-style');
    }
    localStorage.setItem('hitech-style', id);
    markActive();
  }

  function applyColor(id){
    if (id) {
      document.documentElement.setAttribute('data-theme', id);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('hitech-theme', id);
    updateDotColor();
    markActive();
  }

  function updateDotColor(){
    var style = getStyle();
    var color = getColor();
    var dot = document.querySelector('.theme-dot');
    if (!dot) return;

    // 终端风格下用终端色板
    if (style === 'terminal') {
      var termColors = { '': '#3fb950', 'dai-blue': '#58a6ff', 'tao-pink': '#f778ba', 'qing-sky': '#39d2c0', 'zhu-green': '#3fb950', 'qing-lotus': '#bc8cff', 'anber-amber': '#d29922' };
      dot.style.background = termColors[color] || '#3fb950';
    } else {
      var c = COLORS.find(function(x){ return x.id === color; }) || COLORS[0];
      dot.style.background = c.color;
    }
  }

  function markActive(){
    var s = getStyle();
    var c = getColor();
    document.querySelectorAll('[data-style-id]').forEach(function(el){
      el.classList.toggle('active', el.getAttribute('data-style-id') === s);
    });
    document.querySelectorAll('[data-color-id]').forEach(function(el){
      el.classList.toggle('active', el.getAttribute('data-color-id') === c);
    });
  }

  function buildPanel(){
    var switcher = document.querySelector('.theme-switcher');
    if (!switcher) return;

    var panel = document.createElement('div');
    panel.className = 'theme-panel';
    panel.innerHTML =
      '<div class="tp-section">' +
        '<div class="tp-label">风格</div>' +
        '<div class="tp-grid"></div>' +
      '</div>' +
      '<div class="tp-divider"></div>' +
      '<div class="tp-section">' +
        '<div class="tp-label">配色</div>' +
        '<div class="tp-grid colors"></div>' +
      '</div>';

    // 风格
    var styleGrid = panel.querySelector('.tp-grid:not(.colors)');
    STYLES.forEach(function(s){
      var item = document.createElement('div');
      item.className = 'tp-item';
      item.setAttribute('data-style-id', s.id);
      item.innerHTML =
        '<div class="tp-preview" style="background:' + s.preview + '"></div>' +
        '<div class="tp-name">' + s.name + '</div>';
      item.addEventListener('click', function(e){
        e.stopPropagation();
        applyStyle(s.id);
      });
      styleGrid.appendChild(item);
    });

    // 配色
    var colorGrid = panel.querySelector('.tp-grid.colors');
    COLORS.forEach(function(c){
      var item = document.createElement('div');
      item.className = 'tp-item';
      item.setAttribute('data-color-id', c.id);
      item.innerHTML =
        '<div class="tp-swatch" style="background:' + c.color + '"></div>' +
        '<div class="tp-name">' + c.name + '</div>';
      item.addEventListener('click', function(e){
        e.stopPropagation();
        applyColor(c.id);
      });
      colorGrid.appendChild(item);
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

  // 初始化
  var savedStyle = getStyle();
  var savedColor = getColor();
  if (savedStyle) document.documentElement.setAttribute('data-style', savedStyle);
  if (savedColor) document.documentElement.setAttribute('data-theme', savedColor);
  buildPanel();
  markActive();
  updateDotColor();
})();
