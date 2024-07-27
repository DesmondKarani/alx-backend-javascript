const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
    const port = 7865;
    const url = `http://localhost:${port}/`;

    before((done) => {
        app.listen(port, () => {
            done();
        });
    });

    it('should return status code 200', (done) => {
        request(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request(url, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
