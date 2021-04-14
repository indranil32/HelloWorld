#!/usr/bin/perl
use strict;
use warnings;

my ( $msg );

$msg = "Hello World||";

STDOUT->autoflush(1);

printf ( $msg );

print "\n";

