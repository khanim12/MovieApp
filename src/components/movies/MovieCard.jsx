import React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";

function MovieCard({ img, key, desc, title }) {
  return (
    <div key={key} className="mov-card  max-[650px]:w-[350px] max-[650px]:mx-6     md:w-[320px] max-[768px]:w-[350px]   ">
      <div className=" flex items-start item-card">
        <div
          className="overlay"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="image">
          <img className="movieImg" src={img} alt="" />
        </div>
        <div>
          <div className="content flex flex-col m-1 gap-2 text-white">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-xs">Genre : Drama</p>
            <div className="flex gap-2 items-center justify-center">
              <div>
                <p>304,569</p>
                <span className="text-xs" style={{ fontSize: "10px" }}>
                  Fundrumming
                </span>
              </div>
              <div>
                <p>304,569</p>
                <span style={{ fontSize: "10px" }} className="text-xs">
                  Fundrumming
                </span>
              </div>
              <div>
                <p>98%</p>
                <span style={{ fontSize: "10px" }} className="text-xs">
                  Mood Match
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // {/* <Card sx={{ display: "flex" }}>
    //     <CardMedia
    //       className="movieImg"

    //       component="img"
    //       sx={{ width: 151,backgroundImage:`url(${img})` }}
    //       image={img}
    //       alt="Live from space album cover"
    //     />
    //     <Box sx={{ display: "flex", flexDirection: "column" }}>
    //       <CardContent sx={{ flex: "1 0 auto" }}>
    //         <Typography component="div" variant="h5">
    //           {title}
    //         </Typography>
    //         <Typography
    //           variant="subtitle1"
    //           component="div"
    //           sx={{ color: "text.secondary" }}
    //         >
    //           {desc}
    //         </Typography>
    //       </CardContent>
    //     </Box>
    //   </Card> */}
  );
}

export default MovieCard;
