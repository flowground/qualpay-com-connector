/**
 * Auto-generated action file for "Qualpay Payment Gateway" API.
 *
 * Generated at: 2019-05-07T14:43:46.496Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / qualpay-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Sale'
 * Endpoint Path: '/sale'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "amt_convenience_fee": "amt_convenience_fee",
    "amt_fbo": "amt_fbo",
    "amt_tax": "amt_tax",
    "amt_tran": "amt_tran",
    "amt_tran_fee": "amt_tran_fee",
    "auth_code": "auth_code",
    "avs_address": "avs_address",
    "avs_zip": "avs_zip",
    "card_id": "card_id",
    "card_number": "card_number",
    "card_swipe": "card_swipe",
    "cardholder_name": "cardholder_name",
    "cavv_3ds": "cavv_3ds",
    "billing_addr1": "billing_addr1",
    "billing_addr2": "billing_addr2",
    "billing_city": "billing_city",
    "billing_country": "billing_country",
    "billing_country_code": "billing_country_code",
    "billing_state": "billing_state",
    "billing_zip": "billing_zip",
    "billing_zip4": "billing_zip4",
    "customer_email": "customer_email",
    "customer_firm_name": "customer_firm_name",
    "customer_first_name": "customer_first_name",
    "customer_last_name": "customer_last_name",
    "customer_phone": "customer_phone",
    "shipping_addresses": "shipping_addresses",
    "customer": "customer",
    "customer_code": "customer_code",
    "customer_id": "customer_id",
    "cvv2": "cvv2",
    "dba_name": "dba_name",
    "dda_number": "dda_number",
    "developer_id": "developer_id",
    "echo_fields": "echo_fields",
    "email_receipt": "email_receipt",
    "exp_date": "exp_date",
    "fbo_id": "fbo_id",
    "line_items": "line_items",
    "loc_id": "loc_id",
    "mc_ucaf_data": "mc_ucaf_data",
    "mc_ucaf_ind": "mc_ucaf_ind",
    "merch_ref_num": "merch_ref_num",
    "merchant_id": "merchant_id",
    "moto_ecomm_ind": "moto_ecomm_ind",
    "partial_auth": "partial_auth",
    "pg_id": "pg_id",
    "profile_id": "profile_id",
    "purchase_id": "purchase_id",
    "report_data": "report_data",
    "retry_id": "retry_id",
    "session_id": "session_id",
    "subscription_id": "subscription_id",
    "tokenize": "tokenize",
    "tr_number": "tr_number",
    "tran_currency": "tran_currency",
    "type_id": "type_id",
    "user_id": "user_id",
    "vendor_id": "vendor_id",
    "xid_3ds": "xid_3ds",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['basicAuth'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: 'Sale',
        pathName: '/sale',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}