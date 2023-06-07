export const startParallax = (height) => [
    {
        start: 0,
        end: '50vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            }
        ]
    },
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -height * 0.4,
                property: "translateY",
            },
        ]
    }
]

export const aboutParallax = (height) => [
    {
        start: 'self',
        duration: '300vh',
        properties: [
            {
                startValue: 0,
                endValue: -height * 0.05,
                property: 'translateY',
            },
        ],
    }
]

export const aboutPageParallax = (height, k) => [
    {
        // start: height * k + 'px',
        start: 'self',
        duration: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -height * 0.5,
                property: 'translateY',
            },
        ],
    }
]

export const contactParallax = (height) => [
    {
        // start: height * k + 'px',
        start: 'self',
        duration: '50vh',
        properties: [
            {
                startValue: 0,
                endValue: -height * 0.3,
                property: "translateY",
            },
        ]
    }
]