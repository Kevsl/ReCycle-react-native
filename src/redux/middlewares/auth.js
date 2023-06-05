import { loginThunk } from '../reducers/auth'
import { setMessage } from '../reducers/message'

export const authMiddleware = (store) => (next) => (action) => {
    const dispatch = store.dispatch
    const _next = next(action)

    switch (action.type) {
        case loginThunk.rejected.type: {
            const error = action.payload

            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            dispatch(setMessage(message))
            break
        }
        default: {
            break
        }
    }

    return _next
}
