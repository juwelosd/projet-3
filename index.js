

const parent = document.getElementById('parent');
const commentFragment = document.createDocumentFragment();

async function getUserData() {
  try {
    const allCommentRes = await fetch(
       "https://jsonplaceholder.typicode.com/comments"
   );
    const allComment = await allCommentRes.json();
    allComment?.map((comment, idx) => {
      let div = document.createElement('div');
      div.className = 'single-comment';
      div.innerHTML = `
       <h2> post id ${comment?.postId} </h2>
         <h3> comment id ${comment?.id}</h3>
         <h4> comment name ${comment?.name}</h4>
           <span> comment email  ${comment?.email}</span>
     <p> comment content  ${comment?.body} </p>
       `;
      commentFragment.append(div);
    });
    parent.appendChild(commentFragment);
  } catch (err) {
    console.error(`Error is : ${err}`);
  } finally {
    console.log('data fetching done');
  }
}
getUserData();
