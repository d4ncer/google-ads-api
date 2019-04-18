module.exports = {
    name: 'UserList',
    object: {
        name: {
            _type: 'string',
            _description:
                'Name of this user list. Depending on its access_reason, the user list name\nmay not be unique (e.g. if access_reason=SHARED)',
        },
        membership_life_span: {
            _type: 'int64',
            _description:
                "Number of days a user's cookie stays on your list since its most recent\naddition to the list. This field must be between 0 and 540 inclusive.\nHowever, for CRM based userlists, this field can be set to 10000 which\nmeans no expiration.\n\nIt'll be ignored for logical_user_list.",
        },
        membership_status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'OPEN', description: 'Open status - List is accruing members and can be targeted to.' },
                {
                    s: 'CLOSED',
                    description: 'Closed status - No new members being added. Cannot be used for targeting.',
                },
            ],
            _description:
                'Membership status of this user list. Indicates whether a user list is open\nor active. Only open user lists can accumulate more users and can be\ntargeted to.',
        },
        closing_reason: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'UNUSED', description: 'The userlist was closed because of not being used for over one year.' },
            ],
            _description:
                'Indicating the reason why this user list membership status is closed. It is\nonly populated on lists that were automatically closed due to inactivity,\nand will be cleared once the list membership status becomes open.',
        },
        id: { _type: 'int64', _description: 'Id of the user list.' },
        access_reason: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'OWNED', description: 'The resource is owned by the user.' },
                { s: 'SHARED', description: 'The resource is shared to the user.' },
                { s: 'LICENSED', description: 'The resource is licensed to the user.' },
                { s: 'SUBSCRIBED', description: 'The user subscribed to the resource.' },
                { s: 'AFFILIATED', description: 'The resource is accessible to the user.' },
            ],
            _description:
                'Indicates the reason this account has been granted access to the list.\nThe reason can be SHARED, OWNED, LICENSED or SUBSCRIBED.\n\nThis field is read-only.',
        },
        size_for_search: {
            _type: 'int64',
            _description:
                'Estimated number of users in this user list in the google.com domain.\nThese are the users available for targeting in Search campaigns.\nThis value is null if the number of users has not yet been determined.\n\nThis field is read-only.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the user list.\nUser list resource names have the form:\n\n`customers/{customer_id}/userLists/{user_list_id}`',
        },
        eligible_for_display: {
            _type: 'boolean',
            _description:
                'Indicates this user list is eligible for Google Display Network.\n\nThis field is read-only.',
        },
        read_only: {
            _type: 'boolean',
            _description:
                'A flag that indicates if a user may edit a list. Depends on the list\nownership and list type. For example, external remarketing user lists are\nnot editable.\n\nThis field is read-only.',
        },
        similar_user_list: {
            seed_user_list: { _type: 'string', _description: 'Seed UserList from which this list is derived.' },
            _oneof: 'userList',
        },
        size_range_for_display: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'LESS_THAN_FIVE_HUNDRED', description: 'User list has less than 500 users.' },
                { s: 'LESS_THAN_ONE_THOUSAND', description: 'User list has number of users in range of 500 to 1000.' },
                {
                    s: 'ONE_THOUSAND_TO_TEN_THOUSAND',
                    description: 'User list has number of users in range of 1000 to 10000.',
                },
                {
                    s: 'TEN_THOUSAND_TO_FIFTY_THOUSAND',
                    description: 'User list has number of users in range of 10000 to 50000.',
                },
                {
                    s: 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 50000 to 100000.',
                },
                {
                    s: 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 100000 to 300000.',
                },
                {
                    s: 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 300000 to 500000.',
                },
                {
                    s: 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION',
                    description: 'User list has number of users in range of 500000 to 1 million.',
                },
                {
                    s: 'ONE_MILLION_TO_TWO_MILLION',
                    description: 'User list has number of users in range of 1 to 2 millions.',
                },
                {
                    s: 'TWO_MILLION_TO_THREE_MILLION',
                    description: 'User list has number of users in range of 2 to 3 millions.',
                },
                {
                    s: 'THREE_MILLION_TO_FIVE_MILLION',
                    description: 'User list has number of users in range of 3 to 5 millions.',
                },
                {
                    s: 'FIVE_MILLION_TO_TEN_MILLION',
                    description: 'User list has number of users in range of 5 to 10 millions.',
                },
                {
                    s: 'TEN_MILLION_TO_TWENTY_MILLION',
                    description: 'User list has number of users in range of 10 to 20 millions.',
                },
                {
                    s: 'TWENTY_MILLION_TO_THIRTY_MILLION',
                    description: 'User list has number of users in range of 20 to 30 millions.',
                },
                {
                    s: 'THIRTY_MILLION_TO_FIFTY_MILLION',
                    description: 'User list has number of users in range of 30 to 50 millions.',
                },
                { s: 'OVER_FIFTY_MILLION', description: 'User list has over 50 million users.' },
            ],
            _description:
                'Size range in terms of number of users of the UserList, on the Google\nDisplay Network.\n\nThis field is read-only.',
        },
        integration_code: {
            _type: 'string',
            _description:
                'An ID from external system. It is used by user list sellers to correlate\nIDs on their systems.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'REMARKETING', description: 'UserList represented as a collection of conversion types.' },
                { s: 'LOGICAL', description: 'UserList represented as a combination of other user lists/interests.' },
                { s: 'EXTERNAL_REMARKETING', description: 'UserList created in the Google Ad Manager platform.' },
                { s: 'RULE_BASED', description: 'UserList associated with a rule.' },
                { s: 'SIMILAR', description: 'UserList with users similar to users of another UserList.' },
                {
                    s: 'CRM_BASED',
                    description:
                        'UserList of first-party CRM data provided by advertiser in the form of\nemails or other formats.',
                },
            ],
            _description: 'Type of this list.\n\nThis field is read-only.',
        },
        size_for_display: {
            _type: 'int64',
            _description:
                'Estimated number of users in this user list, on the Google Display Network.\nThis value is null if the number of users has not yet been determined.\n\nThis field is read-only.',
        },
        eligible_for_search: {
            _type: 'boolean',
            _description: 'Indicates if this user list is eligible for Google Search Network.',
        },
        rule_based_user_list: {
            date_specific_rule_user_list: {
                end_date: {
                    _type: 'string',
                    _description:
                        "End date of users visit. If set to 2037-12-30, then the list includes all\nusers after start_date. The date's format should be YYYY-MM-DD.\n\nRequired for creating a data specific rule user list.",
                },
                rule: {
                    rule_item_groups: {
                        _type: 'array',
                        _description:
                            'List of rule item groups that defines this rule.\nRule item groups are grouped together based on rule_type.',
                    },
                    rule_type: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _description:
                            'Rule type is used to determine how to group rule items.\n\nThe default is OR of ANDs (disjunctive normal form).\nThat is, rule items will be ANDed together within rule item groups and the\ngroups themselves will be ORed together.\n\nCurrently AND of ORs (conjunctive normal form) is only supported for\nExpressionRuleUserList.',
                    },
                },
                start_date: {
                    _type: 'string',
                    _description:
                        "Start date of users visit. If set to 2000-01-01, then the list includes all\nusers before end_date. The date's format should be YYYY-MM-DD.\n\nRequired for creating a data specific rule user list.",
                },
            },
            prepopulation_status: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'REQUESTED', description: 'Prepopoulation is being requested.' },
                    { s: 'FINISHED', description: 'Prepopulation is finished.' },
                    { s: 'FAILED', description: 'Prepopulation failed.' },
                ],
                _description:
                    "The status of pre-population. The field is default to NONE if not set which\nmeans the previous users will not be considered. If set to REQUESTED, past\nsite visitors or app users who match the list definition will be included\nin the list (works on the Display Network only). This will only\nadd past users from within the last 30 days, depending on the\nlist's membership duration and the date when the remarketing tag is added.\nThe status will be updated to FINISHED once request is processed, or FAILED\nif the request fails.",
            },
            expression_rule_user_list: {
                rule: {
                    rule_item_groups: {
                        _type: 'array',
                        _description:
                            'List of rule item groups that defines this rule.\nRule item groups are grouped together based on rule_type.',
                    },
                    rule_type: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _description:
                            'Rule type is used to determine how to group rule items.\n\nThe default is OR of ANDs (disjunctive normal form).\nThat is, rule items will be ANDed together within rule item groups and the\ngroups themselves will be ORed together.\n\nCurrently AND of ORs (conjunctive normal form) is only supported for\nExpressionRuleUserList.',
                    },
                },
            },
            combined_rule_user_list: {
                left_operand: {
                    rule_item_groups: {
                        _type: 'array',
                        _description:
                            'List of rule item groups that defines this rule.\nRule item groups are grouped together based on rule_type.',
                    },
                    rule_type: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _description:
                            'Rule type is used to determine how to group rule items.\n\nThe default is OR of ANDs (disjunctive normal form).\nThat is, rule items will be ANDed together within rule item groups and the\ngroups themselves will be ORed together.\n\nCurrently AND of ORs (conjunctive normal form) is only supported for\nExpressionRuleUserList.',
                    },
                },
                right_operand: {
                    rule_item_groups: {
                        _type: 'array',
                        _description:
                            'List of rule item groups that defines this rule.\nRule item groups are grouped together based on rule_type.',
                    },
                    rule_type: {
                        _type: 'enum',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'Not specified.' },
                            {
                                s: 'UNKNOWN',
                                description: 'Used for return value only. Represents value unknown in this version.',
                            },
                            { s: 'AND_OF_ORS', description: 'Conjunctive normal form.' },
                            { s: 'OR_OF_ANDS', description: 'Disjunctive normal form.' },
                        ],
                        _description:
                            'Rule type is used to determine how to group rule items.\n\nThe default is OR of ANDs (disjunctive normal form).\nThat is, rule items will be ANDed together within rule item groups and the\ngroups themselves will be ORed together.\n\nCurrently AND of ORs (conjunctive normal form) is only supported for\nExpressionRuleUserList.',
                    },
                },
                rule_operator: {
                    _type: 'enum',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'AND', description: 'A AND B.' },
                        { s: 'AND_NOT', description: 'A AND NOT B.' },
                    ],
                    _description:
                        'Operator to connect the two operands.\n\nRequired for creating a combined rule user list.',
                },
            },
            _oneof: 'userList',
        },
        logical_user_list: {
            rules: {
                _type: 'array',
                _description:
                    'Logical list rules that define this user list. The rules are defined as a\nlogical operator (ALL/ANY/NONE) and a list of user lists. All the rules are\nANDed when they are evaluated.\n\nRequired for creating a logical user list.',
            },
            _oneof: 'userList',
        },
        description: { _type: 'string', _description: 'Description of this user list.' },
        crm_based_user_list: {
            app_id: {
                _type: 'string',
                _description:
                    'A string that uniquely identifies a mobile application from which the data\nwas collected to the Google Ads API.\nFor iOS, the ID string is the 9 digit string that appears at the end of an\nApp Store URL (e.g., "476943146" for "Flood-It! 2" whose App Store link is\nhttp://itunes.apple.com/us/app/flood-it!-2/id476943146).\nFor Android, the ID string is the application\'s package name\n(e.g., "com.labpixies.colordrips" for "Color Drips" given Google Play link\nhttps://play.google.com/store/apps/details?id=com.labpixies.colordrips).\nRequired when creating CrmBasedUserList for uploading mobile advertising\nIDs.',
            },
            data_source_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'FIRST_PARTY', description: 'The uploaded data is first-party data.' },
                    {
                        s: 'THIRD_PARTY_CREDIT_BUREAU',
                        description: 'The uploaded data is from a third-party credit bureau.',
                    },
                    { s: 'THIRD_PARTY_VOTER_FILE', description: 'The uploaded data is from a third-party voter file.' },
                ],
                _description:
                    'Data source of the list. Default value is FIRST_PARTY.\nOnly whitelisted customers can create third-party sourced CRM lists.',
            },
            upload_key_type: {
                _type: 'enum',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    {
                        s: 'CONTACT_INFO',
                        description:
                            'Members are matched from customer info such as email address, phone\nnumber or physical address.',
                    },
                    {
                        s: 'CRM_ID',
                        description: 'Members are matched from a user id generated and assigned by the\nadvertiser.',
                    },
                    { s: 'MOBILE_ADVERTISING_ID', description: 'Members are matched from mobile advertising ids.' },
                ],
                _description:
                    'Matching key type of the list.\nMixed data types are not allowed on the same list.\nThis field is required for an ADD operation.',
            },
            _oneof: 'userList',
        },
        size_range_for_search: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'LESS_THAN_FIVE_HUNDRED', description: 'User list has less than 500 users.' },
                { s: 'LESS_THAN_ONE_THOUSAND', description: 'User list has number of users in range of 500 to 1000.' },
                {
                    s: 'ONE_THOUSAND_TO_TEN_THOUSAND',
                    description: 'User list has number of users in range of 1000 to 10000.',
                },
                {
                    s: 'TEN_THOUSAND_TO_FIFTY_THOUSAND',
                    description: 'User list has number of users in range of 10000 to 50000.',
                },
                {
                    s: 'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 50000 to 100000.',
                },
                {
                    s: 'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 100000 to 300000.',
                },
                {
                    s: 'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND',
                    description: 'User list has number of users in range of 300000 to 500000.',
                },
                {
                    s: 'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION',
                    description: 'User list has number of users in range of 500000 to 1 million.',
                },
                {
                    s: 'ONE_MILLION_TO_TWO_MILLION',
                    description: 'User list has number of users in range of 1 to 2 millions.',
                },
                {
                    s: 'TWO_MILLION_TO_THREE_MILLION',
                    description: 'User list has number of users in range of 2 to 3 millions.',
                },
                {
                    s: 'THREE_MILLION_TO_FIVE_MILLION',
                    description: 'User list has number of users in range of 3 to 5 millions.',
                },
                {
                    s: 'FIVE_MILLION_TO_TEN_MILLION',
                    description: 'User list has number of users in range of 5 to 10 millions.',
                },
                {
                    s: 'TEN_MILLION_TO_TWENTY_MILLION',
                    description: 'User list has number of users in range of 10 to 20 millions.',
                },
                {
                    s: 'TWENTY_MILLION_TO_THIRTY_MILLION',
                    description: 'User list has number of users in range of 20 to 30 millions.',
                },
                {
                    s: 'THIRTY_MILLION_TO_FIFTY_MILLION',
                    description: 'User list has number of users in range of 30 to 50 millions.',
                },
                { s: 'OVER_FIFTY_MILLION', description: 'User list has over 50 million users.' },
            ],
            _description:
                'Size range in terms of number of users of the UserList, for Search ads.\n\nThis field is read-only.',
        },
        basic_user_list: {
            actions: { _type: 'array', _description: 'Actions associated with this user list.' },
            _oneof: 'userList',
        },
        account_user_list_status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'The access is enabled.' },
                { s: 'DISABLED', description: 'The access is disabled.' },
            ],
            _description:
                'Indicates if this share is still enabled. When a UserList is shared with\nthe user this field is set to ENABLED. Later the userList owner can decide\nto revoke the share and make it DISABLED.\nThe default value of this field is set to ENABLED.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}