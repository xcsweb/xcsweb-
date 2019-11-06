---
title: Metamorphic testing A promising test method for services based on AI
date: 2019-11-03 21:11:00
tags:
    learn english
---
Today
I discuss a very promising test method for machine learning applications. As
everyone knows, machine learning(ML) is widely used in a variety of business application
solutions in the age of AI. How to test a service based on ML

is
becoming a problem we have to cope with. Since traditional test method strictly
depends on the Oracle problem, it is totally useless in the AI period.

 

In
software testing, an oracle refers to a mechanism which can tell you whether
the output of one case running is correct or not. For those services or application
based on algorithm or ML models, it is impossible to find such an oracle to
assert the result, so we have to introduce new test method such as metamorphic
testing for them.

 

The
basic concept of metamorphic testing is that even though we cannot check the
output of one input we can define the relation of two outputs of twos relative inputs.
For example, when testing sin(x), we don’t know the exact result of sin(11), we
know sin(12) is greater than sin(11), because the sin function is incremental
between 0 and 90. That is the metamorphic relation is sin(x+1)>sin(x).
Another merits of the test method is that it can be automated totally, which allow
tester to check nearly all the inputs in the input fields.

 

In
sum, metamorphic testing will must become prevalent in the age of AI. I believe
it. 