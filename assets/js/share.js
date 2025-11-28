document.addEventListener('click', (event) => {
  const shareLink = event.target.closest('.share-link');
  if (!shareLink) {
    return;
  }

  const url = shareLink.dataset.url || window.location.href;
  const copiedLabel = shareLink.dataset.copiedLabel || 'Copied!';
  const copyFailedLabel = shareLink.dataset.copyFailedLabel || 'Copy failed';

  navigator.clipboard.writeText(url)
    .then(() => {
      const prevText = shareLink.textContent;
      shareLink.textContent = copiedLabel;
      setTimeout(() => {
        shareLink.textContent = prevText;
      }, 2000);
    })
    .catch(() => {
      const prevText = shareLink.textContent;
      shareLink.textContent = copyFailedLabel;
      setTimeout(() => {
        shareLink.textContent = prevText;
      }, 2000);
    });
});

