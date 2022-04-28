/* eslint-disable no-undef */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            padding: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
                '0-16': '0px 16px',
                '16-0': '16px 0px',
            },
            fontSize: {
                'title-header': ['12px', '16px'],
                sm: ['14px', '20px'],
                base: ['16px', '20px'],
                lg: ['20px', '28px'],
                xl: ['24px', '32px'],
            },
            margin: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
            },
            marginTop: {
                'm-t-4': '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
            },
            marginRight: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '48px',
            },
        },
    },
    plugins: [],
}
