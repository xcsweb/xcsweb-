---
title: How to design test cases?
date: 2019-11-03 21:11:00
tags:
    learn english
---
<p .="MsoNormal"><span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">It seems that writing test cases is art not
technology, since for the same object under test, test cases designed by
different engineers are completely distinct. Why? I think lack of stable test method
is the answer. For example, imagine when we test a system like skype, how can
we develop a test suite for it? Most of engineers write test cases according to
the requirement document, but how to make our test cases cover more branches
and find test cases which are not covered on the requirement document. </span></p><p .="MsoNormal"><span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">&#xA0;</span></p><p .="MsoNormal"><span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">One feasible method is assessing the case
space for one occasion under test. First we list all the factors involved in a
test occasion, which let us know one case is comprised of how many different factors.
For instance, skype client A, network channel, skype client B are involved in
one test case. Then we try to list all the variables for one factor, for client
A, these variables include different devices, different version of operating
system, different input text, etc. the network channel includes 2g,3g,4g,5g,wifi,
intranet, broken connection, etc. After listing all the variables, we can
assess how many test cases are enough to cover this occasion by multiplying the
number of these variables, for example 10 for A, 10 for network channel, 10 for
B(the same number as A), the result is 1000 test cases. It&#x2019;s amazing, right? If
we manually list these test cases, it seems an impossible task.</span></p><p .="MsoNormal"><span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">&#xA0;</span></p><p .="MsoNormal"><span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">Comparing to manual test cases, not all of test
cases generated automatically is valuable, we can reduce the number of test
cases by combining some status, such as 3g/4g and deleting some ridiculous
ones. After some priorities, we can get a subset in a reasonable account, this
subset covers the most important test cases we should test.</span></p><p .="MsoNormal"><span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">&#xA0;</span></p><p .="MsoNormal">











<span lang="EN-US" .="font-size: 14pt; font-family: " microsoft="" yahei="" ui",="" sans-serif;"="">In sum, when coping with complex test occasion, do
not start with listing cases, instead, try to assess how many test cases we
need cover the test occasion.&#xA0;</span></p>