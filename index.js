window.onload = function onLoad() {
    this.setTimeout(()=>{
        const length = 3
        let fulfilled = 0

        const anims = Array.from({length}, () => getRandomArbitrary(1000, 3000))
            .map((duration, i)=>{
            return anime(getAnimeProps(duration, i))
        })

        this.document.querySelector('#console0').style.color = 'black'

        anims.forEach((anim, i) => {
            anim.finished.then(()=>{
                fulfilled++
                this.document.querySelector(`#text${i}`).style.fill = 'green'
                this.document.querySelector(`#text${i}`).innerHTML = 'Fulfilled.'
                this.document.querySelector(`#circle${i}`).style.fill = '#086e30'
    
                this.document.querySelector(`#promise${i}`).style.color = 'green'
    
                if(fulfilled === length) {
                    this.document.querySelector('#promise-status').innerHTML = 'Fulfilled. ✅'
                    this.document.querySelector('#console1').style.color = 'black'
                }
            })
        })
    }, 750)
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getAnimeProps(duration, i){
    return {
        targets: `#circle${i}`,
        autoplay: true,
        loop: false,
        easing: 'easeInOutQuad',
        translateX: window.innerWidth * 0.5,
        duration
    }
}