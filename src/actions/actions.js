import { GET_CAMPAIGNS, UPDATE_CAMPAIGN, SET_LOADER } from './types';

export const updateCampaign = (payload) => dispatch => {
    console.log(payload)
    dispatch({
        type: UPDATE_CAMPAIGN,
        payload
    })
}

export default {
    updateCampaign
}
