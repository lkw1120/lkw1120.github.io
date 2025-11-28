(function() {
  'use strict';
  
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  function initTagFilter() {
    const tag = getUrlParameter('tag');
    
    if (!tag) {
      return;
    }
    
    // Get all posts data
    const allPostsDataEl = document.getElementById('all-posts-data');
    if (!allPostsDataEl) {
      return;
    }
    
    const allPosts = JSON.parse(allPostsDataEl.textContent);
    
    // Filter posts by tag
    const filteredPosts = allPosts.filter(post => post.tags.includes(tag));
    
    if (filteredPosts.length === 0) {
      return;
    }
    
    // Show tag filter UI
    const postList = document.getElementById('post-list');
    if (!postList) {
      return;
    }
    
    const tagFilter = document.createElement('div');
    tagFilter.className = 'tag-filter';
    const clearLink = document.createElement('a');
    clearLink.href = window.location.pathname;
    clearLink.className = 'tag-filter-link';
    clearLink.innerHTML = `<span class="tag-filter-label">#${tag}</span>`;
    tagFilter.appendChild(clearLink);
    
    postList.parentNode.insertBefore(tagFilter, postList);
    
    // Hide pagination
    const pagination = document.getElementById('pagination');
    if (pagination) {
      pagination.style.display = 'none';
    }
    
    // Clear existing posts and render filtered posts
    postList.classList.add('is-filtered');
    postList.innerHTML = '';
    filteredPosts.forEach(post => {
      const li = document.createElement('li');
      li.className = 'post-item';
      li.innerHTML = `
        <div class="post-meta">
          <time datetime="${post.date}">${post.date}</time>
        </div>
        <h2 class="post-title">
          <a href="${post.url}">${post.title}</a>
        </h2>
      `;
      postList.appendChild(li);
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTagFilter);
  } else {
    initTagFilter();
  }
})();

