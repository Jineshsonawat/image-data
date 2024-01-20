import { useMain } from "../../context/main-context";

const searchKeywords = [
  "Digital",
  "Computer",
  "Codierung",
  "Tech",
  "Netz",
  "Code",
  "finanzieren",
  "Marketing",
];
function ShowDialog() {
  const { imageDataFromApi, loader, clickToViewDetails } = useMain();

  if (loader === "loading") {
    return (
      <h1 className="flex-container-center font-40">Loading! please wait.</h1>
    );
  } else if (loader === "success") {
    if (imageDataFromApi.length > 0) {
      return (
        <>
          <div className="dialog-section flex-container-row flex-wrap row-gap-20 column-gap-45">
            {imageDataFromApi.map((item) => {
              const { previewURL, tags } = item;
              const tagValue = tags.split(",");

              return (
                <>
                  <div>
                    <div onClick={() => clickToViewDetails(item)}>
                      <img
                        src={previewURL}
                        alt=""
                        className="small-dialog-image"
                      ></img>
                    </div>
                    <div className="flex-container-row flex-wrap font-weight-400 font-13 column-gap-10 tags">
                      {tagValue.map((value) => {
                        return (
                          <p className="tags-style flex-container-center ">
                            {value}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      );
    } else {
      return (
        <h1 className="flex-container-center font-40">
          Not Found any data! Search with different keyword.
        </h1>
      );
    }
  } else {
    return (
      <h1 className="flex-container-center font-40">
        Looks like something broke! Please Refresh.
      </h1>
    );
  }
}

function HomeDialog() {
  return (
    <dialog open className="dialog">
      <div className="dialog-navbar flex-container-center column-gap-15">
        {searchKeywords.map((keyword) => {
          return (
            <p className="keyword font-weight-500 font-13 flex-container-center">
              {keyword}
            </p>
          );
        })}
      </div>
      <ShowDialog />
    </dialog>
  );
}

export { HomeDialog };
