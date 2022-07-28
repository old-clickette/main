function checkForBangs() {
    if (q.includes('+g%21')) {
    qs = q.replace('+g%21', '');
    window.location.href = 'https://www.google.com/search?q=' + qs;
    }
    if (q.includes('+g!')) {
    qs = q.replace('+g!', '');
    window.location.href = 'https://www.google.com/search?q=' + qs;
    }
    if (q.includes('+%21g')) {
    qs = q.replace('+%21g', '');
    window.location.href = 'https://www.google.com/search?q=' + qs;
    }
    if (q.includes('+!g')) {
    qs = q.replace('+!g', '');
    window.location.href = 'https://www.google.com/search?q=' + qs;
    }
    if (q.includes('+b%21')) {
        qs = q.replace('+b%21', '');
        window.location.href = 'https://www.bing.com/search?q=' + qs;
        }
        if (q.includes('+b!')) {
        qs = q.replace('+b!', '');
        window.location.href = 'https://www.bing.com/search?q=' + qs;
        }
        if (q.includes('+%21b')) {
        qs = q.replace('+%21b', '');
        window.location.href = 'https://www.bing.com/search?q=' + qs;
        }
        if (q.includes('+!b')) {
        qs = q.replace('+!b', '');
        window.location.href = 'https://www.bing.com/search?q=' + qs;
    }
    if (q.includes('+d%21')) {
        qs = q.replace('+d%21', '');
        window.location.href = 'https://duckduckgo.com/?q=' + qs;
        }
        if (q.includes('+d!')) {
        qs = q.replace('+d!', '');
        window.location.href = 'https://duckduckgo.com/?q=' + qs;
        }
        if (q.includes('+%21d')) {
        qs = q.replace('+%21d', '');
        window.location.href = 'https://duckduckgo.com/?q=' + qs;
        }
        if (q.includes('+!d')) {
        qs = q.replace('+!d', '');
        window.location.href = 'https://duckduckgo.com/?q=' + qs;
        }
        if (q.includes('+w%21')) {
        qs = q.replace('+w%21', '');
        window.location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + qs;
        }
        if (q.includes('+w!')) {
        qs = q.replace('+w!', '');
        window.location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + qs;
        }
        if (q.includes('+%21w')) {
        qs = q.replace('+%21w', '');
        window.location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + qs;
        }
        if (q.includes('+!w')) {
        qs = q.replace('+!w', '');
        window.location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + qs;
}}