const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)


exports.GetNews = (category = null) => {
    return newsapi.v2.topHeadlines({
        category,
        language: 'en',
    })
}

exports.NEWS_API_ALL_CATEGORIES = [
    'business', 'entertainment', 'general', 'health',
    'science', 'sports', "technology"
]