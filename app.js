/// <reference path="bower_components/controls.ts/controls.ts"/>
var gApp;
(function (gApp) {
    var EventHandlers = (function () {
        function EventHandlers() {
        }
        EventHandlers._FocusStartToChange = function (aEl, aItem, aIndex) {
            aEl.innerText = aItem + 'Moving...';
        };
        EventHandlers._ItemSelected = function (aEl, aItem) {
            alert(aItem + ' Selected');
        };
        EventHandlers._FocusChanged = function (aOld, aNew) {
        };
        return EventHandlers;
    })();
    var data3 = [];
    for (var i = 0; i < 3; i++) {
        data3.push('' + i);
    }
    var data7 = [];
    for (var i = 0; i < 7; i++) {
        data7.push('' + i);
    }
    var data10 = [];
    for (var i = 0; i < 10; i++) {
        data10.push('' + i);
    }
    var data = data7;
    var viewCount = 7;
    var itemWidth = 100;
    var itemHeight = 50;
    var root = Controls.LayoutGroupControl({
        el: document.body,
        orientation: 1 /* EVertical */,
        controls: [
            Controls.CarouselControl({
                orientation: 2 /* EHorizontal */,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,
                data: data,
                dataDrawer: function (aElement, aItem, aIndex) {
                    aElement.innerText = "Simple " + aItem;
                },
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
                dataDrawer: function (aElement, aItem, aIndex) {
                    aElement.innerText = "Anim " + aItem;
                },
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
                transparentAnchor: true,
                data: data,
                dataDrawer: function (aElement, aItem, aIndex) {
                    aElement.innerText = "Trans " + aItem;
                },
                onFocusStartToChange: function (aEl, aItem, aIndex) {
                    aEl.innerText = aItem + 'Moving...';
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