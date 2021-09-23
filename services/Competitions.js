const axios = require('axios')
const {
    COMPETITIONS_API
} = require('../constants')


exports.GetCompetitions = (str) => {
    return axios.get(`${COMPETITIONS_API}/api/v1/${str}`);
}

exports.ALL_OPTIONS_FOR_COMPETITIONS = [
    'all',
    'codeforces',
    'codeforces_gym',
    'top_coder',
    'at_coder',
    'code_chef',
    'cs_academy',
    'hacker_rank',
    'hacker_earth',
    'kick_start',
    'leet_code',
]

 