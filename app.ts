
/// <reference path="bower_components/controls.ts/controls.ts"/>

module gApp {

    class EventHandlers {
        static _FocusStartToChange(aEl: HTMLElement, aItem: any, aIndex: number) {
            aEl.innerText = aItem + 'Moving...';
        }
        static _ItemSelected(aEl, aItem) {
            alert(aItem + ' Selected');
        }
        static _FocusChanged(aOld: HTMLElement, aNew: HTMLElement) {

        }
    }

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
        orientation: Controls.TParamOrientation.EVertical,
        controls: [
            Controls.CarouselControl({
                orientation: Controls.TParamOrientation.EHorizontal,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,

                data: data,
                dataDrawer: function(aElement: HTMLElement, aItem: any, aIndex: number) {
                    aElement.innerText = "Simple " + aItem;
                },

                onFocusStartToChange: function(aEl: HTMLElement, aItem: any, aIndex: number) {
                    aEl.innerText = aItem + 'Moving...';
                },
                onItemSelected: function(aEl, aItem) {
                    alert(aItem + ' Selected');
                },
                onFocusChanged: function(aOld: HTMLElement, aNew: HTMLElement) {

                }
            }),
            Controls.CarouselControl({
                orientation: Controls.TParamOrientation.EHorizontal,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,
                animation: true,
                maxKeyQueueCount: 3,
                drawEffect: 'spreadout',

                data: data,
                dataDrawer: function(aElement: HTMLElement, aItem: any, aIndex: number) {
                    aElement.innerText = "Anim " + aItem;
                },

                onFocusStartToChange: function(aEl: HTMLElement, aItem: any, aIndex: number) {
                    aEl.innerText = aItem + 'Moving...';
                },
                onItemSelected: function(aEl, aItem) {
                    alert(aItem + ' Selected');
                },
                onFocusChanged: function(aOld: HTMLElement, aNew: HTMLElement) {

                }
            }),
            Controls.CarouselControl({
                orientation: Controls.TParamOrientation.EHorizontal,
                viewCount: viewCount,
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                anchorIndex: 3,
                animation: true,
                maxKeyQueueCount: 3,
                drawEffect: 'spreadout',
                transparentAnchor: true,

                data: data,
                dataDrawer: function(aElement: HTMLElement, aItem: any, aIndex: number) {
                    aElement.innerText = "Trans " + aItem;
                },

                onFocusStartToChange: function(aEl: HTMLElement, aItem: any, aIndex: number) {
                    aEl.innerText = aItem + 'Moving...';
                },
                onItemSelected: function(aEl, aItem) {
                    alert(aItem + ' Selected');
                },
                onFocusChanged: function(aOld: HTMLElement, aNew: HTMLElement) {

                }
            })
        ]
    });


    Controls.runRoot(root);
}
