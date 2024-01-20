import { useMain } from "../../context/main-context";

function ImageDetailDialog() {
  const { clickToViewDetails, imageDetail } = useMain();
  const {
    id,
    largeImageURL,
    tags,
    user,
    user_id,
    type,
    views,
    likes,
    downloads,
  } = imageDetail;
  const tagValue = tags.split(",");

  return (
    <>
      <dialog open className="image-details">
        <div className="image-details-dialog">
          <div className="image-details-navbar flex-container-space">
            <p className="font-weight-500 font-22">Preview ID: {id}</p>
            <button onClick={clickToViewDetails} className="close-button">
              x
            </button>
          </div>
          <div className="image-details-section">
            <div className="flex-container-row">
              <img
                className="large-dialog-image"
                src={largeImageURL}
                alt=""
              ></img>
              <div className="image-details-section-data flex-container-column ">
                <div className="flex-container-column row-gap-20 margin-bottom-30">
                  <p className="font-weight-500 font-22 margin-null margin-bottom">
                    Download
                  </p>
                  <section className="margin-bottom">
                    <div className="flex-container-space size-border column-gap-10 upper-border-radius">
                      <p className="font-weight-400 font-13 size-color flex-1">
                        Small
                      </p>
                      <p className="font-weight-700 font-13">640x960</p>

                      <input type="checkbox" className="margin-null"></input>
                    </div>
                    <div className="flex-container-space size-border column-gap-10 ">
                      <p className="font-weight-400 font-13 size-color flex-1">
                        Medium
                      </p>
                      <p className="font-weight-700 font-13">1920x2660</p>

                      <input type="checkbox" className="margin-null"></input>
                    </div>
                    <div className="flex-container-space size-border column-gap-10 ">
                      <p className="font-weight-400 font-13 size-color flex-1">
                        Big
                      </p>
                      <p className="font-weight-700 font-13">2400x3600</p>

                      <input type="checkbox" className="margin-null"></input>
                    </div>
                    <div className="flex-container-space size-border column-gap-10 lower-border-radius">
                      <p className="font-weight-400 font-13 size-color flex-1">
                        Orignal
                      </p>
                      <p className="font-weight-700 font-13">3850x5640</p>

                      <input type="checkbox" className="margin-null"></input>
                    </div>
                  </section>
                  <button className="text-colot-white download-button ">
                    Download For Free!
                  </button>
                </div>
                <div>
                  <p className="font-weight-500 font-22  margin-bottom">
                    Information
                  </p>
                  <section className=" image-api-data flex-container-space flex-wrap row-gap-20 ">
                    <section>
                      <div>
                        <p className="font-weight-600 head-color font-13 margin-bottom-8">
                          User
                        </p>
                        <p className="font-weight-600 font-16 head-value-color margin-null">
                          {user}
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-600 head-color font-13 margin-bottom-8">
                          Views
                        </p>
                        <p className="font-weight-600 font-16 head-value-color margin-null">
                          {views}
                        </p>
                      </div>
                    </section>
                    <section>
                      <div>
                        <p className="font-weight-600 head-color font-13 margin-bottom-8">
                          User ID
                        </p>
                        <p className="font-weight-600 font-16 head-value-color margin-null">
                          {user_id}
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-600 head-color font-13 margin-bottom-8">
                          Downloads
                        </p>
                        <p className="font-weight-600 font-16 head-value-color margin-null">
                          {downloads}
                        </p>
                      </div>
                    </section>
                    <section>
                      <div>
                        <p className="font-weight-600 head-color font-13 margin-bottom-8">
                          Type
                        </p>
                        <p className="font-weight-600 font-16 head-value-color margin-null">
                          {type}
                        </p>
                      </div>
                      <div>
                        <p className="font-weight-600 head-color font-13 margin-bottom-8">
                          Likes
                        </p>
                        <p className="font-weight-600 font-16 head-value-color margin-null">
                          {likes}
                        </p>
                      </div>
                    </section>
                  </section>
                </div>
              </div>
            </div>

            <div className="flex-container-row column-gap-20 details-tag">
              <p className="font-weight-700 font-18 flex-container-center">
                {" "}
                Tags:
              </p>
              <p className="flex-container-row flex-wrap font-weight-400 font-13 column-gap-10 tags">
                {tagValue.map((value) => {
                  return (
                    <p className="tags-style flex-container-center ">{value}</p>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export { ImageDetailDialog };