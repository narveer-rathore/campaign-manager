import { UPDATE_CAMPAIGN } from '../actions/types';

import initialData from '../_SEED_DATA_/campaigns';

export default (state = initialData, action) => {
    switch (action.type) {
        case UPDATE_CAMPAIGN:
            const { id, date } = action.payload;
            const campaignIndex = state.findIndex(item => item.id === id)
            // Update data a 'campaignIndex'
            return state.map(
                (content, i) => {
                    if (i === campaignIndex) {
                        return {
                            ...content,
                            scheduledOn: date
                        }
                    } else {
                        return content;
                    }
                }
            );
        default:
            return state
    }
}
