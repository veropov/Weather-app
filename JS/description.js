
//Дата//Дата//Дата//Дата//Дата
//Дата//Дата//Дата//Дата//Дата
//Дата//Дата//Дата//Дата//Дата

export let date = new Date();
export let month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая,',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября,',
    'Ноября',
    'Декабря,'
];

export function Month() {
    if (date.getMonth() == 0) { 
        return month[0] 
    };
};

export const day = date.getUTCDate();

//

const image = '<svg viewBox="0 0 320 407" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_1_12)"><path d="M153.855 53.1342C128.788 87.1678 124.442 133.614 146.554 171.914C168.666 210.213 211.063 229.672 253.07 224.981C244.138 237.108 232.576 247.659 218.642 255.704C165.604 286.325 98.2955 269.038 68.3042 217.091C38.3128 165.145 56.9957 98.2101 110.034 67.5887C123.967 59.544 138.886 54.8059 153.855 53.1342Z" fill="#FFEE94"/></g>'


class Icons {
    constructor(options) {
        this.icon = options.icon;
    }

    get getIcon() {
        const iconElement = document.querySelector('.icon')
        const add = document.createElement('svg')
        add.innerHTML = this.icon

        return iconElement.appendChild(add);
    }
}

const moon = new Icons({
    icon: image
})

moon.getIcon;