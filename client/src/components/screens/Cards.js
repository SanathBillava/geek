import React from 'react'

export const Cards = (props) => {
    let { datas: { poster, genre, director, title, stars, language, pageViews } } = props

    return (
        <React.Fragment>
            <div className="main-div">
                <div className="img-div">
                    <img src={poster} alt="img" />
                </div>

                <div className="info-div">

                    <div className="inn-div">
                        <p>{title}</p>
                        <p>Genre: {genre}</p>
                        <p>Director: {director.map((data) => {
                            return data
                        })}</p>

                        <p >Starring: {stars.map((data) => {
                            return data
                        })}</p>

                        <p>Language:{language}</p>
                        <p><span style={{ color: "blue" }}>{pageViews} views</span> | Voted by 0 People</p>
                    </div>

                </div>
            </div>

            <div className="butt-div">
                <button>Watch-Trailer</button>
            </div>
        </React.Fragment>

    )
}