/**
 * Created by zplus on 2015/6/5.
 */

;
(function (win, undefined) {

    var headings, root = document.getElementById('wrapper');
    if (document.querySelectorAll) {
        headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    } else {
        headings = searchHead(root, []);
    }

    function searchHead(root, arr) {
        var el = root.firstChild;
        while (el = el.nextSibling) {
            if (el != null) {
                if (el.nodeType == 1 && el.tagName.length == 2 && el.tagName.toLowerCase().charAt(0) == 'h') {
                    arr.push(el);
                }
            } else {
                break;
            }
        }
        return arr;
    }

    var i = 0, len = headings.length;
    if (!len) return;
    var oToc = document.getElementById('toc');
    if (!oToc) {
        oToc = document.createElement('div');
        oToc.id = 'toc';
    }

    var html = '<ul>';
    var arr = [];
    var anchorIndex = 0;
    for (; i < len; i++) {
        var head = headings[i];
        var cls = 'toc-' + head.tagName.toLowerCase();
        var anchor = 'toc' + anchorIndex++;
        var a = document.createElement('a');
        a.id = anchor;
        root.insertBefore(a, head);
        arr.push('<li class="', cls, '"><a href="#', anchor, '">', head.innerHTML, '</a></li>');
    }
    html += arr.join('') + '</ul>';
    oToc.innerHTML = html;
})(window);
