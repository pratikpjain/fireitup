function dropdown() {
    var x = document.getElementById('nav');
    if(x.className == 'navbar') {
        // alert(x.className)
        x.className += ' dropit';
        // alert(x.className)
    }
    else {
        x.className = 'navbar';
    }
}
// alert('HII')