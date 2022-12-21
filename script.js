class Button {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this._element = element;

        this._addEvents();
    }

    _addEvents() {
        this._element.addEventListener('click', this._clickHandler.bind(this));
        this._element.addEventListener('click', this._clickHandler.bind(this));
    }

    _clickHandler() {
        const text = this._element.textContent;

        alert(text);
    }
}

let obj = {
    text: 'JavaScript'
}

let obj2 = {
    text: 'Java'
}

function clickHandler() {
    const text = this.text;

    alert(text);
}

const button = document.querySelector('#button');

// new Button(button);

const button2 = {
    _element: button,
    _addEvents: function () {
        this._element.addEventListener('click', clickHandler.bind(obj2));
    }
};

button2._addEvents();

function mult(a, b) {
    return a * b;
}

mult(2, 2);

function range(a, b) {
    let result = '';

    for (let i = a; i <= b; i++) {
        result += i;
    }

    return result;
}
alert(range(1,5));