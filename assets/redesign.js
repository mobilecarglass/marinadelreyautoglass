
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const body=document.body;
    const toggle=document.querySelector('.nav-toggle');
    const panel=document.querySelector('.mobile-nav');
    const backdrop=document.querySelector('.nav-backdrop');
    if(!toggle || !panel) return;

    function setOpen(open){
      body.classList.toggle('menu-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    toggle.addEventListener('click', function(){
      setOpen(!body.classList.contains('menu-open'));
    });
    if(backdrop) backdrop.addEventListener('click', function(){ setOpen(false); });
    panel.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){ setOpen(false); });
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') setOpen(false);
    });
    window.addEventListener('resize', function(){
      if(window.innerWidth > 1000) setOpen(false);
    });
    setOpen(false);
  });
})();
