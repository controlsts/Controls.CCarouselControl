
/// <reference path="../controls.ts"/>

module gApp{

    var data = [];

    for (var i=0; i<30; i++) {
        data.push({
            name: 'Name ' + i,
            text: 'Text ' + i
        });
    }

    var root = Controls.GridControl({
        el: document.body,
        id: 'idRoot',
        itemWidth: 90,
        itemHeight: 90,
        maxColCount: 4,
        animation: true,

        data: data,
        dataDrawer: function (aKey: any, aItem: any, aEl: HTMLElement) {
            aEl.innerText = aKey + ': ' + aItem.name;
            return Controls.TFocusInfo.KFocusAble;
        },

        onFocusChanged: function (aOld: HTMLElement, aNew: HTMLElement) {
            aNew.innerText += 'focused'
        },
        onItemSelected: function (aControl: Controls.CControl, aIndex: number, aEl: HTMLElement) {
            alert('index : ' + aIndex);
        }
    });

    Controls.runRoot(root);

}
