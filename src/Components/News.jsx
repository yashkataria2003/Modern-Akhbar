import React, { useEffect, useState } from 'react'
import Newsitem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = (async () => {
    props.updateProgress(0)

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);
    props.updateProgress(30)

    let parseData = await data.json();
    props.updateProgress(60)

    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)

    setLoading(false)
    props.updateProgress(100);
  });

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Modern Akhbar`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)

  }
  return (
    <>
      <h1 className='text-center font-semibold text-4xl my-3 text-white'>Modern Akhbar - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Loading />}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Loading />} >
        <div className="w-auto h-auto flex flex-row flex-wrap justify-center items-center px-3">
          <div className="grid grid-cols-4 place-content-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              {
                articles.map((element) => {
                  return (
                    <div className="flex justify-center items-start my-4" key={element.url}>
                      <Newsitem classtitle={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                    </div>
                  )
                }
                )
              }
          </div>
        </div >
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 5
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News;

