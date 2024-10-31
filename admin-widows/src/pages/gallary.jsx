import React from 'react'

export default function Gallary() {
  return (
    <div className='gallery-section'>
        <div className="heading">
            Edit Gellary section
        </div>
        {/* Add your gallery images here */}
        <div className="controll-gellery">
            <div className="upload-area">
                <form action="">
                   <span>
                     <select name="type" id="gellery-type">
                        <option value="" disabled>Select type</option>
                        <option value="Orphanage">Orphanage</option>
                        <option value="Widows">Widows</option>
                        <option value="videos">Videos</option>
                     </select>
                   </span>
                   <span>
                   <label htmlFor="">Select image /video</label>
                   <input type="file" name="gellery" id="gellery" />
                   </span>

                </form>
            </div>

            <div className="existing-Gallerys">
                <div className="widows">
                    <h5>Widows</h5>
                    <div className="widows-images">
                        <span>
                          <img src="" alt="" />
                          <p>type</p>
                          <button>Delete</button>
                        </span>
                    </div>
                </div>
                <div className="widows">
                    <h5>orphange</h5>
                    <div className="widows-images">
                        <span>
                          <img src="" alt="" />
                          <p>type</p>
                          <button>Delete</button>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
