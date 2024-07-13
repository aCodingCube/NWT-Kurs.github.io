window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.scrollY / (document.body.offsetHeight - window.innerHeight));
  }, false);

window.addEventListener('DOMContentLoaded',function() {
    var numberOfEntries = document.querySelectorAll('.column').length;
    console.log(numberOfEntries);
    this.document.getElementById("sub-heading").innerHTML += numberOfEntries;
},false);