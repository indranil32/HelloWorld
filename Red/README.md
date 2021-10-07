Making a Red "Hello World"
------------------------
The Red toolchain comes as a single **one-megabyte** executable file that you can download from [here](http://www.red-lang.org/p/download.html) for the big-3 platforms.

1. Put the downloaded **red** binary in the working folder.

2. In a code or text editor, write the following Hello World program:

        Red [
            Title: "Simple hello world script"
        ]

        print "Hello World!"

3. Save it under the name: **hello.red**

4. From a terminal (works from DOS too), run it with:

        $ red hello.red

5. You should see the _Hello World!_ output.

6. Want to generate a compiled executable from that program?

        $ red -c hello.red
        $ ./hello

7. Want to generate a compiled executable from that program with no dependencies?

        $ red -r hello.red
        $ ./hello

8. Want to cross-compile to another supported platform?

        $ red -t Windows hello.red
        $ red -t Darwin hello.red
        $ red -t Linux-ARM hello.red

**The command-line syntax is:**

    red [command] [options] [file]
