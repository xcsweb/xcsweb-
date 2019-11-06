---
title: Metamorphic testing of STT
date: 2019-11-03 21:11:00
tags:
    learn english
---
An
interesting topic worth to discuss is how to test a speech-to-text (STT) system
like Siri, Alexa. From this discussion I hope to let the major problem in traditional
software testing practice be surfaced.

 

Imagine
we are trying to design a test case for a STT system, first we get a sound clip
and transcribe it manually; after that we test the STT system with the sound
clip as input; finally we check whether the output text is expected or not.
However this kind of testing method is totally useless because the range of
human speech is enormous. If we want to check 10000 sound clips, basically it
is impossible for us to transcribe them manually. Academically speaking, it is hard
to create manual oracles in practice.

 

How
to increase the range we can test with little human effort? The answer is
changing the test method to those methods which do not depend on checking what the
output is. The most promising method of them is metamorphic testing. It can
test in large input range automatically. For example, we set up 10000 sound
clips to be transcribed by the STT system, then we change these sound clips in
different ways, such as adding background noises, changing the tempo or volume
or pitch, changing the compressed format, etc. We can define the metamorphic
relation that the output text of testing for the original input should be the same
as that for changed input. If the STT cannot hold this, there must be defects in
it. 

 

Totally,
metamorphic testing defeats the traditional testing method in the cost aspect. Besides,
extending the testing range of input is the most valuable thing. This is really,
really big.

 

 