import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=mumbai,pune,goa"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://drive.google.com/thumbnail?id=1GiTIUGE5G0rxy5velawAwu4nUQatd5uF&sz=w1000"
              alt=""
              className="featuredImg"
            />
            <br></br>
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          {/* <div className="featuredItem">
            <img
              src=""
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div> */}

          <div className="featuredItem">
            <img src="https://drive.google.com/thumbnail?id=1e0IAZOT7KM8z1alEy20ONGQ6fo3HB-Rj&sz=w1000" 
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default Featured;
