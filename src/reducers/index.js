import initialData from '../_SEED_DATA_/campaigns'

export default (state = initialData, action) => {
    switch (action.type) {
        case 'UPDATE_CAMPAIGN':
            return {
                result: action.payload
            }
        default:
            return state
    }
}
