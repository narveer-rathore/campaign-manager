import { GET_CAMPAIGNS, UPDATE_CAMPAIGN } from '../actions/types';

import initialData from '../_SEED_DATA_/campaigns';

export default (state = initialData, action) => {
    switch (action.type) {
        case UPDATE_CAMPAIGN:
            const { id, date } = action.payload;
            const campaign = state.findIndex(item => item.id === id)
            console.log(state)
            const updated = state.map(
                (content, i) => {
                    console.log(i, campaign)
                    if (i === campaign) {
                        return {
                            ...content,
                            scheduledOn: date
                        }
                    } else {
                        return content;
                    }
                }
            )

            console.log(updated);
            return updated;
        case GET_CAMPAIGNS:
            return action.payload;
        default:
            return state
    }
}
