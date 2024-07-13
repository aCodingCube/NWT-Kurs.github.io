// event listener for scrolling
// for scroll animations
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

// event listener for website finishing loading
// for the rendering the count of entries
window.addEventListener('DOMContentLoaded',function() {
    var numberOfEntries = document.querySelectorAll('.column').length;
    this.document.getElementById("sub-heading").innerHTML += numberOfEntries;

    // Console
    console.log("Made by Lorenz :)");
},false);

function OpenInNewTab(url)
{
    window.open(url,'_blank').focus();
}