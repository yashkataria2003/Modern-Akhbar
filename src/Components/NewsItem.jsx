import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props
    return (
        <>
            <div className="flex justify-between items-center flex-col border-[#494949] rounded-md h-auto w-[90%] p-5 border-[0.01rem] max-lg:w-[90%] max-md:w-[90%] max-sm:w-[90%] bg-[#275784be]"> 
                <img src={imageUrl ? imageUrl : "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124.png"} className="rounded" alt="..." />
                <div className="flex justify-center h-auto flex-col gap-y-2">
                    <h5 className="font-semibold text-white">{title}</h5>
                    <span className="bg-[#ec2525] flex justify-center items-center w-max text-white rounded-md px-2 h-[1.3rem]">{source}</span>
                    <p className="text-base text-white">{description}</p>
                    <p className="font-semibold text-white"><small>By {author ? author : "Unknown"} on {new Date(publishedAt).toDateString()}</small></p>
                    <a href={newsUrl} className="bg-[#0e171e] text-white flex justify-center items-center w-max rounded-md px-2 h-[1.7rem] self-center border-[0.01rem] border-[#3e3e3e] hover:bg-white hover:text-[#0e171e]">Read More ...</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem
