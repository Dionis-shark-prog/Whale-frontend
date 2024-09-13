document.addEventListener('DOMContentLoaded', (Event) => {
   const buttonMenuOpen = document.getElementById('menuButton');
   const buttonMenuClose = document.getElementById('menuButtonClose');
   const menu = document.getElementById('menuWindow');
   const successfullIn = document.getElementById('successfullIn')

   buttonMenuOpen.addEventListener('click', () => {
      menu.style.transform = 'translate(0)';
   });
   buttonMenuClose.addEventListener('click', () => {
      menu.style.transform = 'translate(-100%)';
   });

   url = window.location.search
   paramIn = new URLSearchParams(url);

   if (paramIn.get('in') === 'true') {
      setTimeout(() => { successfullIn.style.transform = 'translateY(0)'; }, 200);
      setTimeout(() => { successfullIn.style.transform = 'translateY(-120%)'; }, 2500);
   }
});
