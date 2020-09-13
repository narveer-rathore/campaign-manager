import { UPDATE_CAMPAIGN, SET_LOADER } from './types';

export const updateCampaign = (payload) => dispatch => {
    dispatch({
        type: UPDATE_CAMPAIGN,
        payload
    })
}

export default {
    updateCampaign
}
