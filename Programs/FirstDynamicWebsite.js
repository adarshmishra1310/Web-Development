function createCard(title, cName, views, old, duration) {
    document.querySelectorAll(".title").forEach(function (value) { 
        value.innerHTML = title 
    });
    document.querySelectorAll('.cName').forEach(function (value) { 
        value.innerHTML = cName;
    })
    document.querySelectorAll('.old').forEach(function (value) { 
        value.innerHTML = "• " + old + " months ago";
    })
    document.querySelector('.duration').innerHTML = duration;
    let view = document.querySelector('.views');
    if (!isNaN(views)) {
        views = parseInt(views); // Convert views to an integer
        if (views % 10000000 == 0) view.innerHTML = views / 10000000 + " crore views";
        else if (views % 100000 == 0) view.innerHTML = views / 100000 + " lakh views";
        else if (views % 1000 == 0) view.innerHTML = views / 1000 + "K views";
        else view.innerHTML = views + " views";
    } else {
        view.innerHTML = "Invalid view count";
    }
}

let title = "a", cName = "b", views = "100000", old = "d", duration = "e";
views = parseInt(views);

createCard(title, cName, views, old, duration);
