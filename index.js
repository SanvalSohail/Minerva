var title = document.getElementById("title");
var author = document.getElementById("author");
var content = document.getElementById("content");
var submit = document.getElementById("submit");

var postHeader = document.getElementById("postTitle");

var firebaseTitleRef = firebase.database().ref().child("Posts")
console.log('IM LOADED');

/*
firebaseTitleRef.on("child_added", snap =>
{
    var HeaderTitle = snap.child ("Title").val();
    var HeaderAuthor = snap.child("Author").val();
    var HeaderContent = snap.child("Content").val();

    $("#postTitle").append(
        "<div class = 'container d-flex justify-content-center p-2 changeHeight'>"+
            "<div class = 'single-blog-post style-1'>" +
                "<div class = 'blog-thumbnail bg-overlay'>" + 
                    "<a href = '#'><img src= 'img/bg-img/1.jpg'></a>"+
                "</div>"+
                "<div class = 'blog-content'>" + 
                    "<span class = 'post-date'>" + HeaderAuthor + "</span>"+
                    "<a href = 'single-post.html?Var=" + HeaderTitle + "' class = 'post-title'>" + HeaderTitle + "</a>"+
                "</div>"+
            "</div" +
        "</div>");
}); */

/*
db.collection('posts').doc(post).get().then(function(requestedDoc){ 
	var data = requestedDoc.data();
	$("#postTitle").append(
        "<div class = 'container d-flex justify-content-center p-2 changeHeight'>"+
            "<div class = 'single-blog-post style-1'>" +
                "<div class = 'blog-thumbnail bg-overlay'>" + 
                    "<a href = '#'><img src= 'img/bg-img/1.jpg'></a>"+
                "</div>"+
                "<div class = 'blog-content'>" + 
                    "<span class = 'post-date'>" + data['author'] + "</span>"+
                    "<a href = 'single-post.html?Var=" + data['title'] + "' class = 'post-title'>" + data['title'] + "</a>"+
                "</div>"+
            "</div" +
        "</div>");
}); */


db.collection("posts").get().then(function(querySnapshot) {
	var targetPost = null
	querySnapshot.forEach(function(doc) {
		var data = doc.data();
		$("#postTitle").append(
			"<div class = 'container d-flex justify-content-center p-2 changeHeight'>"+
				"<div class = 'single-blog-post style-1'>" +
					"<div class = 'blog-thumbnail bg-overlay'>" + 
						"<a href = '#'><img src= " + data['picture'] +"></a>"+
					"</div>"+
					"<div class = 'blog-content'>" + 
						"<span class = 'post-date'>" + data['author'] + "</span>"+
						"<a href = 'single-post.html?Var=" + doc.id + "' class = 'post-title'>" + data['title'] + "</a>"+
					"</div>"+
				"</div" +
			"</div>");
		console.log(window.location.href);
		
	});
});

function submitClickPost()
{

    var postTitle = title.value;
    var postAuthor = author.value;
    var postContent = content.value;

    var firebaseRef = firebase.database().ref();
    window.alert("Post Created!");
    //Pushes Data to the child Posts
    firebaseRef.child("Posts").child(postTitle).set({
        Title: postTitle,
        Author: postAuthor,
        Content: postContent
    });
	
	db.collection("posts").add({title : postTitle, author : postAuthor, body : postContent, upvotes: 0, downvotes: 0, picture : 'img/featured.jpg'});
}

function signOut() {
	var user = firebase.auth().currentUser;
	if (user) {
		auth.signOut();
		alert("You are now signed out");
		location.reload();
	} else {
		location.replace("newLogin.html");
	}
	
}

function testPost()
{
    var qs = new QueryString();
    var v1 = qs.get("Var");

    console.log(v1);
}