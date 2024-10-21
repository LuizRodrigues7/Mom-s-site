document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
   toggle.addEventListener('click', e => {
     const sidebarID = toggle.dataset.toggleSidebar;
     const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
     if (sidebarElement) {
        let sidebarState = sidebarElement.getAttribute('aria-hidden');
        sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true); 
     }
   });
});
const IMAGE_WIDTH = 500;
const DELAY = 3000;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $imagecontainer = document.querySelector('.image-container');
const $images = document.querySelector('.img');
let currentImg = 1;
let timeout;

function updateImg() {
   if(currentImg > $images.length) {
      currentImg = 1;
   } else if (currentImg < 1) {
      currentImg = $images.length;
   }

   $imagecontainer.style.transform = `translateX(-$
   {(currentImg - 1) * IMAGE_WIDTH}px`;

   timeout = setTimeout(
      () => {
         currentImg++;
         updateImg();
      },
      DELAY,
   );
}

$prev.addEventListener(
   'click',
   () => {
      clearTimeout(timeout);
      currentImg--;
      updateImg();
   },
);

$next.addEventListener(
   'click',
   () => {
   currentImg++;
   updateImg();
   },
)