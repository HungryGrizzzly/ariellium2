const size = {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px'
}

export const device = {
    mobile: `(max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
    laptopL: `(min-width: ${size.laptopL}) and (max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop})`
};

export const colors = {
    section: 'rgb(238, 240, 243)',
    menu: '#588ab6',
    title: '#395772',
    desc: 'rgba(0,0,0,.6)',
    second: '#8adbe2'
}