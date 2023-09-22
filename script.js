const image = document.querySelector('.image');
const text = document.querySelector('.lyricks');
const loading1 = document.querySelector('#loading');
const loading2 = document.querySelector('#loading-screen');
const loadingLogo = document.querySelector('.spinner');



// ロード画面
window.addEventListener('load', () => {
    loading1.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    )
    loadingLogo.animate(
        {
            opacity: [1,0]
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    )
  }
)

// 写真
image.animate(
    {
        opacity: [0,1]
    },
    {
        duration: 2000,
        easing: 'ease',
        fill: 'forwards',
    }
);

// 文字
text.animate(
    {
        translate: ['0 50vh', '0 0'],
        opacity: [0,1]
    },
    {
        duration: 2000,
        delay: 200,
        easing: 'ease',
        fill: 'forwards',
    }
);

// intersectionobserverやる
