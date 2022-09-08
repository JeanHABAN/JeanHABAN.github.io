/* eslint-disable*/;
"use strict";
/**
 * 
 * @param {boolean} toConfirm if it is true means that salesman is salaried, else salesman is not salaried 
 * @param {Number} sales have passed to if condition, zero commission if sales is less than 300, 1% commission if sales is between 
 *                  300 and 500 inclusive
 * @returns return commission after verifying a condition
 */

 
function computeSalesCommission(toConfirm, sales) {

    let commission = null;
    if (toConfirm === true) {
        if (sales < 300) {
            commission = 0;
            return commission;

        }
        else if (sales >= 300 && sales <= 500) {
            commission = sales * 0.01;
            return commission;
        }
        else {
            commission = (sales - 500) * 0.02 + 500 * 0.01;
            return commission;
        }

    } else {
        if (sales < 300) {
            commission = 0;
            return commission;

        }
        else if (sales >= 300 && sales <= 500) {
            commission = sales * 0.02;
            return commission;
        } else {
            commission = (sales - 500) * 0.03 + 500 * 0.02;
            return commission;
        }

    }

}
// helper function is used to decide a category of salesman
function toConfirm() {
    let conf = confirm("are you salaried?");
    return conf;
}
const assert = require("assert");
describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });