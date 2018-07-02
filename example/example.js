/**
 * @apiDefine AuthHeader
 * @apiHeader {String} access-token API access token
 */

/**
 * @apiDefine UserSuccess
 * @apiSuccess {String} id User's ID
 * @apiSuccess {String[]} roles User's roles
 */

/**
 * @apiDefine UserNotFoundError
 * @apiError (404) {Object} error Error object
 * @apiError (404) {String} error.code=UserNotFound Error code
 */

/**
 * @api {post} /users Create user.
 * @apiName CreateUser
 * @apiGroup User
 * @apiDescription Create a new user.
 *
 * @apiUse AuthHeader
 * @apiParam {String} email User's email address.
 * @apiParam {String} password User's password.
 * @apiParam {String[]} roles User's new roles.
 * @apiParam {Object[]} [addresses] User's addresses.
 * @apiParam {String} addresses.name Name of place/address.
 *
 * @apiSuccess (201) {String} id User's ID
 * @apiSuccess (201) {String[]} roles User's roles
 */

/**
 * @api {get} /users/:id Retrieve user.
 * @apiName GetUser
 * @apiGroup User
 * @apiDescription Fetch user info.
 *
 * @apiUse AuthHeader
 * @apiParam {Number} id User's unique ID.
 *
 * @apiUse UserSuccess
 * @apiUse UserNotFoundError
 */

/**
 * @api {put} /users/:id Update user information.
 * @apiName UpdateUser
 * @apiGroup User
 * @apiDescription Update user info.
 *
 * @apiUse AuthHeader
 * @apiParam {Number} id User's unique ID.
 * @apiParam {String} [email] User's email address.
 * @apiParam {String} [password] User's password.
 * @apiParam {String[]} [roles] User's new roles.
 * @apiParam {Object[]} [addresses] User's addresses.
 * @apiParam {String} addresses.name Name of place/address.
 *
 * @apiUse UserSuccess
 * @apiUse UserNotFoundError
 */

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiDescription Delete user.
 *
 * @apiUse AuthHeader
 * @apiParam {Number} id User's unique ID.
 *
 * @apiUse UserSuccess
 * @apiUse UserNotFoundError
 *
 * @apiDeprecated Contact admin instead for manual deletion.
 */
