import initialData from '../_SEED_DATA_/campaigns'

export default (state = initialData, action) => {
    switch (action.type) {
        case 'UPDATE_CAMPAIGN':
            const { id, date } = action.payload;
            const campaign = state.findIndex(item => item.id === id)
            return state.map(
                (content, i) => i === campaign ? { ...content, scheduledOn: date }
                    : content
            )
        default:
            return state
    }
}
