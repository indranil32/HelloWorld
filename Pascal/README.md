# 1. Make sure pascal compiler is installed on your system

Make sure pascal compiler is installed on your system as shown below.
```
$ whereis pc
pc: /usr/bin/pc /usr/share/man/man1/pc.1.gz

$ which pc
/usr/bin/pc
```

## Installing pascal compiler

If you don’t have pascal compiler, install it as shown below.
```
$ sudo apt-get install fp-compiler
```

# 2. Compile the pascal program.
Compile the HelloWorld.p which will create the HelloWorld executable.
```
$ pc HelloWorld.p 
Free Pascal Compiler version 2.2.2-8 [2009/01/08] for i386
Copyright (c) 1993-2008 by Florian Klaempfl
Target OS: Linux for i386
Compiling HelloWorld.p
Linking HelloWorld
4 lines compiled, 0.1 sec 

$ ls
HelloWorld*  HelloWorld.o  HelloWorld.p
```

# 3. Execute the pascal program.
Execute by mentioning the program name.
```
$ ./HelloWorld 
Hello, world!
```
