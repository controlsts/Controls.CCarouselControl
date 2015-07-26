/// <reference path="bower_components/controls.ts/controls.ts"/>
var gApp;
(function (gApp) {
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    var data3 = [];
    for (var i = 0; i < 3; i++) {
        data3.push({
            text: '' + i
        });
    }
    var data7 = [];
    for (var i = 0; i < 7; i++) {
        data7.push({
            color: getRandomColor(),
            text: '' + i
        });
    }
    var data10 = [];
    for (var i = 0; i < 10; i++) {
        data10.push({
            text: '' + i
        });
    }
    var data = data7;
    var viewCount = 7;
    var itemWidth = 100;
    var itemHeight = 100;
    var itemDrawer = function (aElement, aItem, aIndex) {
        Controls.Item({
            el: aElement,
            children: [{
                className: 'item',
                backgroundColor: aItem.color,
                children: [{
                    className: 'text',
                    innerText: aItem.text
                }]
            }]
        });
    };
    var root = Controls.LayoutGroupControl({
        el: document.body,
        orientation: 1 /* EVertical */,
        controls: [
            Controls.LayoutControl({
                id: 'idStatus',
                itemDrawers: [
                    function (aElement, aIndex) {
                        Controls.Item({
                            el: aElement,
                            innerText: 'Use navigation keys (up, down, left, right)'
                        });
                        return 1 /* KFocusNone */;
                    }
                ]
            }),
            Controls.CarouselControl({
                orientation: 2 /* EHorizontal */,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,
                data: data,
                dataDrawer: itemDrawer,
                onFocusStartToChange: function (aEl, aItem, aIndex) {
                    aEl.innerText = aItem + 'Moving...';
                },
                onItemSelected: function (aEl, aItem) {
                    alert(aItem + ' Selected');
                },
                onFocusChanged: function (aOld, aNew) {
                }
            }),
            Controls.CarouselControl({
                orientation: 2 /* EHorizontal */,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,
                animation: true,
                maxKeyQueueCount: 3,
                drawEffect: 'spreadout',
                data: data,
                dataDrawer: itemDrawer,
                onFocusStartToChange: function (aEl, aItem, aIndex) {
                },
                onItemSelected: function (aEl, aItem) {
                    alert(aItem + ' Selected');
                },
                onFocusChanged: function (aOld, aNew) {
                }
            }),
            Controls.CarouselControl({
                orientation: 2 /* EHorizontal */,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,
                animation: true,
                maxKeyQueueCount: 3,
                drawEffect: 'spreadout',
                transparentAnchor: true,
                data: data,
                dataDrawer: itemDrawer,
                anchorDrawer: function (aElement, aItem, aIndex) {
                    aElement.style.borderColor = aItem.color;
                    Controls.Item({
                        el: aElement,
                        children: [{
                            className: 'item',
                            children: [{
                                className: 'text',
                                innerText: aItem.text
                            }]
                        }]
                    });
                },
                onStartToChange: function (aEl, aItem, aIndex) {
                    aEl.style.borderColor = aItem.color;
                    aEl.getElementsByClassName('text')[0].innerText = aItem.text;
                },
                onItemSelected: function (aEl, aItem) {
                    alert(aItem + ' Selected');
                },
                onFocusChanged: function (aOld, aNew) {
                }
            })
        ]
    });
    Controls.runRoot(root);
})(gApp || (gApp = {}));
//# sourceMappingURL=app.js.map