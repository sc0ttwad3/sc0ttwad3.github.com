---
layout: post
date: 2014-03-26
title: RxJS On Demand Async Method
categories: javascript reactive
---

This is an introductory paragraph that is not styled with the lead class. The method is started every time the observable is created and subscribed, so there could be more than one running at once.

##### Run a method asynchronously on demand #####

The following code sample shows one way to **execute a long-running method asynchronously**. The method does not start running until there is a subscriber. The method is started every time the observable is created and subscribed, so there could be more than one running at once.

{% highlight javascript %}
// Synchronous operation
public DataType DoLongRunningOperation(string param)
{
    ...
}

public IObservable<DataType> LongRunningOperationAsync(string param)
{
    return Observable.Create<DataType>(
        o => Observable.ToAsync<string,DataType>(DoLongRunningOperation)(param).Subscribe(o)
    );
}
{% endhighlight %}

