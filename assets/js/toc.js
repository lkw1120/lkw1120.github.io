(function() {
  'use strict';
  
  function initTOC() {
    const postContent = document.getElementById('post-content');
    const tocContainer = document.getElementById('toc-container');
    
    if (!postContent || !tocContainer) {
      return;
    }
    
    // Find all h2 and h3 elements
    const headers = postContent.querySelectorAll('h2, h3');
    
    if (headers.length === 0) {
      return;
    }
    
    // Create TOC structure
    const toc = document.createElement('ul');
    toc.className = 'toc';
    
    const tocItems = [];
    
    headers.forEach((header, index) => {
      // Create ID for header if it doesn't exist
      if (!header.id) {
        header.id = `heading-${index}`;
      }
      
      // Create TOC item
      const li = document.createElement('li');
      const level = header.tagName.toLowerCase() === 'h2' ? 2 : 3;
      li.className = `toc-item toc-level-${level}`;
      
      const a = document.createElement('a');
      a.href = `#${header.id}`;
      a.textContent = header.textContent;
      a.dataset.targetId = header.id;
      
      li.appendChild(a);
      toc.appendChild(li);
      
      tocItems.push({
        element: a,
        target: header,
        id: header.id
      });
    });
    
    tocContainer.appendChild(toc);
    
    // IntersectionObserver for scroll spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const tocItem = tocItems.find(item => item.id === entry.target.id);
        if (tocItem) {
          if (entry.isIntersecting) {
            // Remove active from all items
            tocItems.forEach(item => {
              item.element.classList.remove('active');
            });
            // Add active to current item
            tocItem.element.classList.add('active');
          }
        }
      });
    }, observerOptions);
    
    // Observe all headers
    headers.forEach(header => {
      observer.observe(header);
    });
    
    // Handle click on TOC items
    tocItems.forEach(item => {
      item.element.addEventListener('click', (e) => {
        e.preventDefault();
        item.target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTOC);
  } else {
    initTOC();
  }
})();

