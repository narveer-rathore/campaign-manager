export const updateCampaign = (payload) => dispatch => {
    dispatch({
        type: 'UPDATE_CAMPAIGN',
        payload
    })
}
