---
layout: post
date: 2014-03-26
title: RxJS and Angular Exploration
categories: angular javascript reactive
---


  This is a lead paragraph.  It should show up slightly larger or bolder to distinguish it and make it stand out from both the Heading and the following paragarphs or content. Should not be this long actually. Hey there! This page is included as an example. Feel free to customize it for your own use upon downloading. Carry on!

The following snippet of JavaScript shows basic EventListners and other:

{% highlight javascript %}
var button = document.getElementById('clickMe');

function buttonClicked () {
  alert('the button was clicked');
}

button.addEventListener('click', buttonClicked);

function timerComplete () {
  alert('timer complete');
}

setTimeout(timerComplete, 2000);
{% endhighlight %}



