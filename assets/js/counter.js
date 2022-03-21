const COUNTERS = document.querySelectorAll('.count');
const SPEED = 200;

const OBSERVER = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true)
        COUNTERS.forEach( counter => {
            const animate = () => {
                const VALUE = +counter.getAttribute('data-target');
                const DATA = +counter.innerText;
          
                const TIME = VALUE / SPEED;
                if(DATA < VALUE) {
                    counter.innerText = Math.ceil(DATA + TIME);
                    setTimeout(animate, 15);
                }
                else{
                    counter.innerText = VALUE;
                }
            }
        animate();
        });
}, { threshold: [0.05] });

OBSERVER.observe(document.querySelector('#numbersSection'));


















