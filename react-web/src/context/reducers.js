const initialState = {
  teamMember: {
    _id: "",
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    memberId: "",
    role: "",
  },
  teamMemberLookup: {
    searchValue: "",
    message: "Showing most recent teamMember entries",
    type: "recent",
  },
  teamMemberList: [],
  system: {
    _id: "5f972016587404175f973563",
    name: "",
    nickName: "",
    teamMembers: [],
  },
  systemLookup: {
    searchValue: "",
    message: "Showing most recent system entries",
    type: "recent",
  },
  systemList: [],
}

const types = {
  TEAM_MEMBER_UPDATE: "TEAM_MEMBER_UPDATE",
  TEAM_MEMBER_SET_INITIAL_STATE: "TEAM_MEMBER_SET_INITIAL_STATE",
  TEAM_MEMBER_LOOKUP_UPDATE: "TEAM_MEMBER_LOOKUP_UPDATE",
  TEAM_MEMBER_LOOKUP_SET_INITIAL_STATE: "TEAM_MEMBER_LOOKUP_SET_INITIAL_STATE",
  TEAM_MEMBER_LIST_UPDATE: "TEAM_MEMBER_LIST_UPDATE",
  TEAM_MEMBER_LIST_SET_INITIAL_STATE: "TEAM_MEMBER_LIST_SET_INITIAL_STATE",
  SYSTEM_UPDATE: "SYSTEM_UPDATE",
  SYSTEM_SET_INITIAL_STATE: "SYSTEM_SET_INITIAL_STATE",
  SYSTEM_LOOKUP_UPDATE: "SYSTEM_LOOKUP_UPDATE",
  SYSTEM_LOOKUP_SET_INITIAL_STATE: "SYSTEM_LOOKUP_SET_INITIAL_STATE",
  SYSTEM_LIST_UPDATE: "SYSTEM_LIST_UPDATE",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEAM_MEMBER_UPDATE:
      return {
        ...state,
        teamMember: action.teamMemberData
      }
    case types.TEAM_MEMBER_SET_INITIAL_STATE:
      return {
        ...state,
        teamMember: initialState.teamMember
    }
    case types.TEAM_MEMBER_LOOKUP_UPDATE:
      return {
        ...state,
        teamMemberLookup: action.teamMemberLookupData
      }
    case types.TEAM_MEMBER_LOOKUP_SET_INITIAL_STATE:
      return {
        ...state,
        teamMemberLookup: initialState.teamMemberLookup
    }
    case types.TEAM_MEMBER_LIST_UPDATE:
      return {
        ...state,
        teamMemberList: action.teamMemberListData
      }
    case types.TEAM_MEMBER_LIST_SET_INITIAL_STATE:
      return {
        ...state,
        teamMemberList: initialState.teamMemberList
    }
    case types.SYSTEM_LIST_UPDATE:
      return {
        ...state,
        systemList: action.systemListData
      }
    case types.SYSTEM_LIST_SET_INITIAL_STATE:
      return {
        ...state,
        systemList: initialState.systemList
    }
    case types.SYSTEM_UPDATE:
      return {
        ...state,
        system: action.systemData
      }
    case types.SYSTEM_SET_INITIAL_STATE:
      return {
        ...state,
        system: initialState.system
    }
    case types.SYSTEM_LOOKUP_UPDATE:
      return {
        ...state,
        systemLookup: action.systemLookupData
      }
    case types.SYSTEM_LOOKUP_SET_INITIAL_STATE:
      return {
        ...state,
        systemLookup: initialState.systemLookup
    }
    default:
      throw new Error("Unexpected action")
  }
}

export { initialState, types, reducer }
