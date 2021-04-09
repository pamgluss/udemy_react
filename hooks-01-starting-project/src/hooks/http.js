import { useReducer, useCallback } from 'react'

const httpReducer = (httpState, action) => {
    switch(action.type){
        case 'SEND':
        return { 
          loading: true, 
          error: null, 
          data: null, 
          extra: null 
        }
        case 'RESPONSE':
        return { 
            ...httpState, 
            loading: false, 
            data: action.data, 
            extra: action.extra ,
            identifier: action.identifier
        }
        case 'ERROR':
        return { loading: false, error: action.error}
        case 'CLEAR_ERROR':
        return { ...httpState, error: null }
        default:
        throw new Error('Invalid action type')
    }
}

const useHttp = () => {
    const [httpState, httpDispatch] = useReducer(httpReducer, { 
            loading: false, 
            error: null,
            data: null,
            extra: null
        })

    const sendRequest = useCallback((url, method, body, requestExtra, identifier) => {
        httpDispatch({ type: 'SEND' })
        fetch(url, {
            method: method,
            body: body,
            headers: { 'Content-type': 'application/json' }
          }).then(response => {
            return response.json();
          }).then(responseData => {
            httpDispatch({ 
              type: 'RESPONSE', 
              data: responseData, 
              extra: requestExtra, 
              identifier: identifier 
            });
          }).catch(error => {
            httpDispatch({ type: 'ERROR', error: `Something went wrong! Firebase said: ${error.message}`})
          })
    }, []);

    const clearError = useCallback(() => {
        httpDispatch({ type: 'CLEAR_ERROR'})
      }, [])

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        clearError: clearError,
        requestExtra: httpState.extra,
        identifier: httpState.identifier
    };
}

export default useHttp;