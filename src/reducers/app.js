let store = {
  "uri": false,
  uploader_vis: false
}

const app = (state = store, action) => {

  switch (action.type) {

    case 'HCARD_UPDATE_AVATAR_IMG':

      store = {
        ...state,
        uri: action.uri
      }

      break

    case 'HCARD_TOGGLE_UPLOADER':

      store = {
        ...state,
        uploader_vis: state.uploader_vis ? false : true
      }

      break

    default:

      store = state

  }

  return store

}

export default app
