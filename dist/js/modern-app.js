/**
 * Macle OpenDoc — Modern Documentation Engine
 * Complete client-side controller supporting:
 * - 100% Mobile Responsive Layout & Touch-Friendly Interactions
 * - Light / Dark / System themes with zero flash
 * - Responsive 3-column layout (Desktop) / Slide-over Drawer + Sub-nav (Mobile)
 * - Auto Table Horizontal-Scroll Wrappers (Prevents overflow on mobile)
 * - Command palette search (Cmd+K / Ctrl+K)
 * - Auto-extracted Table of Contents with Scrollspy
 * - Breadcrumbs, heading anchors, next/previous pagination
 * - Dual language (en_US / zh_CN)
 * - 100% compatibility with existing hash routes & Doc Runner Web Simulator
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Constants & State
  // ---------------------------------------------------------------------------
  const BASE_URL = '/openplatform/macledocs';
  
  const state = {
    locale: 'en_US',
    themePreference: 'system', // 'light' | 'dark' | 'system'
    topMenus: [],
    currentTopMenu: null,
    currentLeftMenuData: [],
    flattenedPages: [],
    currentLeaf: null,
    currentDocHtml: '',
    searchIndex: [],
    searchQuery: '',
    searchResults: [],
    selectedSearchIndex: 0,
    sidebarFilter: '',
    mobileDrawerOpen: false,
    themeMenuOpen: false
  };

  // SVG Icons
  const ICONS = {
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
    laptop: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    chevronDown: '<svg class="docs-nav-chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
    hamburger: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    toc: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
  };

  // Helper: insert language tag in URL for English
  function calcTagLangUrl(url, lang, index, removeCount) {
    const parts = url.split('/');
    if (index > 0 && index < parts.length) {
      if (removeCount === 0) {
        parts.splice(index, 0, lang);
      } else {
        parts.splice(index, removeCount);
      }
    } else {
      parts.push(lang);
    }
    return parts.join('/');
  }

  // ---------------------------------------------------------------------------
  // 2. Theme Manager
  // ---------------------------------------------------------------------------
  const ThemeManager = {
    init() {
      const saved = localStorage.getItem('macle_docs_theme_pref') || 'system';
      this.setPreference(saved, false);

      // Listen to OS changes when in system mode
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (state.themePreference === 'system') {
          this.applyResolvedTheme();
        }
      });
    },

    setPreference(pref, save = true) {
      state.themePreference = pref;
      if (save) {
        localStorage.setItem('macle_docs_theme_pref', pref);
      }
      this.applyResolvedTheme();
      this.updateThemeMenuUI();
    },

    applyResolvedTheme() {
      let resolved = state.themePreference;
      if (resolved === 'system') {
        const darkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
        resolved = darkOS ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', resolved);
      
      // Update theme button icon
      const btn = document.getElementById('docs-theme-toggle-btn');
      if (btn) {
        if (state.themePreference === 'system') {
          btn.innerHTML = ICONS.laptop;
          btn.title = `Theme: System (${resolved})`;
        } else if (state.themePreference === 'dark') {
          btn.innerHTML = ICONS.moon;
          btn.title = 'Theme: Dark';
        } else {
          btn.innerHTML = ICONS.sun;
          btn.title = 'Theme: Light';
        }
      }
    },

    updateThemeMenuUI() {
      const options = document.querySelectorAll('.docs-theme-option');
      options.forEach(opt => {
        const theme = opt.dataset.theme;
        opt.classList.toggle('active', theme === state.themePreference);
      });
    }
  };

  // ---------------------------------------------------------------------------
  // 3. Locale & URL Router
  // ---------------------------------------------------------------------------
  const Router = {
    getLocaleFromUrl() {
      // 1. Check window.location.search (?locale=zh_CN)
      const searchParams = new URLSearchParams(window.location.search);
      let loc = searchParams.get('locale');
      if (loc === 'zh_CN' || loc === 'en_US') return loc;

      // 2. Check hash query string (e.g. #/component/button?locale=zh_CN)
      const hash = window.location.hash || '';
      if (hash.includes('?')) {
        const hashQuery = new URLSearchParams(hash.split('?')[1]);
        loc = hashQuery.get('locale');
        if (loc === 'zh_CN' || loc === 'en_US') return loc;
      }

      return 'en_US';
    },

    init() {
      state.locale = this.getLocaleFromUrl();
      document.title = state.locale === 'zh_CN' 
        ? 'Macle 开放文档 — Telebirr 小程序开发平台' 
        : 'Macle Open Platform — Official Developer Documentation for Telebirr MiniApps';

      // Global link handler for internal links inside markdown
      window._mdLinkClick = (href) => {
        if (!href) return false;
        const hashIndex = href.indexOf('#');
        if (hashIndex !== -1) {
          const targetHash = href.substring(hashIndex);
          window.location.hash = targetHash;
        } else {
          window.location.href = href;
        }
        return false;
      };

      window.addEventListener('hashchange', () => {
        this.handleHashChange();
      });
    },

    parseHash() {
      // 1. Check query parameter first (e.g. ?page=/component/button or ?path=/component/button)
      const searchParams = new URLSearchParams(window.location.search);
      const queryPage = searchParams.get('page') || searchParams.get('path');

      let targetPath = '';
      if (queryPage) {
        targetPath = queryPage;
      } else {
        const hash = window.location.hash || '';
        targetPath = hash.replace(/^#\/?/, '').split('?')[0];
      }

      if (!targetPath) {
        return { topPath: '/guide', subPath: '/installDevtool' };
      }

      const parts = targetPath.replace(/^\//, '').split('/');
      const topPath = '/' + (parts[0] || 'guide');
      const subPath = parts.length > 1 ? '/' + parts.slice(1).join('/') : '';
      return { topPath, subPath };
    },

    async handleHashChange() {
      const urlLocale = this.getLocaleFromUrl();
      if (urlLocale !== state.locale) {
        state.locale = urlLocale;
        await Navigation.loadTopMenus();
        return;
      }

      const { topPath, subPath } = this.parseHash();

      // Check if top section changed
      if (!state.currentTopMenu || state.currentTopMenu.path !== topPath) {
        const matchingTop = state.topMenus.find(m => m.path === topPath) || state.topMenus[0];
        if (matchingTop) {
          state.currentTopMenu = matchingTop;
          Navigation.updateTopNavActive();
          await Navigation.loadLeftMenu(matchingTop, subPath);
          return;
        }
      }

      // If top menu is the same, select matching page in left menu
      if (subPath) {
        Navigation.selectLeafByPath(subPath);
      }
    },

    switchLocale() {
      const newLocale = state.locale === 'en_US' ? 'zh_CN' : 'en_US';
      const url = new URL(window.location.href);
      url.searchParams.set('locale', newLocale);
      window.location.href = url.toString();
    }
  };

  // ---------------------------------------------------------------------------
  // 4. Navigation & Sidebar Manager
  // ---------------------------------------------------------------------------
  const Navigation = {
    async loadTopMenus() {
      const isZh = state.locale === 'zh_CN';
      const topMenuUrl = isZh
        ? `${BASE_URL}/data/menu/top/index.json`
        : `${BASE_URL}/data/menu/top/en/index.json`;

      try {
        const res = await fetch(topMenuUrl);
        state.topMenus = await res.json();
        this.renderTopNav();

        // Build global search index in background
        Search.buildIndex();

        // Handle initial hash
        await Router.handleHashChange();
      } catch (err) {
        console.error('Failed to load top menu:', err);
      }
    },

    renderTopNav() {
      const desktopNav = document.getElementById('docs-top-nav');
      const mobileNav = document.getElementById('docs-mobile-top-nav');
      
      const renderLinks = () => state.topMenus.map(menu => {
        const isActive = state.currentTopMenu && state.currentTopMenu.path === menu.path;
        return `
          <a class="docs-nav-link ${isActive ? 'active' : ''}" 
             data-path="${menu.path}" 
             href="#${menu.path}">
            ${menu.name}
          </a>
        `;
      }).join('');

      if (desktopNav) desktopNav.innerHTML = renderLinks();
      if (mobileNav) mobileNav.innerHTML = renderLinks();

      const attachHandlers = (container) => {
        if (!container) return;
        container.querySelectorAll('.docs-nav-link').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.dataset.path;
            const target = state.topMenus.find(m => m.path === path);
            if (target) {
              state.currentTopMenu = target;
              this.updateTopNavActive();
              this.loadLeftMenu(target);
            }
          });
        });
      };

      attachHandlers(desktopNav);
      attachHandlers(mobileNav);
    },

    updateTopNavActive() {
      const updateList = (selector) => {
        document.querySelectorAll(selector).forEach(link => {
          const isActive = state.currentTopMenu && state.currentTopMenu.path === link.dataset.path;
          link.classList.toggle('active', isActive);
          if (isActive && selector.includes('mobile')) {
            // Scroll active pill into view on mobile
            link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }
        });
      };

      updateList('#docs-top-nav .docs-nav-link');
      updateList('#docs-mobile-top-nav .docs-nav-link');
    },

    async loadLeftMenu(topMenu, targetSubPath = null) {
      try {
        const leftMenuUrl = `${BASE_URL}${topMenu.data}`;
        const res = await fetch(leftMenuUrl);
        const data = await res.json();
        state.currentLeftMenuData = data;

        // Flatten leaves for pagination (Next / Previous) and lookup
        state.flattenedPages = [];
        this.flattenMenu(data, [topMenu.name]);

        this.renderSidebar();

        // Select leaf page
        let leafToOpen = null;
        if (targetSubPath) {
          leafToOpen = state.flattenedPages.find(p => p.path === targetSubPath);
        }
        if (!leafToOpen && state.flattenedPages.length > 0) {
          leafToOpen = state.flattenedPages[0];
        }

        if (leafToOpen) {
          this.selectLeaf(leafToOpen);
        }
      } catch (err) {
        console.error('Failed to load left menu:', err);
      }
    },

    flattenMenu(nodes, parentNames) {
      for (const node of nodes) {
        if (node.child) {
          this.flattenMenu(node.child, [...parentNames, node.name]);
        } else if (node.path && node.data) {
          state.flattenedPages.push({
            name: node.name,
            path: node.path,
            url: node.data,
            parent: parentNames,
            topPath: state.currentTopMenu.path
          });
        }
      }
    },

    renderSidebar() {
      const container = document.getElementById('docs-sidebar-nav');
      if (!container) return;

      const filter = (state.sidebarFilter || '').toLowerCase().trim();

      let html = '';
      state.currentLeftMenuData.forEach((group, gIdx) => {
        let children = group.child || [];
        if (filter) {
          children = this.filterMenuTree(children, filter);
          if (children.length === 0 && !group.name.toLowerCase().includes(filter)) {
            return;
          }
        }

        html += `
          <div class="docs-nav-group" id="nav-group-${gIdx}">
            <div class="docs-nav-group-header" data-group="${gIdx}">
              <span>${group.name}</span>
              ${children.length > 0 ? ICONS.chevronDown : ''}
            </div>
            <div class="docs-nav-items">
              ${this.renderSidebarNodes(children, gIdx)}
            </div>
          </div>
        `;
      });

      if (!html.trim()) {
        html = `<div style="padding: 20px 8px; color: var(--docs-text-muted); font-size: 13px;">No matching topics</div>`;
      }

      container.innerHTML = html;

      // Attach group collapse/expand toggles
      container.querySelectorAll('.docs-nav-group-header').forEach(hdr => {
        hdr.addEventListener('click', () => {
          const grp = hdr.closest('.docs-nav-group');
          grp.classList.toggle('collapsed');
        });
      });

      // Attach leaf click listeners
      container.querySelectorAll('.docs-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const path = item.dataset.path;
          const leaf = state.flattenedPages.find(p => p.path === path);
          if (leaf) {
            this.selectLeaf(leaf);
            // On mobile, close drawer after selection
            if (window.innerWidth <= 868) {
              App.closeMobileDrawer();
            }
          }
        });
      });
    },

    filterMenuTree(nodes, query) {
      const matched = [];
      for (const node of nodes) {
        if (node.child) {
          const filteredSub = this.filterMenuTree(node.child, query);
          if (filteredSub.length > 0 || node.name.toLowerCase().includes(query)) {
            matched.push({ ...node, child: filteredSub });
          }
        } else if (node.name.toLowerCase().includes(query) || (node.path && node.path.toLowerCase().includes(query))) {
          matched.push(node);
        }
      }
      return matched;
    },

    renderSidebarNodes(nodes, gIdx, level = 0) {
      let html = '';
      for (const node of nodes) {
        if (node.child && node.child.length > 0) {
          html += `
            <div class="docs-nav-subgroup">
              <div class="docs-nav-subgroup-title">${node.name}</div>
              ${this.renderSidebarNodes(node.child, gIdx, level + 1)}
            </div>
          `;
        } else if (node.path) {
          const isActive = state.currentLeaf && state.currentLeaf.path === node.path;
          html += `
            <a class="docs-nav-item ${isActive ? 'active' : ''}" 
               data-path="${node.path}" 
               href="#${state.currentTopMenu.path}${node.path}">
              <span>${node.name}</span>
            </a>
          `;
        }
      }
      return html;
    },

    selectLeafByPath(subPath) {
      const leaf = state.flattenedPages.find(p => p.path === subPath);
      if (leaf) {
        this.selectLeaf(leaf);
      }
    },

    selectLeaf(leaf) {
      state.currentLeaf = leaf;

      // Update sidebar active highlights
      document.querySelectorAll('#docs-sidebar-nav .docs-nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.path === leaf.path);
      });

      // Update URL hash smoothly without reload
      const expectedHash = `#${leaf.topPath}${leaf.path}?locale=${state.locale}`;
      if (window.location.hash !== expectedHash) {
        history.replaceState(null, '', expectedHash);
      }

      // Load and render document content
      DocRenderer.loadDoc(leaf);
    }
  };

  // ---------------------------------------------------------------------------
  // 5. Document Content & Table of Contents (TOC) Renderer
  // ---------------------------------------------------------------------------
  const DocRenderer = {
    async loadDoc(leaf) {
      const isZh = state.locale === 'zh_CN';
      const cleanUrl = leaf.url.replace(/\.md$/, '.html');
      
      // Calculate final HTML file URL
      const docHtmlUrl = isZh
        ? `${BASE_URL}${cleanUrl}`
        : `${BASE_URL}${calcTagLangUrl(cleanUrl, 'en', 3, 0)}`;

      try {
        const res = await fetch(docHtmlUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const html = await res.text();
        state.currentDocHtml = html;
        this.renderDoc(leaf, html);
      } catch (err) {
        console.error('Failed to load document content:', err);
        const article = document.getElementById('docs-markdown-body');
        if (article) {
          article.innerHTML = `
            <div style="padding: 40px 0;">
              <h1>Documentation Not Found</h1>
              <p>The requested document <code>${docHtmlUrl}</code> could not be loaded.</p>
            </div>
          `;
        }
      }
    },

    renderDoc(leaf, html) {
      const article = document.getElementById('docs-markdown-body');
      if (!article) return;

      // 1. Inject HTML into markdown body
      article.innerHTML = html;

      // 2. Wrap all <table> elements with responsive horizontal-scroll container
      article.querySelectorAll('table').forEach(table => {
        if (!table.parentElement.classList.contains('docs-table-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'docs-table-wrapper';
          table.parentNode.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }
      });

      // 3. Image SEO: ensure meaningful alt and lazy loading
      article.querySelectorAll('img').forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', `${leaf.name || 'Macle'} - Telebirr MiniApp documentation diagram`);
        }
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });

      // 4. Render Semantic Breadcrumbs with Schema.org microdata
      this.renderBreadcrumbs(leaf);

      // 5. Process headings & Build Table of Contents
      this.processHeadingsAndTOC();

      // 6. Render Previous / Next Page Pager
      this.renderPager(leaf);

      // 7. Dynamic SEO Updates (Title, Description, Canonical, OG, Twitter, JSON-LD)
      SEOManager.updatePageSEO(leaf, html);

      // 8. Scroll main view back to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // 9. Notify Doc Runner to attach runnable toolbars & code simulator buttons
      if (window.initDocRunner) {
        window.initDocRunner();
      }
    },

    renderBreadcrumbs(leaf) {
      const breadcrumbEl = document.getElementById('docs-breadcrumbs');
      if (!breadcrumbEl) return;

      const sectionName = state.currentTopMenu?.name || 'Documentation';
      const items = ['Docs', sectionName, ...(leaf.parent || []), leaf.name];

      breadcrumbEl.innerHTML = `
        <ol class="docs-breadcrumb-list" style="display: flex; align-items: center; gap: 6px; list-style: none; padding: 0; margin: 0; flex-wrap: wrap;" itemscope itemtype="https://schema.org/BreadcrumbList">
          ${items.map((item, idx) => `
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" style="display: inline-flex; align-items: center;">
              ${idx > 0 ? `<span class="docs-breadcrumb-separator" style="margin-right: 6px;">/</span>` : ''}
              <span itemprop="name" class="${idx === items.length - 1 ? 'docs-breadcrumb-current' : 'docs-breadcrumb-item'}">${item}</span>
              <meta itemprop="position" content="${idx + 1}" />
            </li>
          `).join('')}
        </ol>
      `;
    },

    processHeadingsAndTOC() {
      const article = document.getElementById('docs-markdown-body');
      const tocSidebar = document.getElementById('docs-toc-sidebar');
      const tocList = document.getElementById('docs-toc-list');
      if (!article || !tocList || !tocSidebar) return;

      const headings = Array.from(article.querySelectorAll('h2, h3'));
      if (headings.length === 0) {
        tocSidebar.style.display = 'none';
        return;
      }
      tocSidebar.style.display = '';

      let tocHtml = '';
      headings.forEach((heading, idx) => {
        // Ensure heading has an ID
        if (!heading.id) {
          heading.id = 'heading-' + idx + '-' + heading.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }

        // Add anchor icon to heading if not present
        if (!heading.querySelector('.docs-heading-anchor')) {
          const anchor = document.createElement('a');
          anchor.className = 'docs-heading-anchor';
          anchor.href = `#${heading.id}`;
          anchor.innerHTML = ICONS.link;
          anchor.title = 'Copy anchor link';
          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(window.location.origin + window.location.pathname + window.location.hash.split('#')[0] + '#' + heading.id);
            heading.scrollIntoView({ behavior: 'smooth' });
          });
          heading.appendChild(anchor);
        }

        const isH3 = heading.tagName.toLowerCase() === 'h3';
        const cleanTitle = heading.innerText.replace('#', '').trim();
        tocHtml += `
          <li class="docs-toc-item">
            <a class="docs-toc-link ${isH3 ? 'depth-3' : ''}" 
               data-target="${heading.id}" 
               href="#${heading.id}">
              ${cleanTitle}
            </a>
          </li>
        `;
      });

      tocList.innerHTML = tocHtml;

      // Click handler for smooth scrolling
      tocList.querySelectorAll('.docs-toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const id = link.dataset.target;
          const targetEl = document.getElementById(id);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', `#${id}`);
          }
        });
      });

      // ScrollSpy: highlight active TOC item as user scrolls
      this.initScrollSpy(headings);
    },

    initScrollSpy(headings) {
      if (window._tocObserver) {
        window._tocObserver.disconnect();
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('#docs-toc-list .docs-toc-link').forEach(link => {
              link.classList.toggle('active', link.dataset.target === id);
            });
          }
        });
      }, {
        rootMargin: '-60px 0px -70% 0px',
        threshold: 0
      });

      headings.forEach(h => observer.observe(h));
      window._tocObserver = observer;
    },

    renderPager(currentLeaf) {
      const footerEl = document.getElementById('docs-page-footer');
      if (!footerEl) return;

      const idx = state.flattenedPages.findIndex(p => p.path === currentLeaf.path);
      const prevPage = idx > 0 ? state.flattenedPages[idx - 1] : null;
      const nextPage = idx >= 0 && idx < state.flattenedPages.length - 1 ? state.flattenedPages[idx + 1] : null;

      footerEl.innerHTML = `
        <div class="docs-pager">
          ${prevPage ? `
            <a class="docs-pager-card prev" href="#${prevPage.topPath}${prevPage.path}" data-path="${prevPage.path}">
              <span class="docs-pager-label">← ${state.locale === 'zh_CN' ? '上一节' : 'Previous Topic'}</span>
              <span class="docs-pager-title">${prevPage.name}</span>
            </a>
          ` : '<div></div>'}
          
          ${nextPage ? `
            <a class="docs-pager-card next" href="#${nextPage.topPath}${nextPage.path}" data-path="${nextPage.path}">
              <span class="docs-pager-label">${state.locale === 'zh_CN' ? '下一节' : 'Next Topic'} →</span>
              <span class="docs-pager-title">${nextPage.name}</span>
            </a>
          ` : '<div></div>'}
        </div>

        <div class="docs-meta-footer">
          <div>© ${new Date().getFullYear()} Macle Open Platform. Built for developers.</div>
          <div>
            <a class="docs-meta-link" href="https://github.com/macle-community" target="_blank" rel="noopener">
              ${ICONS.github} GitHub Community
            </a>
          </div>
        </div>
      `;

      // Attach click handlers to pager links
      footerEl.querySelectorAll('.docs-pager-card').forEach(card => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          const targetPath = card.dataset.path;
          const targetLeaf = state.flattenedPages.find(p => p.path === targetPath);
          if (targetLeaf) {
            Navigation.selectLeaf(targetLeaf);
          }
        });
      });
    }
  };

  // ---------------------------------------------------------------------------
  // 6. Dynamic SEO & Structured Data Manager
  // ---------------------------------------------------------------------------
  const SEOManager = {
    updatePageSEO(leaf, docHtml) {
      if (!leaf) return;

      const section = state.currentTopMenu?.name || 'Documentation';
      const leafName = leaf.name || 'Doc';
      const isZh = state.locale === 'zh_CN';

      // 1. Dynamic Page Title
      const pageTitle = isZh
        ? `${leafName} - ${section} | Macle 官方文档 (Telebirr 小程序平台)`
        : `${leafName} — ${section} | Macle Docs (Telebirr MiniApp Platform)`;
      document.title = pageTitle;

      // 2. Extract or Generate Search Description
      let description = '';
      if (docHtml) {
        const tmp = document.createElement('div');
        tmp.innerHTML = docHtml;
        const firstP = tmp.querySelector('p, blockquote');
        if (firstP) {
          description = firstP.textContent.replace(/\s+/g, ' ').trim();
        }
      }

      const telebirrSnippet = isZh
        ? `Telebirr 小程序官方开发文档。使用 Macle 原生 MAML 与 Taro React 快速构建。`
        : `Official documentation for developing Telebirr SuperApp MiniApps with Macle framework.`;

      if (!description || description.length < 20) {
        description = `${leafName} (${section}) - ${telebirrSnippet}`;
      } else {
        description = `${description} - ${telebirrSnippet}`;
      }

      if (description.length > 160) {
        description = description.slice(0, 157) + '...';
      }

      // 3. Dynamic Canonical URL
      const canonicalUrl = `https://macle-opendoc.vercel.app/openplatform/macledocs/#${state.currentTopMenu?.path || ''}${leaf.path || ''}?locale=${state.locale}`;

      // 4. Update Meta Tags
      this.setMeta('description', description);
      this.setMeta('keywords', `Telebirr miniapp, Telebirr mini program, Macle docs, ${leafName}, ${section}, Ethio telecom miniapp, Taro React, MAML, MAUI`);
      this.setCanonical(canonicalUrl);

      // 5. Update Open Graph
      this.setOgMeta('og:title', pageTitle);
      this.setOgMeta('og:description', description);
      this.setOgMeta('og:url', canonicalUrl);

      // 6. Update Twitter Card
      this.setMeta('twitter:title', pageTitle);
      this.setMeta('twitter:description', description);

      // 7. Dynamic JSON-LD Structured Data (TechArticle)
      this.updateJsonLd(leaf, section, pageTitle, description, canonicalUrl);
    },

    setMeta(name, content) {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    },

    setOgMeta(prop, content) {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    },

    setCanonical(url) {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
      }
      el.setAttribute('href', url);
    },

    updateJsonLd(leaf, section, title, description, url) {
      let script = document.getElementById('schema-tech-article');
      if (!script) {
        script = document.createElement('script');
        script.id = 'schema-tech-article';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title,
        "description": description,
        "url": url,
        "inLanguage": state.locale === 'zh_CN' ? 'zh-CN' : 'en-US',
        "articleSection": section,
        "publisher": {
          "@type": "Organization",
          "name": "Macle Open Platform",
          "url": "https://macle-opendoc.vercel.app/openplatform/macledocs/",
          "logo": "https://macle-opendoc.vercel.app/openplatform/macledocs/img/logo.png"
        },
        "about": {
          "@type": "SoftwareApplication",
          "name": "Telebirr MiniApp Platform (Macle Framework)",
          "operatingSystem": "Android, iOS, Web"
        }
      };

      script.textContent = JSON.stringify(structuredData, null, 2);
    }
  };

  // ---------------------------------------------------------------------------
  // 7. Global Search & Command Palette (Cmd + K)
  // ---------------------------------------------------------------------------
  const Search = {
    async buildIndex() {
      state.searchIndex = [];
      for (const top of state.topMenus) {
        try {
          const res = await fetch(`${BASE_URL}${top.data}`);
          const data = await res.json();
          this.indexNodes(data, top.name, top.path);
        } catch (e) {
          // ignore individual fetch errors
        }
      }
    },

    indexNodes(nodes, topName, topPath, parentNames = []) {
      for (const node of nodes) {
        if (node.child) {
          this.indexNodes(node.child, topName, topPath, [...parentNames, node.name]);
        } else if (node.path && node.data) {
          state.searchIndex.push({
            title: node.name,
            topName,
            topPath,
            path: node.path,
            fullPath: [...parentNames, node.name].join(' › '),
            keywords: `${node.name} ${topName} ${node.path}`.toLowerCase()
          });
        }
      }
    },

    init() {
      // Keyboard shortcuts: Cmd+K, Ctrl+K, or /
      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          this.open();
        } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          this.open();
        } else if (e.key === 'Escape' && this.isOpen()) {
          this.close();
        }
      });

      const input = document.getElementById('docs-search-input');
      if (input) {
        input.addEventListener('input', (e) => {
          this.query(e.target.value);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateSelection(1);
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateSelection(-1);
          } else if (e.key === 'Enter') {
            e.preventDefault();
            this.selectCurrent();
          }
        });
      }

      // Close button and backdrop click
      const backdrop = document.getElementById('docs-search-modal-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', (e) => {
          if (e.target === backdrop) {
            this.close();
          }
        });
      }

      const closeKbd = document.getElementById('docs-search-close-btn');
      if (closeKbd) {
        closeKbd.addEventListener('click', () => this.close());
      }
    },

    open() {
      const backdrop = document.getElementById('docs-search-modal-backdrop');
      const input = document.getElementById('docs-search-input');
      if (backdrop && input) {
        backdrop.classList.add('open');
        input.value = '';
        input.focus();
        this.query('');
      }
    },

    close() {
      const backdrop = document.getElementById('docs-search-modal-backdrop');
      if (backdrop) {
        backdrop.classList.remove('open');
      }
    },

    isOpen() {
      const backdrop = document.getElementById('docs-search-modal-backdrop');
      return backdrop && backdrop.classList.contains('open');
    },

    query(q) {
      state.searchQuery = q.toLowerCase().trim();
      state.selectedSearchIndex = 0;

      if (!state.searchQuery) {
        // Show recommended/popular docs
        state.searchResults = state.searchIndex.slice(0, 10);
      } else {
        const queryTerms = state.searchQuery.split(/\s+/);
        state.searchResults = state.searchIndex.filter(item => {
          return queryTerms.every(term => item.keywords.includes(term));
        }).slice(0, 12);
      }

      this.renderResults();
    },

    renderResults() {
      const container = document.getElementById('docs-search-results');
      if (!container) return;

      if (state.searchResults.length === 0) {
        container.innerHTML = `
          <div class="docs-search-empty">
            No documentation matching "<strong>${escapeHtml(state.searchQuery)}</strong>"
          </div>
        `;
        return;
      }

      container.innerHTML = state.searchResults.map((item, idx) => {
        const isSelected = idx === state.selectedSearchIndex;
        return `
          <div class="docs-search-result-item ${isSelected ? 'selected' : ''}" data-idx="${idx}">
            <div class="docs-search-result-left">
              <span class="docs-search-result-title">${this.highlightMatch(item.title, state.searchQuery)}</span>
              <span class="docs-search-result-path">${escapeHtml(item.fullPath)}</span>
            </div>
            <span class="docs-search-result-badge">${item.topName}</span>
          </div>
        `;
      }).join('');

      container.querySelectorAll('.docs-search-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const idx = parseInt(el.dataset.idx, 10);
          state.selectedSearchIndex = idx;
          this.selectCurrent();
        });
      });
    },

    highlightMatch(text, query) {
      if (!query) return escapeHtml(text);
      const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${safeQuery})`, 'gi');
      return escapeHtml(text).replace(regex, '<span style="color: var(--docs-accent); font-weight: 700;">$1</span>');
    },

    navigateSelection(delta) {
      const count = state.searchResults.length;
      if (count === 0) return;
      state.selectedSearchIndex = (state.selectedSearchIndex + delta + count) % count;
      
      const items = document.querySelectorAll('.docs-search-result-item');
      items.forEach((item, idx) => {
        item.classList.toggle('selected', idx === state.selectedSearchIndex);
      });

      const selectedEl = items[state.selectedSearchIndex];
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    },

    selectCurrent() {
      const item = state.searchResults[state.selectedSearchIndex];
      if (!item) return;

      this.close();

      // Navigate to selected doc
      window.location.hash = `#${item.topPath}${item.path}?locale=${state.locale}`;
    }
  };

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ---------------------------------------------------------------------------
  // 7. Core Application Orchestrator
  // ---------------------------------------------------------------------------
  const App = {
    async init() {
      // 1. Initialize Theme (anti-flicker already set data-theme)
      ThemeManager.init();

      // 2. Initialize Router & Locale
      Router.init();

      // 3. Mount Shell DOM structure
      this.mountAppShell();

      // 4. Attach Event Listeners
      this.attachEventListeners();

      // 5. Initialize Search
      Search.init();

      // 6. Load Navigation & Documents
      await Navigation.loadTopMenus();
    },

    mountAppShell() {
      const root = document.getElementById('app');
      if (!root) return;

      root.innerHTML = `
        <!-- Top Navigation Header -->
        <header class="docs-header">
          <div class="docs-header-inner">
            <div class="docs-header-left">
              <button class="docs-hamburger-btn mobile-only" id="docs-hamburger-btn" aria-label="Toggle navigation drawer">
                ${ICONS.hamburger}
              </button>

              <a class="docs-brand" href="#/guide/installDevtool?locale=${state.locale}">
                <img class="docs-brand-logo" src="${BASE_URL}/img/logo.png" alt="Macle Logo" />
                <span class="docs-brand-text">Macle Docs</span>
                <span class="docs-brand-badge">v26.6</span>
              </a>

              <!-- Desktop Top Nav -->
              <nav class="docs-top-nav desktop-only" id="docs-top-nav" aria-label="Documentation sections">
                <!-- Injected dynamically -->
              </nav>
            </div>

            <div class="docs-header-right">
              <!-- Search Trigger Button -->
              <button class="docs-search-btn" id="docs-search-trigger" aria-label="Search documentation (Cmd+K)">
                ${ICONS.search}
                <span class="docs-search-text">${state.locale === 'zh_CN' ? '搜索文档...' : 'Search docs...'}</span>
                <kbd class="docs-search-kbd">⌘K</kbd>
              </button>

              <!-- Theme Toggle with Dropdown -->
              <div style="position: relative;">
                <button class="docs-ctrl-btn" id="docs-theme-toggle-btn" aria-label="Theme selector" title="Toggle theme">
                  ${ICONS.sun}
                </button>
                <div class="docs-theme-menu" id="docs-theme-menu">
                  <button class="docs-theme-option" data-theme="light">
                    ${ICONS.sun} Light
                  </button>
                  <button class="docs-theme-option" data-theme="dark">
                    ${ICONS.moon} Dark
                  </button>
                  <button class="docs-theme-option" data-theme="system">
                    ${ICONS.laptop} System
                  </button>
                </div>
              </div>

              <!-- Language Toggle -->
              <button class="docs-lang-btn" id="docs-lang-btn" title="Switch language">
                ${ICONS.globe}
                <span>${state.locale === 'zh_CN' ? '中文' : 'EN'}</span>
              </button>

              <!-- GitHub Link (Desktop only) -->
              <a class="docs-github-link desktop-only" href="https://github.com/macle-community" target="_blank" rel="noopener noreferrer" title="Macle on GitHub">
                ${ICONS.github}
              </a>
            </div>
          </div>

          <!-- Mobile Sub-Navigation Bar: Horizontally scrollable section tabs -->
          <div class="docs-subnav-bar mobile-only" id="docs-subnav-bar">
            <nav class="docs-subnav-scroll" id="docs-mobile-top-nav" aria-label="Mobile sections">
              <!-- Injected dynamically -->
            </nav>
          </div>
        </header>

        <!-- Off-canvas Mobile Drawer Backdrop -->
        <div class="docs-drawer-backdrop" id="docs-drawer-backdrop"></div>

        <!-- Three-Column Documentation Layout -->
        <div class="docs-layout">
          <!-- Left Navigation Sidebar / Mobile Drawer -->
          <aside class="docs-sidebar" id="docs-sidebar">
            <div class="docs-sidebar-header mobile-only">
              <div class="docs-sidebar-header-title">
                <img src="${BASE_URL}/img/logo.png" class="docs-sidebar-header-logo" alt="" />
                <span>${state.locale === 'zh_CN' ? '文档导航' : 'Navigation'}</span>
              </div>
              <button class="docs-sidebar-close-btn" id="docs-sidebar-close-btn" aria-label="Close drawer">
                ${ICONS.close}
              </button>
            </div>

            <div class="docs-sidebar-filter">
              ${ICONS.search}
              <input type="text" id="docs-sidebar-filter-input" placeholder="${state.locale === 'zh_CN' ? '过滤当前分类主题...' : 'Filter topics...'}" />
            </div>
            
            <nav id="docs-sidebar-nav" aria-label="Topic navigation">
              <!-- Injected dynamically -->
            </nav>
          </aside>

          <!-- Main Document Content -->
          <main class="docs-main" id="docs-main">
            <div class="docs-content-wrapper">
              <nav class="docs-breadcrumbs" id="docs-breadcrumbs" aria-label="Breadcrumb">
                <!-- Injected dynamically -->
              </nav>

              <article class="markdown-body" id="docs-markdown-body">
                <!-- Injected dynamically -->
              </article>

              <footer class="docs-page-footer" id="docs-page-footer">
                <!-- Previous / Next Pager injected dynamically -->
              </footer>
            </div>
          </main>

          <!-- Right Sidebar — Table of Contents (On this page) -->
          <aside class="docs-toc" id="docs-toc-sidebar">
            <div class="docs-toc-title">
              ${ICONS.toc}
              <span>${state.locale === 'zh_CN' ? '本页目录' : 'On this page'}</span>
            </div>
            <ul class="docs-toc-list" id="docs-toc-list">
              <!-- Injected dynamically -->
            </ul>
          </aside>
        </div>

        <!-- Global Search Dialog (Command Palette) -->
        <div class="docs-search-modal-backdrop" id="docs-search-modal-backdrop">
          <div class="docs-search-dialog" role="dialog" aria-modal="true">
            <div class="docs-search-dialog-header">
              ${ICONS.search}
              <input type="text" class="docs-search-input" id="docs-search-input" placeholder="${state.locale === 'zh_CN' ? '搜索全部 Macle 官方文档...' : 'Search all Macle documentation...'}" autocomplete="off" />
              <kbd class="docs-search-close-kbd" id="docs-search-close-btn">ESC</kbd>
            </div>
            <div class="docs-search-results" id="docs-search-results">
              <!-- Injected dynamically -->
            </div>
            <div class="docs-search-dialog-footer">
              <span class="docs-search-hint"><kbd>↑</kbd><kbd>↓</kbd> ${state.locale === 'zh_CN' ? '导航' : 'Navigate'}</span>
              <span class="docs-search-hint"><kbd>↵</kbd> ${state.locale === 'zh_CN' ? '选择' : 'Select'}</span>
              <span class="docs-search-hint"><kbd>ESC</kbd> ${state.locale === 'zh_CN' ? '关闭' : 'Close'}</span>
            </div>
          </div>
        </div>
      `;
    },

    attachEventListeners() {
      // Search Trigger
      const searchTrigger = document.getElementById('docs-search-trigger');
      if (searchTrigger) {
        searchTrigger.addEventListener('click', () => Search.open());
      }

      // Language Switcher
      const langBtn = document.getElementById('docs-lang-btn');
      if (langBtn) {
        langBtn.addEventListener('click', () => Router.switchLocale());
      }

      // Theme Dropdown Toggle
      const themeBtn = document.getElementById('docs-theme-toggle-btn');
      const themeMenu = document.getElementById('docs-theme-menu');
      if (themeBtn && themeMenu) {
        themeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          themeMenu.classList.toggle('active');
        });

        document.querySelectorAll('.docs-theme-option').forEach(opt => {
          opt.addEventListener('click', () => {
            const theme = opt.dataset.theme;
            ThemeManager.setPreference(theme);
            themeMenu.classList.remove('active');
          });
        });

        document.addEventListener('click', (e) => {
          if (!themeMenu.contains(e.target) && e.target !== themeBtn) {
            themeMenu.classList.remove('active');
          }
        });
      }

      // Sidebar Filter Input
      const sidebarFilter = document.getElementById('docs-sidebar-filter-input');
      if (sidebarFilter) {
        sidebarFilter.addEventListener('input', (e) => {
          state.sidebarFilter = e.target.value;
          Navigation.renderSidebar();
        });
      }

      // Mobile Hamburger Drawer
      const hamburger = document.getElementById('docs-hamburger-btn');
      const backdrop = document.getElementById('docs-drawer-backdrop');
      const drawerCloseBtn = document.getElementById('docs-sidebar-close-btn');

      if (hamburger) {
        hamburger.addEventListener('click', () => this.toggleMobileDrawer());
      }
      if (backdrop) {
        backdrop.addEventListener('click', () => this.closeMobileDrawer());
      }
      if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', () => this.closeMobileDrawer());
      }

      // Close mobile drawer on resize to desktop
      window.addEventListener('resize', () => {
        if (window.innerWidth > 868 && state.mobileDrawerOpen) {
          this.closeMobileDrawer();
        }
      });
    },

    toggleMobileDrawer() {
      state.mobileDrawerOpen = !state.mobileDrawerOpen;
      const sidebar = document.getElementById('docs-sidebar');
      const backdrop = document.getElementById('docs-drawer-backdrop');
      const hamburger = document.getElementById('docs-hamburger-btn');
      if (sidebar && backdrop && hamburger) {
        sidebar.classList.toggle('open', state.mobileDrawerOpen);
        backdrop.classList.toggle('open', state.mobileDrawerOpen);
        hamburger.innerHTML = state.mobileDrawerOpen ? ICONS.close : ICONS.hamburger;
        document.body.style.overflow = state.mobileDrawerOpen ? 'hidden' : '';
      }
    },

    closeMobileDrawer() {
      state.mobileDrawerOpen = false;
      const sidebar = document.getElementById('docs-sidebar');
      const backdrop = document.getElementById('docs-drawer-backdrop');
      const hamburger = document.getElementById('docs-hamburger-btn');
      if (sidebar && backdrop && hamburger) {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
        hamburger.innerHTML = ICONS.hamburger;
        document.body.style.overflow = '';
      }
    }
  };

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }

})();
