const share = document.querySelector(".share");
const shareBar = document.querySelector('.share-bar');
share.addEventListener("click", function(e){
    // document.querySelector('.share-bar').classList.toggle('show');
    if(shareBar.style.display === "" || shareBar.style.display === "none"){
        shareBar.style.display = 'flex';
    }else{
        shareBar.style.display = 'none';
    }
    // console.log(document.querySelector('.share-bar').style.display);
});

