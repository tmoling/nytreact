//import request from 'request';
import axios from 'axios';

export default {

    getArticles: function (queryTerm) {

        if (queryTerm.topic) {

            return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + "35fbaef7c1814ef59add17fbceef1719&q=" + queryTerm.topic)


        }


        else if (queryTerm.topic && queryTerm.startYear) {
            return axios.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                    'api-key': "35fbaef7c1814ef59add17fbceef1719",
                    'q': queryTerm.topic,
                    'begin_date': queryTerm.startYear + "0101"
                }
            })
        }

        else if (queryTerm.topic && queryTerm.startYear && queryTerm.endYear) {
            return axios.get({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                qs: {
                    'api-key': "35fbaef7c1814ef59add17fbceef1719",
                    'q': queryTerm.topic,
                    'begin_date': queryTerm.startYear + "0101",
                    'end_date': queryTerm.endYear + "0101"
                }
            })
        }
    },


    saveArticles: function (savedArticle) {

           

       return  axios.post("/api/savedArticle",savedArticle)
        .then(response => { 
    console.log(response)
})
.catch(error => {
    console.log(error.response)
});



    },


    loadArticles: function(){
        return axios.get("api/savedArticle")
    },

    deleteArticle: function(id) {
        return axios.delete("/api/savedArticle/" + id);
    }

};