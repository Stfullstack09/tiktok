const actionType = Object.freeze({
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE_APP: 'CHANGE_LANGUAGE',

    SUGGESTED_ACCOUNTS_SUCCESS: 'SUGGESTED_ACCOUNTS_SUCCESS',
    SUGGESTED_ACCOUNTS_FAILED: 'SUGGESTED_ACCOUNTS_FAILED',
    SUGGESTED_ACCOUNTS_FAGE_SUCCESS: 'SUGGESTED_ACCOUNTS_FAGE_SUCCESS',

    LOGIN_APP_SUCCESS: 'LOGIN_APP_SUCCESS',
    LOGIN_APP_FAILED: 'LOGIN_APP_FAILED',
    LOGIN_SAVE_COOKIE_SUCCESS: 'LOGIN_SAVE_COOKIE_SUCCESS',

    GET_VIDEO_LIMIT_SUCCESS: 'GET_VIDEO_LIMIT_SUCCESS',
    GET_VIDEO_LIMIT_FAILED: 'GET_VIDEO_LIMIT_FAILED',
    GET_VIDEO_META_DATA_SUCCESS: 'GET_VIDEO_META_DATA_SUCCESS',

    GET_ONE_VIDEO_LIMIT_UUID_SUCCESS: 'GET_ONE_VIDEO_LIMIT_UUID_SUCCESS',
    GET_ONE_VIDEO_LIMIT_UUID_FAILED: 'GET_ONE_VIDEO_LIMIT_UUID_FAILED',

    GET_LIST_COMMENT_SUCCESS: 'GET_LIST_COMMENT_SUCCESS',
    GET_LIST_COMMENT_FAILED: 'GET_LIST_COMMENT_FAILED',

    CREATE_NEW_COMMENT_SUCCESS: 'CREATE_NEW_COMMENT_SUCCESS',
    CREATE_NEW_COMMENT_FAILED: 'CREATE_NEW_COMMENT_FAILED',

    DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
    DELETE_COMMENT_FAILED: 'DELETE_COMMENT_FAILED',

    LIKE_COMMENT_SUCCESS: 'LIKE_COMMENT_SUCCESS',
    LIKE_COMMENT_FAILED: 'LIKE_COMMENT_FAILED',

    UN_LIKE_COMMENT_SUCCESS: 'LIKE_COMMENT_SUCCESS',
    UN_LIKE_COMMENT_FAILED: 'LIKE_COMMENT_FAILED',

    LIKE_ONE_VIDEO_SUCCESS: 'LIKE_ONE_VIDEO_SUCCESS',
    LIKE_ONE_VIDEO_FAILED: 'LIKE_ONE_VIDEO_FAILED',

    UN_LIKE_ONE_VIDEO_SUCCESS: 'LIKE_ONE_VIDEO_SUCCESS',
    UN_LIKE_ONE_VIDEO_FAILED: 'LIKE_ONE_VIDEO_FAILED',

    SEARCH_USER_SUCCESS: 'SEARCH_USER_SUCCESS',
    SEARCH_USER_FAILED: 'SEARCH_USER_FAILED',

    GET_LIST_FOLLOW_SUCCESS: 'GET_LIST_FOLLOW_SUCCESS',
    GET_LIST_FOLLOW_FAILED: 'GET_LIST_FOLLOW_FAILED',
    GET_META_FOLLOW_SUCCESS: 'GET_META_FOLLOW_SUCCESS',

    GET_LIST_VIDEO_LIMIT_FOLLOW_SUCCESS: 'GET_LIST_VIDEO_LIMIT_FOLLOW_SUCCESS',
    GET_META_VIDEO_LIMIT_FOLLOW_SUCCESS: 'GET_META_VIDEO_LIMIT_FOLLOW_SUCCESS',

    GET_LIST_USER_SUGGEST_FOLLOW_SUCCESS: 'GET_LIST_USER_SUGGEST_FOLLOW_SUCCESS',
    GET_LIST_USER_SUGGEST_FOLLOW_FAILED: 'GET_LIST_USER_SUGGEST_FOLLOW_FAILED',

    FOLLOW_ONE_ACCOUNT_SUCCESS: 'FOLLOW_ONE_ACCOUNT_SUCCESS',
    FOLLOW_ONE_ACCOUNT_FAILED: 'FOLLOW_ONE_ACCOUNT_FAILED',

    UN_FOLLOW_ONE_ACCOUNT_SUCCESS: 'FOLLOW_ONE_ACCOUNT_SUCCESS',
    UN_FOLLOW_ONE_ACCOUNT_FAILED: 'FOLLOW_ONE_ACCOUNT_FAILED',

    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',
});

export default actionType;
