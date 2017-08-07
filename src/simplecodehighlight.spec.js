describe('Simple Code Hightlight' , function(){

    let code = `<!DOCTYPE html>
                <html lang="en-US">
                    <head>
                        <title>test</title>
                        <meta charset="utf-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    </head>
                    <body>
                        <ul>
                            <li><a href="#navigation" title="Menu"><span>Skip to site navigation.</span></a></li>
                            <li><a href="#"><span>Home.</span></a></li>
                        </ul>
                    </body>
                </html>`;


    it ('should exist', function() {

        expect(window.parseCode).toBeDefined();
    });


    it ('should return an array with a specific length', function() {

        let retValue = window.parseCode(code);

        expect(retValue.length).toBeDefined();
        expect(retValue.length).toEqual(14);
    });


    it ('should have no remaining < or >', function() {

        let retValue = window.parseCode(code);

        expect(/</g.test(retValue.join(''))).toEqual(false);
        expect(/>/g.test(retValue.join(''))).toEqual(false);
    });


    it ('should have no remaining \\s', function() {

        let retValue = window.parseCode(code);

        expect(/\s/g.test(retValue.join(''))).toEqual(false);
    });


    it ('should have no remaining \\t', function() {

        let retValue = window.parseCode(code);

        expect(/\t/g.test(retValue.join(''))).toEqual(false);
    });


    it ('should have no remaining \\$', function() {

        let retValue = window.parseCode(code);

        expect(/\$/g.test(retValue.join(''))).toEqual(false);
    });


    it ('should have no remaining \\n', function() {

        let retValue = window.parseCode(code);

        expect(/\n/g.test(retValue.join(''))).toEqual(false);
    });

});
