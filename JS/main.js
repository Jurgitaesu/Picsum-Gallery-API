fetch('https://picsum.photos/v2/list')
    .then(res => res.json())
    .then((out) => {
        var imageList = document.getElementById("imageList");
        var imageInfo = document.getElementById("imageInfo");
        imageInfo.style.display = "none";
        for (let i = 0; i < out.length; i++) {
            const img = document.createElement("img");
            img.src = out[i].download_url;
            img.addEventListener("click", function () {
                imageInfo.style.display = "block";
                var imageAuthor = document.getElementById("imageAuthor");
                imageAuthor.innerHTML = out[i].author;
                var imageWidth = document.getElementById("imageWidth");
                imageWidth.innerHTML = out[i].width;
                var imageHeight = document.getElementById("imageHeight");
                imageHeight.innerHTML = out[i].height;
                var enlargedImage = document.getElementById("enlargedImage");
                enlargedImage.src = out[i].download_url;

            })

            document.getElementById("imageList").appendChild(img);
        }

    }).catch(err => console.error(err));
