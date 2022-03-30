import { ListItemSecondaryAction } from "@material-ui/core"
import { useState } from "react"
import "./newMovie.scss"
import storage from "../../firebase"

export default function NewMovie() {

    const [movie, setMovie] = useState({})
    const [img, setImg] = useState()
    const [imgTitle, setImgTitle] = useState()
    const [imgSm, setImgSm] = useState()
    const [trailer, setTrailer] = useState()
    const [video, setVideo] = useState()
    // to show how many files have been uploaded.
    const [uploaded, setUploaded] = useState(0)

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach((item) => {
            // Set unique filename for uploads
            const filename = new Date().getTime() + item.label +item.file.name
            const uploadTask = storage.ref(`/items/${filename}`).put(item)
            // Show upload %
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setMovie((prev) => {
                            return { ...prev, [item.label]: url }
                        })
                        setUploaded((prev) => prev + 1);
                    })
                }
            )
        })
    }

    const handleUpload = (e) => {
        // Prevent refresh.
        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ])
    }

console.log(movie)

  	return (
	 	<div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="img" name="img" onChange={(e)=>setImg(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle"name="imgTitle" onChange={(e)=>setImgTitle(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgSm" name="imgSm" onChange={(e)=>setImgSm(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder="" name="title" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder="" name="desc" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder="" name="year" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder="" name="genre" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder="" name="duration" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder="" name="limit" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Is Series?</label>
                    <select id="isSeries" name="isSeries">
                        <option value="false">No</option>
                        <option value="true">yes</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input type="file" placeholder="" name="trailer" onChange={(e)=>setTrailer(e.target.files[0])}/>
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input type="file" placeholder="" name="video"  onChange={(e)=>setVideo(e.target.files[0])}/>
                </div> {uploaded === 5 ? (
                    <button className="addProductButton">Create</button>
                    ) : (
                        <button className="addProductButton" onClick={handleUpload}>Upload</button>                      
                    )
                }
            </form>
    	</div>
  	)
}
