// event listener for scrolling
// for scroll animations
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

// event listener for website finishing loading
// for the rendering the count of entries
window.addEventListener('DOMContentLoaded',function() {
    var numberOfEntries = document.querySelectorAll('.column').length;
    console.log(numberOfEntries);
    this.document.getElementById("sub-heading").innerHTML += numberOfEntries;
},false);