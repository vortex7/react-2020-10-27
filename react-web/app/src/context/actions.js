import { types } from "./reducers"
export const useActions = (state, dispatch) => {
  async function teamMemberRetrieve() {
    let teamMemberData = await getTeamMember()

    dispatch({ type: types.TEAM_MEMBER_UPDATE, teamMemberData: teamMemberData })
  }

  function teamMemberUpdate(teamMemberData) {
    dispatch({ type: types.TEAM_MEMBER_UPDATE, teamMemberData: teamMemberData })
  }

  function teamMemberSetInitialState() {
    dispatch({ type: types.TEAM_MEMBER_SET_INITIAL_STATE })
  }

  async function teamMemberCreate() {
    createTeamMember()
  }

  async function teamMemberSave() {
    saveTeamMember()
  }

  async function teamMemberDelete() {
    deleteTeamMember()

    let teamMemberListData = await getTeamMembers()

    dispatch({ type: types.TEAM_MEMBER_LIST_UPDATE, teamMemberListData: teamMemberListData })
  }

  async function teamMemberListRetrieve() {
    let teamMemberListData = await getTeamMembers()

    dispatch({ type: types.TEAM_MEMBER_LIST_UPDATE, teamMemberListData: teamMemberListData })
  }

  function teamMemberLookupUpdate(teamMemberLookupData) {
    dispatch({ type: types.TEAM_MEMBER_LOOKUP_UPDATE, teamMemberLookupData: teamMemberLookupData })
  }

  function teamMemberLookupSetInitialState() {
    dispatch({ type: types.TEAM_MEMBER_LOOKUP_SET_INITIAL_STATE })
  }

  async function systemRetrieve() {
    console.log("calling getSystem()")
    let systemData = await getSystem()

    console.log("calling dispatch")
    dispatch({ type: types.SYSTEM_UPDATE, systemData: systemData })
  }
 
  async function systemUpdate(systemData) {
    await saveSystem(systemData)
    dispatch({ type: types.SYSTEM_UPDATE, systemData: systemData })
  }

  function systemSetInitialState() {
    dispatch({ type: types.SYSTEM_SET_INITIAL_STATE })
  }

  function systemLookupUpdate(systemLookupData) {
    dispatch({ type: types.SYSTEM_LOOKUP_UPDATE, systemLookupData: systemLookupData })
  }

  function systemLookupSetInitialState() {
    dispatch({ type: types.SYSTEM_LOOKUP_SET_INITIAL_STATE })
  }

  const postData = async (url = "", data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
  }

  const getTeamMember = async () => {
    let data = await postData("/comp-dev-api/find/teammembers", {find: {"_id": state.teamMember._id}, limit: 0})

    let teamMember = {}
    if(data.docs && data.docs.length > 0) {
      teamMember = data.docs[0]
    }

    return teamMember
  }

  const createTeamMember = async () => {
    await postData("/comp-dev-api/create/teammembers", [state.teamMember])
  }

  const saveTeamMember = async () => {
    await postData("/comp-dev-api/update/teammembers", state.teamMember)
  }

  const deleteTeamMember = async () => {
    await postData("/comp-dev-api/delete/teammembers", state.teamMember)
  }

  const getTeamMembers = async () => {
    let searchValue = state.teamMemberLookup.searchValue

    let data = await postData("/comp-dev-api/list/teammembers", {search: {value: searchValue}, limit: 100, sort: {"timestamp": -1}})

    let teamMembers = []
    if(data.docs && data.docs.length > 0) {
      teamMembers = data.docs
    }

    return teamMembers
  }

  const getSystem = async () => {
    let data = await postData("/comp-dev-api/find/systems", {find: {"_id": state.system._id}, limit: 0})

    let system = {}
    if(data.docs && data.docs.length > 0) {
      system = data.docs[0]
    }

    return system
  }

  const saveSystem = async (systemData) => {
    await postData("/comp-dev-api/update/systems", systemData)
  }

  return {
    teamMemberUpdate,
    teamMemberSetInitialState,
    teamMemberLookupUpdate,
    teamMemberLookupSetInitialState,
    teamMemberListRetrieve,
    systemRetrieve,
    systemUpdate,
    systemSetInitialState,
    systemLookupUpdate,
    systemLookupSetInitialState,
  }
}
