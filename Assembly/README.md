# PREREQUISITE 
  ============
1. Install the [Assembly(nasm)](https://ccm.net/download/download-1025-nasm) language.

# RUN
  ===
1. nasm -f win32 HelloWorld.asm -o test.o
2. ld test.o -o HelloWorld.exe