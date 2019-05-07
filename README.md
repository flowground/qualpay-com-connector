# ![LOGO](logo.png) Qualpay Payment Gateway **flow**ground Connector

## Description

A generated **flow**ground connector for the Qualpay Payment Gateway API (version 1.7).

Generated from: https://api.apis.guru/v2/specs/qualpay.com/1.7/swagger.json<br/>
Generated at: 2019-05-07T17:43:46+03:00

## API Description

This document describes the Qualpay Payment Gateway API.

## Authorization

Supported authorization schemes:
- Basic Authentication

## Actions

### Card Type Information

> Get Card Type Information for Visa, Mastercard and Discover.

*Tags:* `payment-gateway`

### Authorize transaction

> An approved transaction will continue to be open until it expires or a capture message is received. Authorizations are automatically voided if they are not captured within 28 days, although most issuing banks will release the hold after 24 hours in retail environments or 7 days in card not present environments.

*Tags:* `payment-gateway`

### Close batch

> This message is used when the timing of the batch close needs to be controlled by the merchant rather than relying on the daily automatic batch close.

*Tags:* `payment-gateway`

### Capture authorized transaction

> A capture message may be completed for any amount up to the originally authorized amount.

*Tags:* `payment-gateway`

#### Input Parameters
* `pgIdOrig` - _required_ - pgIdOrig

### Issue credit to cardholder

> A non-referenced credit requires that the cardholder data be provided in the message. This message is only available during the first 30 days of account production activity - the refund message should generally be used to return money to the cardholder.

*Tags:* `payment-gateway`

### Send transaction receipt email

> Sent the transaction receipt to multiple email addresses. Receipts can be sent only for successful transactions.

*Tags:* `payment-gateway`

#### Input Parameters
* `pgId` - _required_ - pgId

### emulatorHandler

*Tags:* `pg-emulator`

### Force transaction approval

> Can be used when an online authorization request received a 'declined' reason code and the merchant received an authorization from a voice or automated response (ARU) system. The required fields are the same as a sale or authorization request, except that the expiration date (exp_date) is not required, and the 6-character authorization code (auth_code) IS required.

*Tags:* `payment-gateway`

### Refund previously captured transaction

> Returns money to the cardholder from a previously captured transaction. Multiple refunds are allowed per captured transaction, provided that the sum of all refunds does not exceed the original captured transaction amount. Authorizations that have not been captured are not eligible for refund.

*Tags:* `payment-gateway`

#### Input Parameters
* `pgIdOrig` - _required_ - pgIdOrig

### Sale (Auth + Capture)

> This message will perform an authorization of the transaction, and if approved will immediately capture the transaction to be included in the next batch close. It is used in card present environments, and also card not present environments where no physical goods are being shipped.

*Tags:* `payment-gateway`

### Tokenize card

> Once stored, a unique card identifier is returned for use in future transactions. Optionally, tokenization can be requested in an auth, verify, force, credit, or sale message by sending the tokenize field set to true.

*Tags:* `payment-gateway`

### Verify Card

> A verify message will return success if the cardholder information was verified by the issuer. If AVS or CVV data is included in the message, then the AVS or CVV result code will be returned in the response message.

*Tags:* `payment-gateway`

### Void previously authorized transaction

> Authorizations can be voided at any time. Captured transactions can be voided until the batch is closed.

*Tags:* `payment-gateway`

#### Input Parameters
* `pgIdOrig` - _required_ - pgIdOrig

## License

**flow**ground :- Telekom iPaaS / qualpay-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
