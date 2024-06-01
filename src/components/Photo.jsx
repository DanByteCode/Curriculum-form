export default function Photo({ imgSrc, setSrc }) {
  function uploadPhoto(e) {
    const reader = new FileReader()
    const file = e.target.files[0];
    reader.onload = function (f) {
      setSrc(f.target.result)
    }
    reader.readAsDataURL(file);
  }
  function resetImg() {
    setSrc('/default.webp')
  }
  return (<div>
    <h3>Image</h3>
    <span id="config-img">
      <label id="upload">Upload
        <input type="file" accept="image/*" onChange={(e) => uploadPhoto(e)} />
      </label>
    <button onClick={resetImg}>Reset</button>
    </span>
    <img id="photo" src={imgSrc} alt="Photo" width="150" height="150" />
  </div>)
} 