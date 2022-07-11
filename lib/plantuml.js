const deflate = require('./rawdeflate');
const encode64 = require('./encoding.js');
(function plantuml() {
    function generateUrl (format = 'img', code) {
        code = unescape(encodeURIComponent(code));
        const compressed  = deflate(code);
        const encoded = encode64(compressed, 9);
        return `http://www.plantuml.com/plantuml/${format}/${encoded}`;
    }
    const plantuml = {};
    plantuml.generateUrl = generateUrl;
    module.exports = plantuml;
})();