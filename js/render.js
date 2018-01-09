(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Создает HTML элемент заданного типа с заданным CSS классом
     *
     * @param {string} type тип создаваемого HTML элемента
     * @param {string} className CSS класс
     * @param {string} [text] текст
     * @returns {HTMLElement} HTML элемент
     */
    function element(type, className, text) {
        var elem = document.createElement(type);
        elem.className = className;

        if (text) {
            elem.innerText = text;
        }

        return elem;
    }

    /**
     * Создает визуализацию карты по его схеме
     *
     * @param {number[][]} map карта островов
     * @param {number} count кол-во островов
     * @returns {HTMLElement} HTML элемент
     */
    function render(map, count) {
        var containerElem = element('div', 'map'),
            rowElem,
            type,
            row,
            cell,
            x,
            y;

        containerElem.appendChild(element('div', 'map__res', 'Count: ' + Number(count)));

        for (y = 0; y < map.length; y++) {
            row = map[y];
            rowElem = element('div', 'map__row');

            for (x = 0; x < row.length; x++) {
                cell = row[x];

                switch (cell) {
                    case WATER:
                        type = 'water';
                        break;

                    case ISLAND:
                        type = 'island';
                        break;

                    default:
                        type = undefined;
                }

                rowElem.appendChild(
                    element('div', 'map__cell' + (type ? ' map__cell_' + type : ''))
                );
            }

            containerElem.appendChild(rowElem);
        }

        return containerElem;
    }

    root.SHRI_ISLANDS.render = render;
})(this);
