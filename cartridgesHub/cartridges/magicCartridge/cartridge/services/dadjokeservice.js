var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry') // https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2FDWAPI%2Fscriptapi%2Fhtml%2Fapi%2Fclass_dw_svc_LocalServiceRegistry.html&resultof=%22%6c%6f%63%61%6c%73%65%72%76%69%63%65%72%65%67%69%73%74%72%79%22%20%22%6c%6f%63%61%6c%73%65%72%76%69%63%65%72%65%67%69%73%74%72%69%22%20

var dadJokeAPIService = LocalServiceRegistry.createService('MagicCartridge.Dad.Service', {
    createRequest: function (svc, params) {
        svc.setRequestMethod('GET');
        svc.addHeader('Accept', 'application/json');
        return params;
    },
    parseResponse: function (svc, httpClient) {
        var result;

        try {
            result = JSON.parse(httpClient.text);
        } catch (e) {
            result = httpClient.text;
        }
        return result;
    }
});

module.exports = {
    dadJokeAPIService: dadJokeAPIService
}