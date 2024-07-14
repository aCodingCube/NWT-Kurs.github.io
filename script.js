// event listener for scrolling
// for scroll animations
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.scrollY / (document.body.offsetHeight - window.innerHeight));
    
     
}, false);

window.addEventListener('scroll', () => {
    var height = document.getElementById("upper-background").getBoundingClientRect.height;
    var value = window.scrollY / height;
    var finalValue;
    if(value > 1)
    {
        finalValue = 1;
    }
    else{
        finalValue = value;
    }

    document.body.style.setProperty('--newScroll',finalValue);
}, false);

// event listener for website finishing loading
// for the rendering the count of entries
window.addEventListener('DOMContentLoaded',function() {
    var numberOfEntries = document.querySelectorAll('.column').length;
    if(numberOfEntries == 1)
    {
    this.document.getElementById("sub-heading").innerHTML += "1 Projekt";
    }
    this.document.getElementById("sub-heading").innerHTML += numberOfEntries + " Projekte";

    // Console
    console.log("Made by Lorenz :)");
},false);

function OpenInNewTab(url)
{
    window.open(url,'_blank').focus();
}

function Message()
{
    Swal.fire({
        title: "NWT ist cool!",
        icon: "success"
      });
}