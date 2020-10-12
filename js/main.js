var elSiteHeader = document.querySelector('.sitenav');
var elSiteHeaderToggler = document.querySelector('.toggler-btn');

elSiteHeader.classList.remove('nojs');
elSiteHeaderToggler.classList.add('toggler');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('open-js');
  elSiteHeaderToggler.classList.toggle('toggler__close');
});