# Browser Markdown viewing tool

    $ git clone https://github.com/YasuhiroOsajima/mdpush.git
    $ cd mdpush
    $ npm install

    $ node server.js
    listening on port 3000

Access server's 3000/http by using browser.  

    $ cat sample.md
    # Title
    ## Sub Title
    aaa
    
    $ node mdpush.js sample.md

Then open new browser tab and rendering Markdown's html.  
