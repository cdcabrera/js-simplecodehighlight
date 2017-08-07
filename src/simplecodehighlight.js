(function(window, undefined) {

    'use strict';

    window.parseCode = parseCode;

    /**
     * Pass a string of JS and receive an array of lines for display.
     *
     * @param code {String}
     * @returns {Array}
     */
    function parseCode (code) {

        if ( !code || code.length <= 0 ) {
            return [];
        }

        var parsedCode = code;

        parsedCode = parsedCode.replace(/\$/g, '&#36;').replace(/\//g, '&#47;');
        parsedCode = parsedCode.replace(/</g,'&lt;').replace(/>/g,'&gt;');

        parsedCode = parsedCode.replace(/\r\n/g, '\n');
        parsedCode = parsedCode.replace(/\n/g, '~~');
        parsedCode = parsedCode.replace(/\t/g, '\s\s\s\s');
        parsedCode = parsedCode.replace(/\s/g, '&nbsp;');

        parsedCode = parsedCode.split(/~~/g);

        return parsedCode;
    }

})(this);
